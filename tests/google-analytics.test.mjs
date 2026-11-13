import assert from 'node:assert/strict'
import test from 'node:test'

import { createGoogleAnalytics } from '../docs/.vitepress/theme/google-analytics.mjs'

const measurementId = 'G-J2ZN330W2Z'

function createBrowser() {
  const scripts = []
  const browser = {
    location: { href: 'https://bethere.ai/' },
    document: {
      title: 'BeThere',
      referrer: 'https://www.google.com/',
      createElement(tag) {
        assert.equal(tag, 'script')
        return {}
      },
      head: { appendChild: script => scripts.push(script) },
    },
  }
  const commands = () => (browser.dataLayer || []).map(command => [...command])
  const pageviews = () => commands().filter(([type, event]) => type === 'event' && event === 'page_view')
  return { browser, scripts, commands, pageviews }
}

test('loads no Google tag and queues no events before analytics consent', () => {
  const { browser, scripts, commands } = createBrowser()
  const analytics = createGoogleAnalytics(measurementId, browser)

  assert.equal(analytics.capturePageview('/pricing/'), false)
  assert.equal(analytics.setConsent(false), false)
  assert.deepEqual(scripts, [])
  assert.deepEqual(commands(), [])
  assert.equal(browser[`ga-disable-${measurementId}`], true)
})

test('consent loads the supplied GA4 property and captures the landing page once', () => {
  const { browser, scripts, commands, pageviews } = createBrowser()
  const analytics = createGoogleAnalytics(measurementId, browser)

  assert.equal(analytics.setConsent(true), true)
  assert.equal(scripts.length, 1)
  assert.equal(scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${measurementId}`)
  assert.equal(scripts[0].async, true)
  assert.equal(browser[`ga-disable-${measurementId}`], false)
  assert.deepEqual(commands()[0], ['consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  }])
  const config = commands().find(([type]) => type === 'config')
  assert.equal(config[1], measurementId)
  assert.equal(config[2].send_page_view, false)
  assert.equal(config[2].allow_google_signals, false)
  assert.deepEqual(pageviews(), [['event', 'page_view', {
    send_to: measurementId,
    page_location: 'https://bethere.ai/',
    page_title: 'BeThere',
    page_referrer: 'https://www.google.com/',
  }]])

  assert.equal(analytics.setConsent(true), false)
  assert.equal(analytics.capturePageview('/#features'), false)
  assert.equal(pageviews().length, 1)
  assert.equal(scripts.length, 1)
})

test('tracks navigation, titles, campaign queries, and back navigation with correct referrers', () => {
  const { browser, pageviews } = createBrowser()
  const analytics = createGoogleAnalytics(measurementId, browser)
  analytics.setConsent(true)

  browser.document.title = 'Pricing | BeThere'
  browser.location.href = 'https://bethere.ai/pricing/?utm_source=newsletter#plans'
  assert.equal(analytics.capturePageview(), true)
  assert.equal(analytics.capturePageview('/pricing/?utm_source=newsletter#faq'), false)
  assert.deepEqual(pageviews()[1][2], {
    send_to: measurementId,
    page_location: 'https://bethere.ai/pricing/?utm_source=newsletter',
    page_title: 'Pricing | BeThere',
    page_referrer: 'https://bethere.ai/',
  })

  browser.document.title = 'BeThere'
  assert.equal(analytics.capturePageview('/'), true)
  assert.equal(pageviews()[2][2].page_referrer, 'https://bethere.ai/pricing/?utm_source=newsletter')
})

test('withdrawal blocks collection and renewed consent resumes without a second tag', () => {
  const { browser, scripts, commands, pageviews } = createBrowser()
  const analytics = createGoogleAnalytics(measurementId, browser)
  analytics.setConsent(true)
  analytics.setConsent(false)

  assert.equal(browser[`ga-disable-${measurementId}`], true)
  assert.deepEqual(commands().at(-1), ['consent', 'update', { analytics_storage: 'denied' }])
  assert.equal(analytics.capturePageview('/pricing/'), false)
  assert.equal(pageviews().length, 1)

  assert.equal(analytics.setConsent(true, '/pricing/'), true)
  assert.equal(browser[`ga-disable-${measurementId}`], false)
  assert.equal(pageviews().length, 2)
  assert.equal(scripts.length, 1)
  assert.equal(pageviews()[1][2].page_location, 'https://bethere.ai/pricing/')
})

test('missing or invalid measurement IDs and server rendering stay disabled', () => {
  for (const id of [undefined, '', 'GTM-EXAMPLE', 'invalid']) {
    const { browser, scripts, commands } = createBrowser()
    const analytics = createGoogleAnalytics(id, browser)
    assert.equal(analytics.setConsent(true), false)
    assert.deepEqual(scripts, [])
    assert.deepEqual(commands(), [])
  }
  assert.equal(createGoogleAnalytics(measurementId).setConsent(true), false)
})

test('a blocked tag or failing analytics client does not interrupt navigation', () => {
  const { browser } = createBrowser()
  const analytics = createGoogleAnalytics(measurementId, browser)
  // No script load callback: events queue safely even if the network blocks GA.
  assert.equal(analytics.setConsent(true), true)
  browser.gtag = () => { throw new Error('Analytics unavailable') }
  assert.equal(analytics.capturePageview('/pricing/'), false)
  assert.equal(analytics.setConsent(false), false)
  assert.equal(browser[`ga-disable-${measurementId}`], true)
})
