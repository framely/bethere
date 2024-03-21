import{_ as e,c as t,o,a4 as a,aG as i,aH as s,aI as r,aJ as n,aK as l,aL as h}from"./chunks/framework.CYkyG9BA.js";const w=JSON.parse('{"title":"Reuse an hours module","description":"","frontmatter":{},"headers":[],"relativePath":"reference/restaurant/reuse-component.md","filePath":"reference/restaurant/reuse-component.md","lastUpdated":1710991209000}'),d={name:"reference/restaurant/reuse-component.md"},c=a('<h1 id="reuse-an-hours-module" tabindex="-1">Reuse an hours module <a class="header-anchor" href="#reuse-an-hours-module" aria-label="Permalink to &quot;Reuse an hours module&quot;">​</a></h1><p>This tutorial will show you how to add conversational functionality to your chatbot through the reuse of a module.</p><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p>Modern business applications are typically broken down into a set of services, each responsible for a specific functionality. For example, an airline might have a ticketing service, which includes functionalities such as booking, checking seat availability, and canceling. As interfaces to business functionalities, these services decouple the frontend from the backend implementation of the service, allowing them to be developed independently, making it easier to update and reuse.</p><p>Similar to a chatbot, a module is also an OpenCUI frontend project, but it is commonly used to expose a single service conversationally. However, a module does not have the special skill &quot;Main&quot; like a chatbot does, so it cannot be deployed to serve users on its own. Modules are like libraries, they need to be imported into an application like a chatbot to be effective.</p><p>Backend implementations of a service are typically deployed separately. A provider is designed to offer a convenient way for the frontend to interact with a remote service implementation as if it were a local function, while handling the necessary network communication details behind the scenes. For a provider to be usable, it needs to be configured so that it has the correct endpoints and required credentials. Once configured, it can be used by every chatbot in the organization. The following diagram shows how chatbots, modules, and providers typically work together:</p><p><img src="'+i+`" alt="relationship"></p><p>A module of a service paired with a compatible provider is all you need to provide this service conversationally. These pre-built, often higher quality modules are a cost-effective way for you to introduce conversational functionalities to your chatbot. Here are the steps involved:</p><ol><li>Decide on a service you want to expose. Make sure the module and provider are of high quality.</li><li>Set up a compatible provider into your organization and configure it. You can do this by cloning the provider.</li><li>Import the module of that service into the chatbot of your choice.</li><li>Wire the provider to the service in the chatbot configuration.</li></ol><h2 id="before-you-start" tabindex="-1">Before you start <a class="header-anchor" href="#before-you-start" aria-label="Permalink to &quot;Before you start&quot;">​</a></h2><ul><li>Log in to <a href="https://build.opencui.io/login" target="_blank" rel="noreferrer">OpenCUI</a>.</li><li>We assume that you have finished <a href="https://opencui.io/reference/guide/clone-simple-chatbot.html" target="_blank" rel="noreferrer">clone a simple chatbot</a>.</li><li>We assume that you have finished <a href="https://opencui.io/reference/guide/build-simple-chatbot.html" target="_blank" rel="noreferrer">build a simple chatbot</a>.</li></ul><h2 id="pick-a-module" tabindex="-1">Pick a module <a class="header-anchor" href="#pick-a-module" aria-label="Permalink to &quot;Pick a module&quot;">​</a></h2><p>OpenCUI is designed to promote reusability of both frontend and provider. When you want to add some functionalities to your chatbot, pick a module that meets your needs. Make sure the module of choice has a compatible provider, preferably OpenCUI hosted one like PostgreSQL provider so that you can try them with the least effort. Reusing a module allows you to quickly increase the scope of the service that you offer conversationally, without incurring the high costs and long lead times associated with developing from scratch.</p><p>This guide will show you how to reuse an existing <a href="https://build.opencui.io/org/me.quickstart/agent/hours/struct/service_schema" target="_blank" rel="noreferrer">module</a> along with a compatible <a href="https://build.opencui.io/org/me.quickstart/agent/hoursProvider/struct/service_schema" target="_blank" rel="noreferrer">provider</a>, to field users&#39; questions about your business hours.</p><p>Here is an example that illustrates how this chatbot can helps users get business hours:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, what time do you open?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Our business hours in a week are</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Mon 10:00 AM – 11:00 PM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Tue Closed</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Wed 10:00 AM – 11:00 PM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Thu 10:00 AM – 11:00 PM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Fri 10:00 AM – 11:00 PM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Sat 10:00 AM – 11:00 PM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Sun Closed&quot;</span></span></code></pre></div><p>This chatbot can also show the business hours for a particular day, in addition to the business hours for the week. For example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hi, are you open this Friday?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;We are open on Friday, March 31, 2023 from 10:00 AM to 11:00 PM.&quot;</span></span></code></pre></div><h2 id="set-up-a-provider" tabindex="-1">Set up a provider <a class="header-anchor" href="#set-up-a-provider" aria-label="Permalink to &quot;Set up a provider&quot;">​</a></h2><p>To allow a module to interact with a backend service implementation that is already deployed, you need to set up a compatible provider in your organization and configure it so that it can connect to the actual backend.</p><p>Instead of building a backend and setting up a provider from scratch, in this guide, you will clone a PostgreSQL provider. The PostgreSQL provider is hosted by OpenCUI, which means that the corresponding backend implementation is also built and managed by OpenCUI. This backend is essentially a relational database with service APIs implemented in SQL and made available in RESTful. Additionally, this backend comes with an admin interface called &quot;backoffice,&quot; which allows business operators to populate the database with their business data.</p><p>PostgreSQL provider contains not only a stub that abstracts the complexities of communication to masquerade remote services as local functions, but also the schema needed to create the database, as well as SQL function definitions that can be turned into stored procedures. This allows OpenCUI to build and deploy a fully functional backend for a PostgreSQL provider upon request. The PostgreSQL provider is automatically configured and has no external dependencies, making it a very convenient way to provide full-stack conversational functionalities for small and medium-sized businesses.</p><p>The backend for other provider is assumed to be deployed as a completely separate concern. But for the PostgreSQL provider to work, you need to make sure the corresponding backend is deployed first. This will trigger OpenCUI to create a managed PostgreSQL instance for your organization and deploy the backend based on that. This includes but is not limited to the following tasks:</p><ul><li>Creating the tables for hosting data for the first time, or altering table structure based on changed annotations.</li><li>Deleting all composite types and creating them again for use as function parameters or returns.</li><li>Making these tables available for both the back office and chatbot through RESTful APIs.</li></ul><p>Once the backend is deployed, you need to populate it with your business data. For this use case, you set the business hours for each day of the week, as well as the hours for special occasions.</p><h3 id="clone-provider-hours" tabindex="-1">Clone provider: Hours <a class="header-anchor" href="#clone-provider-hours" aria-label="Permalink to &quot;Clone provider: Hours&quot;">​</a></h3><p>To clone the Hours provider, inside <a href="https://build.opencui.io/org/me.quickstart/agent/hoursProvider/struct/service_schema" target="_blank" rel="noreferrer">hoursProvider</a>, click <strong>Clone</strong> and set its <strong>Project label</strong> to <code>hoursProvider</code> (it is ok to set to something else, but let&#39;s use this label in the quickstart).</p><h3 id="deploy-postgresql-backend" tabindex="-1">Deploy PostgreSQL backend <a class="header-anchor" href="#deploy-postgresql-backend" aria-label="Permalink to &quot;Deploy PostgreSQL backend&quot;">​</a></h3><p>To deploy PostgreSQL backend, click <strong>Deploy backend</strong> button in the upper-right corner of the Versions area.</p><p><img src="`+s+'" alt="deploy"></p><h3 id="populate-database" tabindex="-1">Populate database <a class="header-anchor" href="#populate-database" aria-label="Permalink to &quot;Populate database&quot;">​</a></h3><p>Before the backend can serve relevant information, you need to populate the database with your business hours. You can do this using the <a href="https://opencui.io/reference/providers/postgrest.html#access-backoffice" target="_blank" rel="noreferrer">backoffice</a>. For every organization that uses at least one PostgreSQL provider, OpenCUI also creates a web application for that organization to manage the data in the backend. You can access the back office as follows:</p><ol><li>Inside the provider <code>hoursProvider</code>, select the <strong>Settings</strong> tab, click <strong>Configuration</strong> on the left sidebar.</li><li>Copy and paste the <strong>URL</strong> to your browser, use <strong>Admin email</strong> and <strong>Admin password</strong> to log into backoffice.</li></ol><p>In the PostgreSQL backoffice, tables are grouped into namespaces on the left sidebar. The namespace is identified by a provider label, and the table is referenced by a frame type label.</p><h4 id="set-up-business-hours" tabindex="-1">Set up business hours <a class="header-anchor" href="#set-up-business-hours" aria-label="Permalink to &quot;Set up business hours&quot;">​</a></h4><p>Each business has different hours and unique special days. This provider uses a table called &#39;Hours&#39; to keep a record of this business-specific hours information. Before serving actual user queries, you need to populate this table with your hours.</p><p>To set business hours for each day of the week and for special days, follow these steps:</p><ol><li><p>Inside the <code>hoursProvider</code> database, click <strong>Create</strong> on the <code>Hours</code> table.</p><p><img src="'+r+'" alt="create business hours"></p></li><li><p>Fill in the following information in the form and click <strong>Save</strong>:</p><ul><li><strong>dayOfWeek</strong> (<em>Required</em>): The day of the week to add business hours.</li><li><strong>ifOpen</strong> (<em>Required</em>): Select <strong>True</strong> if you are open on that day, or <strong>False</strong> if you are closed.</li><li><strong>openingTime</strong> (<em>Required if <code>ifOpen</code> is <code>True</code></em>): The time when you open on that day.</li><li><strong>closingTime</strong> (<em>Required if <code>ifOpen</code> is <code>True</code></em>): The time when you close on that day.</li><li><strong>specialDate</strong> (<em>Optional</em>): If you have special days, such as holidays, on which you do not hold regular hours, you can set them up using this column.</li></ul><div class="tip custom-block"><p class="custom-block-title">Need to know</p><p>Currently, only one set of business hours can be set per day as the service is only designed for simple use cases.</p></div><p><img src="'+n+'" alt="business hours list"></p></li></ol><h2 id="reuse-module-in-chatbot" tabindex="-1">Reuse module in chatbot <a class="header-anchor" href="#reuse-module-in-chatbot" aria-label="Permalink to &quot;Reuse module in chatbot&quot;">​</a></h2><p>On OpenCUI, importing modules is another way to reuse conversational functionalities. Unlike cloning a project where you use existing work as a starting point and modify anything to fit your needs, but you cannot benefit from any improvements that will be introduced to the source project after you clone it. With an imported module, it has to fit your needs from the get-go, as there are only limited things, mostly at the language layer, that you can customize. On the other hand, you can always upgrade an imported module to a newer version with bugs fixed and improved experiences. </p><p>Reusing the conversational functionality in a module is simple: just import the module with the desired functionality into your chatbot and connect the service to a configured provider in your organization.</p><h3 id="import-the-module" tabindex="-1">Import the module <a class="header-anchor" href="#import-the-module" aria-label="Permalink to &quot;Import the module&quot;">​</a></h3><p>To import the module that meets your needs into a chatbot, follow these steps:</p><ol><li>In the <a href="https://build.opencui.io/org/me.quickstart/agent/hours/struct/service_schema" target="_blank" rel="noreferrer">hours module</a>, click <strong>Import</strong> in the top-right corner of the page.</li><li>Select the chatbot you want to import into and <strong>Save</strong>. If you don&#39;t have a chatbot yet, you need to create or clone one before importing.</li></ol><p><img src="'+l+'" alt="import service"></p><h3 id="wire-the-provider" tabindex="-1">Wire the provider <a class="header-anchor" href="#wire-the-provider" aria-label="Permalink to &quot;Wire the provider&quot;">​</a></h3><p>For each service that is referenced in the chatbot, you need to wire a provider to it so that the chatbot, or the module imported into the chatbot, can actually access the service implementation. You can wire different providers to the same service under different environments.</p><p>To wire the provider <code>hoursProvider</code> to the module <code>hours</code> service in chatbot&#39;s debug environment, follow these steps:</p><ol><li>In chatbot&#39;s <strong>Settings</strong> tab, go to the <strong>Integrations</strong> page.</li><li>In <strong>Debug service provider</strong> section, select <code>me.quickstart.hours.IHours</code> in the <strong>Select service</strong> selector.</li><li>Fill in the following information in the popup window and <strong>Save</strong>: <ul><li>Enter a unique label such as <code>Test</code>. This can be used to identify the service in the chatbot&#39;s logs.</li><li>Select the provider <code>hoursProvider</code> for this service. Note that all compatible providers will appear in the drop-down menu.</li></ul></li></ol><p>When you are ready to deploy your service to the production environment, you need to repeat the steps above in the <strong>Deploy service provider</strong> section.</p><p><img src="'+h+'" alt="set up provider"></p><h2 id="test-a-chatbot" tabindex="-1">Test a chatbot <a class="header-anchor" href="#test-a-chatbot" aria-label="Permalink to &quot;Test a chatbot&quot;">​</a></h2><p>Finally, you can try the chatbot for business hours using the built-in <a href="https://opencui.io/reference/platform/testing.html#how-to-use" target="_blank" rel="noreferrer">Debug</a> tool. To do this, send the following messages to the chatbot:</p><ul><li><em>&quot;When do you open?&quot;</em> - This will return the business hours for the entire week, starting with the current day of the week.</li><li><em>&quot;Do you open this Friday?&quot;</em> - This will return the business hours for this Friday, if it is open. If it is closed, you will be informed and the weekly business hours will be shown.</li></ul>',54),u=[c];function p(b,m,g,f,y,k){return o(),t("div",null,u)}const q=e(d,[["render",p]]);export{w as __pageData,q as default};