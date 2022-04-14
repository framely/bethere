import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta' 

export const en: NavbarConfig = [ 
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'Annotations',
        children: [
          '/reference/annotations/overview.md',
          '/reference/annotations/vr.md',
          '/reference/annotations/confirmation.md',
        ],
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
          '/reference/support/overview.md'
        ],
      },
    ],
  },
  {
    text: 'Blog',
    link: '/articles/' 
  }
]
