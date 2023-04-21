import{_ as e,c as t,o,N as n}from"./chunks/framework.184eb22e.js";const a="/images/guide/start-with-clone/click_clone.png",i="/images/guide/start-with-clone/clone.png",s="/images/guide/start-with-clone/switch_pingpong_en.png",r="/images/guide/start-with-clone/tryitnow_icon.png",l="/images/guide/start-with-clone/pingpong_test.png",c="/images/guide/start-with-clone/operation-icon.png",C=JSON.parse('{"title":"Clone a simple chatbot","description":"","frontmatter":{},"headers":[],"relativePath":"guide/clone-simple-chatbot.md","lastUpdated":1681411845000}'),h={name:"guide/clone-simple-chatbot.md"},p=n('<h1 id="clone-a-simple-chatbot" tabindex="-1">Clone a simple chatbot <a class="header-anchor" href="#clone-a-simple-chatbot" aria-label="Permalink to &quot;Clone a simple chatbot&quot;">​</a></h1><p>OpenCUI is a platform that makes it easy to build conversational user interfaces (CUIs) for your services. It uses a type-based approach, so you can use pre-built components instead of building everything from scratch. This can save you time and effort, and it can help you create more consistent and reliable CUIs.</p><p>On OpenCUI platform, organization is like a container for your team&#39;s shared work, and these work are organized into projects. A project is a collection of functionalities and resources that are used to build a CUI. Projects can include chatbots, reusable modules, and providers. Chatbots are essentially applications where users can access services through a text-based or voice-based conversational user interface. Modules and providers help to simplify chatbot development.</p><p>There are two ways to reuse existing work on the OpenCUI platform: <strong>Clone</strong> and <strong>Import</strong>.</p><ul><li>Clone, creates an exact copy of the project in your organization. This allows you to freely experiment with changes without affecting the original project.</li><li>Import, allows you reuse the pre-built components in your own project.</li></ul><p>Cloning projects is a great way to get started with OpenCUI. You can easily get a project with the same capabilities as an existing one by cloning it. In this guide, we will show you how to clone a chatbot, and play it with the built-in <strong>Debug</strong> tool.</p><h2 id="before-you-start" tabindex="-1">Before you start <a class="header-anchor" href="#before-you-start" aria-label="Permalink to &quot;Before you start&quot;">​</a></h2><p><a href="./signingup.html#sign-up">Sign up</a> for an account and log in to <a href="https://build.opencui.io/login" target="_blank" rel="noreferrer">OpenCUI</a>. A personal organization will be created for you when you sign up.</p><h2 id="clone-chatbot-pingpong" tabindex="-1">Clone chatbot pingpong <a class="header-anchor" href="#clone-chatbot-pingpong" aria-label="Permalink to &quot;Clone chatbot pingpong&quot;">​</a></h2><p>OpenCUI has a growing number of public projects that you can discover by clicking on the <strong>Explore</strong> tab at the top of the page. These projects were built by the OpenCUI community, and you can inspect them to see if they fit your needs. Once you are inside the project you want to clone, you can follow the steps below to clone it.</p><p>This guide will show you how to clone a chatbot using <code>me.quickstart.pingpong</code> as an example. Click <a href="https://build.opencui.io/org/me.quickstart/agent/pingpong/struct/intent?page=0&amp;imported=false&amp;search=" target="_blank" rel="noreferrer">here</a> to navigate to the chatbot：</p><ol><li><p>In the top-right corner of the page, click <strong>Clone</strong>. ::: thumbnail <img src="'+a+'" alt="enter chatbot"> :::</p></li><li><p>After clicking Clone, a pop-up window will appear with basic chatbot settings. You will need to decide a few things:</p><ul><li>Choose which <strong>Owner</strong> organization you want to clone this project to.</li><li>Optionally, you can change the <strong>Project label</strong> for this clone.</li><li>Decide on how you want to <strong>Deploy</strong> this, have OpenCUI hosting it for you or have it deployed on premise.</li><li>Pick which <strong>Region</strong> you want to deploy this chatbot to, pick one that is closer to your targeted users. ::: thumbnail <img src="'+i+'" alt="enter chatbot"> :::</li></ul></li><li><p>Click on <strong>Clone</strong> at the bottom of the popup. Once you have cloned the chatbot, you can test it directly.</p></li></ol><div class="warning custom-block"><p class="custom-block-title">Caution</p><p>A project&#39;s label or region can not be changed after creation or clone, so choose it wisely. For privacy reasons, the connections and user session data will NOT be cloned.</p></div><h2 id="test-the-chatbot" tabindex="-1">Test the chatbot <a class="header-anchor" href="#test-the-chatbot" aria-label="Permalink to &quot;Test the chatbot&quot;">​</a></h2><p>OpenCUI includes a built-in Debug tool that allows you to test your chatbot in a development environment before deploying it to production. This can help you identify and fix CUI design bugs early on. However, there are some restrictions with this tool:</p><ul><li>You cannot test your chatbot in asynchronous extensions including channels, such as Messenger.</li><li>You can only test one language at a time.</li><li>You can only test content that has been committed in your branch.</li></ul><p>Despite these restrictions, the Debug tool is a valuable tool for testing your chatbot before deployment. It can help you catch bugs and improve the overall quality of your chatbot.</p><p>To use the built-in debug tool, you can follow these steps:</p><ol><li><p>Switch to a language view, in this case we switch to <strong>Language / en</strong>. ::: thumbnail <img src="'+s+'" alt="try it now"> :::</p></li><li><p>In <strong>Language / en</strong>, click <strong>Debug</strong> in the upper-right corner of the Types area , the debug window will slide out. ::: thumbnail <img src="'+r+'" alt="try it now"> :::</p></li><li><p>Click <strong>Connect</strong>. This may take some time as we build and deploy the chatbot to our development environment. Once the connection is successfully established, you can test your chatbot by typing messages in the input box at the bottom and pressing enter.</p><p>For example, enter <code>ping</code> then the chatbot should ask for a location, upon getting a legit location say <code>Seattle</code>, respond with <code>Pong Seattle</code>. ::: thumbnail <img src="'+l+'" alt="pingpong test"> ::: Additionally, there are other useful operations available in the upper right corner of the Debug area, such as viewing the log, saving a test case, and resetting the session. These operations can help you troubleshoot your chatbot. For more information about the Debug tool, please refer to the <a href="./../reference/platform/testing.html">Testing</a> section. ::: thumbnail <img src="'+c+'" alt="operation icon"> :::</p></li></ol><p>In addition, you can make modifications to your chatbot, such as changing the response and expression. For the changes to take effect, be sure to commit and reconnect. For more information about workflow, see <a href="./opencui-flow.html">OpenCUI workflow</a>.</p>',20),u=[p];function g(d,b,m,y,f,w){return o(),t("div",null,u)}const k=e(h,[["render",g]]);export{C as __pageData,k as default};
