import posthog from 'posthog-js'

const postHogProjectToken = import.meta.env?.VITE_POSTHOG_PROJECT_TOKEN?.trim()

function pageDetails(href) {
  const fallbackHref = typeof window === 'undefined' ? undefined : window.location.href
  const resolvedHref = href || fallbackHref

  if (!resolvedHref) {
    return undefined
  }

  const baseUrl = typeof window === 'undefined'
    ? 'https://bethere.ai'
    : window.location.origin
  const url = new URL(resolvedHref, baseUrl)

  return {
    key: `${url.origin}${url.pathname}${url.search}`,
    currentUrl: url.href,
    path: `${url.pathname}${url.search}`,
  }
}

export function createWebsiteAnalytics(client, projectToken) {
  let initialized = false
  let consentGranted = false
  let lastPageKey

  function initialize() {
    if (initialized || !projectToken) {
      return initialized
    }

    try {
      client.init(projectToken, {
        api_host: 'https://us.i.posthog.com',
        defaults: '2026-05-30',
        person_profiles: 'identified_only',
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        advanced_disable_feature_flags: true,
        opt_out_capturing_by_default: true,
      })
      initialized = true
    } catch {
      return false
    }

    return true
  }

  function capturePageview(href) {
    if (!initialized || !consentGranted) {
      return false
    }

    const page = pageDetails(href)
    if (!page || page.key === lastPageKey) {
      return false
    }

    try {
      client.capture('$pageview', {
        $current_url: page.currentUrl,
        website_path: page.path,
        surface: 'website',
      })
      lastPageKey = page.key
      return true
    } catch {
      return false
    }
  }

  function setConsent(granted, href) {
    if (!granted) {
      consentGranted = false
      lastPageKey = undefined

      if (initialized) {
        try {
          client.opt_out_capturing()
        } catch {
          // Analytics must never interfere with website navigation.
        }
      }

      return false
    }

    if (!initialize()) {
      return false
    }

    if (!consentGranted) {
      try {
        client.opt_in_capturing()
        consentGranted = true
      } catch {
        return false
      }
    }

    return capturePageview(href)
  }

  return {
    capturePageview,
    setConsent,
  }
}

const websiteAnalytics = createWebsiteAnalytics(posthog, postHogProjectToken)

export const captureWebsitePageview = websiteAnalytics.capturePageview
export const setWebsiteAnalyticsConsent = websiteAnalytics.setConsent
