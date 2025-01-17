---
aside: false
layout: home
---
<script setup>
  import Pricing from '../components/pricing/pricing.vue';
</script>

<Pricing :pricingPlan="{
    title:'Simple membership billing for builders and agents',
    tagline: 'Usage-based pricing for OpenCUI-hosted agents.',
    cards: [
      {
        package:'Build',
        price: '$20',
        badge: 'per builder/mo',
        tagline: 'Build and sell conversational components.',
        features: [
          'Public modules',
          'Public chatbot',
          'Dual process support',
          'Deploy to test environment',
          'Version control',
          'Knowledgebase',
          'Multiple languages',
          'Basic support',
          'Open sourced NLU models',
        ],
        buttonText: 'Start 30-day trial',
        link: 'https://build.opencui.io'
      },
      {
        package:'Serve',
        price: '$50',
        badge: 'per agent/mo',
        tagline: 'Serve users with customized conversational experiences.',
        features: [
          'Production environment',
          'Unlimited dependency update',
          'Quick-start deployment',
          'Managed NLU models',
          'Channel integrations',
          'Contact center integration',
          'Priority support',
          '50k messages/mo',
          'Usage based billing beyond that',
        ],
        buttonText: 'Start to build',
        link: 'https://build.opencui.io'
      },
      {
        package:'Developement',
        price: 'Custom',
        badge: '',
        tagline: 'Enterprise-grade integrations and private deployments.',
        features: [
          'Export agent for private deployment',
          'Bring your own LLM',
          '1-1 training and onboarding',
          'Integrations development',
          'Named support',
          'Custom contracting',
          'Advanced security',
        ],
        buttonText: 'Contact Sales',
        link: 'mailto:sean.wu@bethere.ai'
      }
    ]
  }" 
/>

<!-- <Footer /> -->

<!-- ---
layout: pricing
title: Conversational experience that works.
tagline: When the wave arrives and you don't want to be left behind, all you have to do is pick up the right tools and start to build.
cards:
    - package: Builder
      price: $0
      badge: per user / year
      tagline: For these who want to build CUI the right way and share what they build.
      features:
                -  Public Projects
                -  Public Libraries
                -  CUI Components
                -  Multiple Language
                -  Hosting Backoffice
                -  Basic NLU Model
                -  Development environment
                -  Community Support
      buttonText: Start to build
      link: https://build.opencui.io

    - package: Business
      price: Custom
      badge: 
      tagline: Give us APIs that you want to expose conversationally along with conversational interaction design, we take care the rest.
      features:
                - 'Everything included in Starter and: '
                - Larger, purpose built NLU Model
                - Channel integration
                - Private deploy
                - OpenCUI hosting in production environment
                - Custom Integrations
                - Advanced security, performance and customer success
      buttonText: What are you waiting for?
      link: https://build.opencui.io

--- -->
