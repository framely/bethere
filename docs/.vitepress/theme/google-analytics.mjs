export const googleAnalyticsMeasurementId = (
  import.meta.env?.VITE_GA_MEASUREMENT_ID ?? 'G-J2ZN330W2Z'
).trim()

// Keep the browser injectable so consent and navigation can be checked without
// loading Google's script or sending test traffic to the production property.
export function createGoogleAnalytics(measurementId, browserWindow = globalThis.window) {
  const browserDocument = browserWindow?.document
  let initialized = false
  let consentGranted = false
  let lastPageUrl

  function initialize() {
    if (initialized) return true
    if (!/^G-[A-Z0-9]+$/.test(measurementId) || !browserDocument) return false

    browserWindow.dataLayer = browserWindow.dataLayer || []
    browserWindow.gtag = browserWindow.gtag || function () {
      browserWindow.dataLayer.push(arguments)
    }
    browserWindow.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    browserWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
    browserWindow.gtag('js', new Date())
    // VitePress navigation sends page views explicitly after rendering.
    browserWindow.gtag('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })

    const script = browserDocument.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    browserDocument.head.appendChild(script)
    initialized = true
    return true
  }

  function capturePageview(href) {
    if (!initialized || !consentGranted) return false

    try {
      const page = new URL(href || browserWindow.location.href, browserWindow.location.href)
      page.hash = ''
      if (page.href === lastPageUrl) return false

      browserWindow.gtag('event', 'page_view', {
        send_to: measurementId,
        page_location: page.href,
        page_title: browserDocument.title,
        page_referrer: lastPageUrl ?? browserDocument.referrer,
      })
      lastPageUrl = page.href
      return true
    } catch {
      // Analytics must never interfere with website navigation.
      return false
    }
  }

  function setConsent(granted, href) {
    if (!browserDocument || !/^G-[A-Z0-9]+$/.test(measurementId)) return false

    // Also stops automatic collection by an already-loaded tag after withdrawal.
    browserWindow[`ga-disable-${measurementId}`] = !granted
    if (!granted) {
      consentGranted = false
      lastPageUrl = undefined
      if (initialized) {
        try {
          browserWindow.gtag('consent', 'update', { analytics_storage: 'denied' })
        } catch {
          // The disable flag still blocks collection if the tag is unavailable.
        }
      }
      return false
    }

    try {
      if (initialized && !consentGranted) {
        browserWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
      }
      if (!initialize()) return false
      consentGranted = true
      return capturePageview(href)
    } catch {
      return false
    }
  }

  return { capturePageview, setConsent }
}
