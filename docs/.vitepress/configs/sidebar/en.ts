
export const en = {
  '/copilot/': [
    {
      text: 'Copilot',
      items: [
        { text: 'Why copilot', link: '/copilot/why-copilot' },
        { text: 'Development overview', link: '/copilot/overview' },
        { text: 'Implement copilot meta API', link: '/copilot/define-api' },
        { text: 'Build copilot backend', link: '/copilot/build-copilot' },
        { text: 'Build copilot frontend', link: '/copilot/opencui-sdk' },
      ],
    }
  ],
  '/reference/': [
    {
      text: 'CUI Reimagined',
      collapsed: false,
      items: [
        { text: 'Schema-driven CUI', link: '/reference/essentials/3layers' },
        { text: 'Projects', link: '/reference/essentials/projects' },
        { text: 'Type system', link: '/reference/essentials/concepts' },
        {
          text: 'Dialog Annotations',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/reference/annotations/overview' },
            { text: 'Ask strategy', link: '/reference/annotations/fillstrategy' },
            { text: 'Initialization', link: '/reference/annotations/init' },
            { text: 'Value recommendation', link: '/reference/annotations/valuerec' },
            { text: 'Value check', link: '/reference/annotations/valuecheck' },
            { text: 'Confirmation', link: '/reference/annotations/confirmation' },
            { text: 'State transition', link: '/reference/annotations/transition' }, 
            { text: 'System1', link: '/reference/annotations/system1' },
            { text: 'System CUI Components', link: '/reference/annotations/systemcomponent' }
          ],
        },   
        { text: 'Dual processes', link: '/reference/essentials/dual-process' },
        {
          text: 'Conversation Design',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/reference/conversation-design/conversation-design' },
            { text: 'Get started', link: '/reference/conversation-design/get-started' },
            { text: 'Gathering requirements', link: '/reference/conversation-design/gathering-requirements' },
            { text: 'Design interactions', link: '/reference/conversation-design/design-interactions' },
            { text: 'Key use cases', link: '/reference/conversation-design/key-use-cases' },
            { text: 'Test and iterate', link: '/reference/conversation-design/test-and-iterate' },
            { text: 'Design for the long tail', link: '/reference/conversation-design/design-for-long-tail' },
            { text: 'Scale your design', link: '/reference/conversation-design/scale-your-design' },
            { text: 'Document design', link: '/reference/essentials/document-requirement-for-cui' },
            { text: '5 levels of CUI', link: '/reference/essentials/5levels-cui' },
          ]
        },
      ],
    },
    {
      text: 'Quickstart',
      collapsed: false,
      items: [
        { text: 'Clone an echo chatbot', link: '/reference/guide/clone-simple-chatbot' },
        { text: 'Build an echo chatbot', link: '/reference/guide/build-simple-chatbot' },
        { text: 'Reuse an hours module', link: '/reference/guide/reuse-component' },
        { text: 'Build an hours module', link: '/reference/guide/build-module' },
        { text: 'Build an hours provider', link: '/reference/guide/build-provider' },
        { text: 'Deploy a chatbot', link: '/reference/guide/deploy-to-channel' },
        { text: 'Get a team', link: '/reference/guide/are-you-ready' },
        { text: 'OpenCUI workflow', link: '/reference/guide/opencui-flow' },
      ],
    }, 
    {
      text: 'Providers',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/reference/providers/overview' },
        { text: 'PostgreSQL provider', link: '/reference/providers/postgrest' }
      ]
    },
    {
      text: 'Channels',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/reference/channels/overview' },
        { text: 'Universal Channel', link: '/reference/channels/universalmessage' },
        { text: 'Google Business Message', link: '/reference/channels/googlebusiness' },
        { text: 'Messenger', link: '/reference/channels/messenger' },
        { text: 'WhatsApp', link: '/reference/channels/whatsapp' },
      ],
    },
    {
      text: 'Supports',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/reference/support/overview' },
        { text: 'Chatwoot', link: '/reference/support/Chatwoot' }
      ],
    },
    {
      text: 'Extension',
      collapsed: true,
      items: [
        { text: 'Extensions', link: '/reference/providers/extension' },
        { text: 'Native provider', link: '/reference/providers/native' }
      ]
    },
    {
      text: 'Platform',
      collapsed: true,
      items: [
        { text: 'Multilingual', link: '/reference/platform/multilingual' },
        { text: 'Testing', link: '/reference/platform/testing' },
        { text: 'Deployment', link: '/reference/platform/deployment' },
        { text: 'Version control', link: '/reference/platform/versioncontrol' },
        { text: 'Access control', link: '/reference/platform/access' },
        { text: 'Reusability', link: '/reference/platform/reusability' }
      ]
    },
    {
      text: "Glossary",
      link: '/reference/glossary'
    }
  ]
}
