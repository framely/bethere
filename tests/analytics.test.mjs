import assert from 'node:assert/strict'
import test from 'node:test'

import { createWebsiteAnalytics } from '../docs/.vitepress/theme/analytics.mjs'

function createClient() {
  const calls = []

  return {
    calls,
    init(token, options) {
      calls.push(['init', token, options])
    },
    opt_in_capturing() {
      calls.push(['opt_in'])
    },
    opt_out_capturing() {
      calls.push(['opt_out'])
    },
    capture(event, properties) {
      calls.push(['capture', event, properties])
    },
  }
}

test('captures consented page views and stops after consent is revoked', () => {
  const client = createClient()
  const analytics = createWebsiteAnalytics(client, 'test-token')

  assert.equal(analytics.capturePageview('https://bethere.ai/'), false)
  assert.deepEqual(client.calls, [])

  assert.equal(analytics.setConsent(true, 'https://bethere.ai/'), true)
  assert.equal(client.calls[0][0], 'init')
  assert.equal(client.calls[0][1], 'test-token')
  assert.deepEqual(client.calls[0][2], {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026-05-30',
    person_profiles: 'identified_only',
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
    advanced_disable_feature_flags: true,
    opt_out_capturing_by_default: true,
  })
  assert.deepEqual(client.calls[1], ['opt_in'])
  assert.deepEqual(client.calls[2], [
    'capture',
    '$pageview',
    {
      $current_url: 'https://bethere.ai/',
      website_path: '/',
      surface: 'website',
    },
  ])

  assert.equal(analytics.capturePageview('https://bethere.ai/#features'), false)
  assert.equal(analytics.capturePageview('/about?source=nav'), true)
  assert.deepEqual(client.calls[3], [
    'capture',
    '$pageview',
    {
      $current_url: 'https://bethere.ai/about?source=nav',
      website_path: '/about?source=nav',
      surface: 'website',
    },
  ])

  assert.equal(analytics.setConsent(false), false)
  assert.deepEqual(client.calls[4], ['opt_out'])
  assert.equal(analytics.capturePageview('/pricing'), false)
  assert.equal(client.calls.length, 5)
})

test('does not initialize PostHog when the project token is absent', () => {
  const client = createClient()
  const analytics = createWebsiteAnalytics(client, undefined)

  assert.equal(analytics.setConsent(true, 'https://bethere.ai/'), false)
  assert.deepEqual(client.calls, [])
})
