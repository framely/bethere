# OpenCUI

[![github check](https://github.com/vuepress/vuepress-next/workflows/check/badge.svg)](https://github.com/vuepress/vuepress-next/actions?query=workflow%3Acheck)
[![github docs](https://github.com/vuepress/vuepress-next/workflows/docs/badge.svg)](https://github.com/vuepress/vuepress-next/actions?query=workflow%3Adocs)
[![npm](https://badgen.net/npm/v/vuepress/next)](https://www.npmjs.com/package/vuepress)
[![coverage](https://coveralls.io/repos/github/vuepress/vuepress-next/badge.svg?branch=main)](https://coveralls.io/github/vuepress/vuepress-next?branch=main)
[![license](https://badgen.net/github/license/vuepress/vuepress-next)](https://github.com/vuepress/vuepress-next/blob/main/LICENSE)
[![discord](https://badgen.net/discord/online-members/ptFjefy6H5?icon=discord&label=discord)](https://discord.gg/ptFjefy6H5)

## Status: Beta

For users from VuePress v1, please check out the [migration guide](https://v2.vuepress.vuejs.org/guide/migration.html).

For users who want to follow our progress or contribute to this project, please check out the [roadmap](https://github.com/vuepress/vuepress-next/discussions/68).

## Local development

```
npm ci
npm run dev
```

Copy `.env.example` to `docs/.env.local` (VitePress uses `docs` as its root).
Set `VITE_POSTHOG_PROJECT_TOKEN` there to enable consent-gated PostHog page-view analytics.

## Google Analytics

The website uses GA4 measurement ID `G-J2ZN330W2Z`. It loads Google's tag only
after the visitor accepts analytics cookies, then records the current page and
subsequent VitePress page navigations, including browser back/forward navigation.
Page views include the page URL, title, and previous page as the referrer.
Anchor changes on the same page do not count as additional views.

Visitors can change or withdraw consent using **Cookie settings** at the bottom
of every page. Withdrawal stops tracking and clears Google Analytics cookies.
The existing PostHog integration uses the same analytics consent choice.

To use another property, set `VITE_GA_MEASUREMENT_ID` in `docs/.env.local` before
building, or set the GitHub Actions repository variable of the same name for
deployment. An explicitly empty local value disables GA. These are build-time
settings; rebuild after changing them. The measurement ID is public, not a secret.

In the GA4 web data stream's **Enhanced measurement > Page views > Show advanced
settings**, turn off **Page changes based on browser history events**. The site
sends page views itself, so Google's automatic history tracking would count
navigations twice. See [Google's manual page-view documentation](https://developers.google.com/analytics/devguides/collection/ga4/views).

After deployment, accept analytics cookies and navigate between pages. Confirm
the visits in GA4 **Realtime**, or use Google Tag Assistant and **DebugView** to
inspect each `page_view`. Rejecting analytics cookies should leave Google's tag
unloaded. Local checks: `npm test` and `npm run build`.

## Contribution

See [Contributing Guide](https://github.com/vuepress/vuepress-next/blob/main/docs/contributing.md).

## License

[MIT](https://github.com/vuepress/vuepress-next/blob/main/LICENSE)
