import type { NavbarConfig } from '@vuepress/theme-default'


// import { version } from '../meta' 

export const en = [
  {
    text: 'Guide',
    link: '/guide/',

  },
  {
    text: 'Reference',
    children: [
      {
        text: 'CUI Annotations',

        children: [
          {
            text: 'Overview',
            link: '/reference/annotations/overview.html',
            icon: "/featureIcons/cui.svg",

          },
          {
            text: "Prompt Strategy",
            link: '/reference/annotations/fillstrategy.html',
            icon: "/featureIcons/separate.svg",
          },
          {
            text: "Value Recommendation",
            link: '/reference/annotations/valuerec.md',
            icon: "/featureIcons/hotfix.svg",
          },
          {
            text: "Value Check",
            link: '/reference/annotations/vc.html',
            icon: "/featureIcons/check-item.svg",
          },
          {
            text: "Confirmation",
            link: '/reference/annotations/confirmation.html',
            icon: "/featureIcons/declarative.svg",
          },
        ],
      },
      {
        text: "Provider Annotations",
        link: '/reference/annotations/providerannot.html',
      },
      {
        text: 'Channels',
        children: [
          '/reference/channels/wpa.md',
        ],
      },

      {
        text: 'Supports',
        children: [
          '/reference/support/overview.md',
          '/reference/support/Chatwoot.md'
        ],
      },
    ],
  },
  {
    text: "Pricing",
    link: "/pricing/"
  },
  {
    text: 'Blog',
    link: '/articles/'
  }
]
