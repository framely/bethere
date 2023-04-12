
export const en = {
  '/essentials/': [
    {
      text: "Why OpenCUI",
      children: [
        '/essentials/README.md',
        '/essentials/cooperative.md',
        '/essentials/5levels-cui.md',
        '/essentials/architecture.md'
      ]
    }
  ],
  '/guide/': [
    {
      text: 'Quickstart',
      children: [
        '/guide/signingup.md',
        '/guide/clone-simple-chatbot.md',
        '/guide/build-simple-chatbot.md',
        '/guide/reuse-component.md',
        '/guide/build-module.md',
        '/guide/build-provider.md',
        '/guide/deploy-to-channel.md',
        '/guide/opencui-flow.md',
        '/guide/concepts.md',
      ],
    }
  ],
  '/reference/': [
    {
      text: 'Got team?',
      link: '/reference/are-you-ready.md',
    },
    {
      text: 'Dialog Annotations',
      collapsible: true,
      children: [
        '/reference/annotations/overview.md',
        '/reference/annotations/fillstrategy.md',
        '/reference/annotations/init.md',
        '/reference/annotations/valuerec.md',
        '/reference/annotations/valuecheck.md',
        '/reference/annotations/confirmation.md',
        '/reference/annotations/transition.md',
      ],
    },
    {
      text: 'Providers',
      collapsible: true,
      children: [
        '/reference/providers/overview.md',
        '/reference/providers/native.md',
        '/reference/providers/postgrest.md'
      ]
    },
    {
      text: 'Channels',
      collapsible: true,
      children: [
        '/reference/channels/overview.md',
        '/reference/channels/universalmessage.md',
        '/reference/channels/googlebusiness.md',
        '/reference/channels/messenger.md',
        '/reference/channels/whatsapp.md',
      ],
    },
    {
      text: 'Supports',
      collapsible: true,
      children: [
        '/reference/support/overview.md',
        '/reference/support/Chatwoot.md'
      ],
    },
    {
      text: "Extensions",
      link: '/reference/providers/extension.md',
    },
    {
      text: 'CUI Components',
      collapsible: true,
      children: [
        '/reference/annotations/systemcomponent.md',
        {
          text: 'Date picker',
          link: '/reference/plugins/components/datepicker/',
          collapsible: true,
          children:[
            '/reference/plugins/components/datepicker/datepicker-design.md'
          ],
        },
      ],
    },
    {
      text: 'Platform',
      collapsible: true,
      children:[
        '/reference/platform/multilingual.md',
        '/reference/platform/testing.md',
        '/reference/platform/deployment.md',
        '/reference/platform/versioncontrol.md',
        '/reference/platform/access.md',
        '/reference/platform/reusability.md'
      ]
    },
    {
      text: "Glossary",
      link: '/reference/glossary.md'
    }
  ],
  '/policy/': [
    {
      text: 'Terms of Service',
      link: '/policy/terms.md'
    },
    {
      text: 'Privacy Policy',
      link: '/policy/privacy.md'
    }
  ]
}
