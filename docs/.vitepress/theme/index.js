import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import '../styles/index.scss'
import NavContentAfter from './nav-content-after.vue'
import HomeFeaturesAfter from './home-features-after.vue'
import CookieConsentVue from './cookie-consent.js'

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

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NavContentAfter),
      'home-features-after': () => h(HomeFeaturesAfter),
    })
  },
  async enhanceApp({ app, router }) {
    if (!import.meta.env.SSR) {
      applyUrlTheme()

      const onAfterRouteChanged = router.onAfterRouteChanged
      router.onAfterRouteChanged = async (to) => {
        await onAfterRouteChanged?.(to)
        applyUrlTheme(to)
      }

      app.use(CookieConsentVue, {
        categories: {
          necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
          },
          analytics: {}
        },

        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'We use cookies',
                description: 'We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content, to analyze our website traffic, and to understand where our visitors are coming from.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Accept only necessary cookies'
              },
            }
          }
        }
      });
    }
  }
}
