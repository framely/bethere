import{_ as e,a as o,b as t}from"./chunks/select-channel.e11aa0a0.js";import{_ as s,c as n,o as r,N as a}from"./chunks/framework.184eb22e.js";const i="/images/channelConfig/messenger/test.png",l="/images/channelConfig/messenger/add-messenger.png",c="/images/channelConfig/messenger/add-page.png",p="/images/channelConfig/messenger/generate-token.png",g="/images/channelConfig/messenger/add-channel.png",h="/images/channelConfig/messenger/config-webhook.png",u="/images/channelConfig/messenger/add-subscriptions.png",A=JSON.parse('{"title":"Messenger","description":"","frontmatter":{},"headers":[],"relativePath":"reference/channels/messenger.md","lastUpdated":1679557106000}'),d={name:"reference/channels/messenger.md"},m=a('<h1 id="messenger" tabindex="-1">Messenger <a class="header-anchor" href="#messenger" aria-label="Permalink to &quot;Messenger&quot;">​</a></h1><p>::: right <img src="'+i+'" alt="test"> ::: The <a href="https://developers.facebook.com/docs/messenger-platform/introduction" target="_blank" rel="noreferrer">Messenger Platform</a> is meant for businesses to handle inquiries from their customers. Using the Facebook Messenger integration, you can create a Facebook Messenger bot to interact with your end-users within your business.</p><p>We are going to show here how to integrate OpenCUI with Messenger and deploy the chatbot to a OpenCUI hosted environment. For the private deployment, please consult systems in your organization.</p><p>Follow these steps to configure:</p><nav class="table-of-contents"><ul><li><a href="#before-you-begin">Before you begin</a></li><li><a href="#set-up-messenger">Set up Messenger</a></li><li><a href="#configure-messenger-from-opencui">Configure Messenger from OpenCUI</a></li><li><a href="#finish-messenger-setup">Finish Messenger setup</a></li><li><a href="#test-your-chatbot">Test Your Chatbot</a></li></ul></nav><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h2><p>On the Messenger side, please ensure you have all of the following:</p><ul><li><strong>Facebook Page</strong>: A Facebook Page will be used as the identity of your Messenger experience. To create a new Page, visit <a href="https://www.facebook.com/pages/create" target="_blank" rel="noreferrer">Create a Page</a>.</li><li><strong>Developer Account</strong>: Your developer account is required to create new apps. To create a new developer account, go to the <a href="https://developers.facebook.com/" target="_blank" rel="noreferrer">Meta Developers</a> website and click the &#39;Get Started&#39; button.</li><li><strong>Facebook App</strong>: The Facebook app contains the settings for your Messenger experience, including access tokens. To create a new app, visit your <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer">app dashboard</a> and click on &#39;Create App&#39; in the top right corner.</li></ul><h2 id="set-up-messenger" tabindex="-1">Set up Messenger <a class="header-anchor" href="#set-up-messenger" aria-label="Permalink to &quot;Set up Messenger&quot;">​</a></h2><ol><li><p>Use <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer">Meat App Dashboard</a> to add the Messenger product to your Meta App:</p><ol><li>Enter the App you want to configure, click <strong>Add Product</strong> on the left sidebar menu.</li><li>Click <strong>Set Up</strong> button on <strong>Messenger</strong> product.</li></ol><p>::: thumbnail <img src="'+l+'" alt="add messenger"> :::</p></li><li><p>Subscribe your app to a Facebook page. Go to <strong>Messenger &gt; Settings</strong> panel, scroll down to <strong>Access Tokens</strong> section, click <strong>Add or Remove Pages</strong> button and select your page.</p><p>::: thumbnail <img src="'+c+'" alt="add page"> :::</p></li><li><p>Then you will be provided with an access token at this step. In the <strong>Access Tokens</strong> section, click <strong>Generate Token</strong> button. 📋 Copy this value. This token will be used to configure the integration from the OpenCUI platform.</p><p>::: thumbnail <img src="'+p+'" alt="generate token"> :::</p></li></ol><h2 id="configure-messenger-from-opencui" tabindex="-1">Configure Messenger from OpenCUI <a class="header-anchor" href="#configure-messenger-from-opencui" aria-label="Permalink to &quot;Configure Messenger from OpenCUI&quot;">​</a></h2><ol><li><p>On OpenCUI platform, go to service component <a href="https://build.opencui.io/org/io.opencui/agent/channel/struct/service_schema" target="_blank" rel="noreferrer">io.opencui.channel</a>:</p><ol><li>Click <strong>Import</strong> button on the second topbar.</li><li>Select the chatbot you want to configure Messenger channel and <strong>Save</strong>.</li></ol><p>::: thumbnail <img src="'+e+'" alt="import channel component"> :::</p></li><li><p>Once you have done, switch to your chatbot to wire Messenger channel:</p><ol><li>On <strong>STRUCT</strong> level, head to <strong>Settings</strong> page, in the <strong>Integrations</strong> tab, select the service you just import. In this case, please select <strong>io.opencui.channel.IChannel</strong>.</li><li>A configuration dialog opens, at <strong>Service Provider</strong> field, select <strong>io.opencui.messenger</strong> to wiring Messenger channel.</li></ol><p>::: thumbnail <img src="'+o+'" alt="select the service"><em>Select service io.opencui.channel.IChannel</em></p><br><p><img src="'+t+'" alt="select a channel"><em>Wire Messenger channel</em> :::</p></li><li><p>Continue inside the dialog, configure Messenger integration as following:</p><ul><li><strong>Label</strong>: Enter channel label, should be <strong>unique</strong>.</li><li><strong>Verify Token</strong>: Enter any private token you desire. 📋 Copy this value. This will be used to configure the Messenger Webhook.</li><li><strong>Page Access Token</strong>: Paste the access token you copied during the Facebook app setup above.</li><li><strong>Locale</strong>: Select locale which determines the default language used by your bot.</li><li><strong>Callback URL</strong>: 📋 Copy this value after setting the label and locale. This will be used to configure the Messenger Webhook.</li></ul><p>::: thumbnail <img src="'+g+'" alt="add channel"> :::</p></li><li><p>Before you go to next step, don&#39;t forget to merge your changes into master and deploy your chatbot.</p></li></ol><h2 id="finish-messenger-setup" tabindex="-1">Finish Messenger setup <a class="header-anchor" href="#finish-messenger-setup" aria-label="Permalink to &quot;Finish Messenger setup&quot;">​</a></h2><ol><li><p>Configure the Messenger webhook for your app. Back to your Meta App:</p><ol><li>Go to <strong>Messenger &gt; Settings</strong> panel, scroll down to <strong>Webhooks</strong> section, click <strong>Add Callback URL</strong> button.</li><li>A Webhook setting dialog opens, use the <strong>Callback URL</strong> and <strong>Verify Token</strong> values you copied above, click <strong>Verify and Save</strong> button.</li></ol><p>::: thumbnail <img src="'+h+'" alt="config webhook"> :::</p></li><li><p>In the <strong>Webhooks</strong> section, click <strong>Add subscriptions</strong> button and enable <code>messages</code> and <code>messaging_postbacks</code> in the page subscriptions.</p><p>::: thumbnail <img src="'+u+'" alt="add subscriptions"> :::</p></li></ol><h2 id="test-your-chatbot" tabindex="-1">Test Your Chatbot <a class="header-anchor" href="#test-your-chatbot" aria-label="Permalink to &quot;Test Your Chatbot&quot;">​</a></h2><ol><li>To test that your app setup was successful, go to your page and send a message to yourself. If you get a response, you have fully set up your app for receiving messages! 🎉</li><li>To make the app accessible to the public, switch to <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode" target="_blank" rel="noreferrer">live mode</a>.</li></ol><div class="tip custom-block"><p class="custom-block-title">Two app modes in Facebook apps</p><ul><li>In the <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode" target="_blank" rel="noreferrer">development mode</a>, only the administrator and tester that you invited can access the app. In this case, talk to the chatbot.</li><li>In the <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode" target="_blank" rel="noreferrer">live mode</a>, apps can request <a href="https://developers.facebook.com/docs/permissions/reference" target="_blank" rel="noreferrer">permissions</a> from anyone, but only permissions approved through <a href="https://developers.facebook.com/docs/app-review" target="_blank" rel="noreferrer">App Review</a>. Click <a href="https://developers.facebook.com/docs/messenger-platform/app-review/" target="_blank" rel="noreferrer">here</a> to submit your app for review.</li></ul></div>',17),b=[m];function f(k,v,_,y,w,C){return r(),n("div",null,b)}const S=s(d,[["render",f]]);export{A as __pageData,S as default};
