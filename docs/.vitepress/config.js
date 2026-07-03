import { FALSE } from "sass";
import { sidebar, navbar } from "./configs";

export default {
  base: '/',
  title: 'BeThere',
  appearance: false,
  head: [
    [
      'script',
      { id: 'theme-mode' },
      `;(() => {
        const storageKey = 'vitepress-theme-appearance';
        const defaultKey = 'bethere-theme-default';
        const themeOptions = ['light', 'dark', 'auto'];
        const params = new URLSearchParams(window.location.search);
        const requestedTheme = params.get('theme');
        const savedTheme = localStorage.getItem(storageKey);
        let theme = 'light';

        if (themeOptions.includes(requestedTheme)) {
          theme = requestedTheme;
          localStorage.setItem(defaultKey, 'light');
        } else if (localStorage.getItem(defaultKey)) {
          theme = themeOptions.includes(savedTheme) ? savedTheme : 'light';
        } else {
          localStorage.setItem(defaultKey, 'light');
        }

        localStorage.setItem(storageKey, theme);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'auto' && prefersDark));
      })()`
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-L6RW3F0FPM' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-L6RW3F0FPM');`
    ]
  ],
  description: 'AI receptionist for service businesses, connected to calendars and messaging channels',
  lastUpdated: '上次更新时间', // string | boolean
  docsDir: 'docs',
  themeConfig: {
    logo: '/images/logo.png',
    // levels of TOC
    outline: 'deep',
    // nav social icons
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/opencui/community' },
    //   { icon: 'linkedin', link: 'https://www.linkedin.com/company/opencui-official/' },
    // ],
    
    nav: navbar.en,
    sidebar: sidebar.en,
  },

}
