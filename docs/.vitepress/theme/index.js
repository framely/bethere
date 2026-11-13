import { h, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NavContentAfter from './nav-content-after.vue'
import HomeFeaturesAfter from './home-features-after.vue'
import CFooter from '../../components/footer/columnFooter.vue'
import CookieConsentVue, { CookieConsent } from './cookie-consent.js'
import {
  captureWebsitePageview,
  setWebsiteAnalyticsConsent,
} from './analytics.mjs'
import '../styles/index.scss'

const themeStorageKey = 'vitepress-theme-appearance'
const themeDefaultKey = 'bethere-theme-default'
const themeOptions = ['light', 'dark', 'auto']

function applyUrlTheme(href = window.location.href) {
  const url = new URL(href, window.location.origin)
  const requestedTheme = url.searchParams.get('theme')
  const savedTheme = localStorage.getItem(themeStorageKey)
  let theme = 'light'

  if (themeOptions.includes(requestedTheme)) {
    theme = requestedTheme
    localStorage.setItem(themeDefaultKey, 'light')
  } else if (localStorage.getItem(themeDefaultKey)) {
    theme = themeOptions.includes(savedTheme) ? savedTheme : 'light'
  } else {
    localStorage.setItem(themeDefaultKey, 'light')
  }

  localStorage.setItem(themeStorageKey, theme)

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark' || (theme === 'auto' && prefersDark)
  )
}

function syncWebsiteAnalyticsConsent() {
  setWebsiteAnalyticsConsent(CookieConsent.acceptedCategory('analytics'))
}

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NavContentAfter),
      'home-features-after': () => h(HomeFeaturesAfter),
      'layout-bottom': () => [
        h(CFooter),
        h('div', { class: 'website-cookie-settings' }, [
          h('button', { type: 'button', onClick: () => CookieConsent.showPreferences() }, 'Cookie settings'),
        ]),
      ],
    })
  },
  async enhanceApp({ app, router }) {
    if (!import.meta.env.SSR) {
      applyUrlTheme()

      const onAfterRouteChanged = router.onAfterRouteChanged
      router.onAfterRouteChanged = async (to) => {
        await onAfterRouteChanged?.(to)
        applyUrlTheme(to)
        await nextTick()
        captureWebsitePageview()
      }

      app.use(CookieConsentVue, {
        onConsent: syncWebsiteAnalyticsConsent,
        onChange: ({ changedCategories }) => {
          if (changedCategories.includes('analytics')) {
            syncWebsiteAnalyticsConsent()
          }
        },
        categories: {
          necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
          },
          analytics: {
            autoClear: {
              cookies: [{ name: /^_ga/ }],
            },
          }
        },

        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'We use cookies',
                description: 'We use necessary cookies to operate this website. With your permission, we also use analytics cookies to understand page visits and improve the website.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Accept only necessary cookies',
                showPreferencesBtn: 'Manage preferences',
              },
              preferencesModal: {
                title: 'Cookie preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Accept only necessary cookies',
                savePreferencesBtn: 'Save preferences',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: 'Necessary cookies',
                    description: 'These cookies remember your preferences and keep the website working.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Analytics cookies',
                    description: 'Google Analytics and, when configured, PostHog help us understand which pages visitors use. You can turn these cookies off at any time.',
                    linkedCategory: 'analytics',
                  },
                ],
              },
            }
          }
        }
      });
    }
  }
}
