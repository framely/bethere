import{_ as i,c as t,o as s,a4 as n,du as a,dv as o,dw as r,dx as l,dy as p,dz as h,dA as d,dB as e,dC as c,dD as g,dE as k,dF as u,dG as m,dH as v}from"./chunks/framework.BGFi9fUZ.js";const B=JSON.parse('{"title":"Extension","description":"","frontmatter":{},"headers":[],"relativePath":"reference/providers/extension.md","filePath":"reference/providers/extension.md","lastUpdated":1682328852000}'),y={name:"reference/providers/extension.md"},E=n('<h1 id="extension" tabindex="-1">Extension <a class="header-anchor" href="#extension" aria-label="Permalink to &quot;Extension&quot;">​</a></h1><p>OpenCUI is built on an open architecture, making it easy to make functionality available to chatbots. The core of this architecture is the separation between interface and implementation, allowing conversational behavior to be defined on the interface while implementation can take various forms.</p><p>On OpenCUI, we abstract the interface for every built-in functionality that might have more than one implementation, such as channels and supports, and we encourage you to do the same thing for application-level functionalities, such as payment processing.</p><p>There are two kinds of extensions:</p><ul><li>External extensions are those that the OpenCUI platform does not have access to the source code for and can only be used by you with a privately deployed chatbot.</li><li>Internal extensions are those that the OpenCUI platform does have access to the source code for (inside OpenCUI or Framely). Chatbots using Framely extensions cannot be exported for private deployment.&quot;</li></ul><h2 id="extend-with-native-provider" tabindex="-1">Extend with native provider <a class="header-anchor" href="#extend-with-native-provider" aria-label="Permalink to &quot;Extend with native provider&quot;">​</a></h2><p>To develop extensions with Native Provider, you should follow these steps below. To use existing extensions, you can go <a href="./native.html#wire-and-configure">Wire and configure</a> directly.</p><ol><li><p>Describe interface If the service interface you need has not been created yet, you should create a new one and describe its schema on OpenCUI platform. System service interfaces are already created for you, if you want to connect to other channels, you can use them directly, like <code>io.opencui.channel.IChannel</code>.</p></li><li><p>Generate Code Stub If the service interface you need has already been created, you need to export it. When exporting, OpenCUI platform will generate stub code in kotlin, and you will get the generated file which will be used in implementation.</p></li><li><p>Develop Extension The standard way to develop extension is to do it inside extension repo.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/opencui/extensions.git</span></span></code></pre></div><p>OpenCUI use gradle as build system, so you can create a subdirectory to host your subproject. Using the existing building system in this repo will make it easy for you to contribute your native provider back OpenCUI community. The implementation can then be developed as standard Kotlin project. Make sure your project actually builds before you move to the next step.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./gradlew your_project:build</span></span></code></pre></div></li><li><p>Register Native Provider Regardless if the extensions are external, you need to register their native provider on the platform so that OpenCUI can generate the frontend code for them. To register native provider, follow steps in the <a href="./native.html#build-native-provider">Build native provider</a> documentation to accomplish the following:</p><ol><li>Create native provider.</li><li>Declare service interface.</li><li>Configuration setup.</li></ol></li></ol><p>When you&#39;re done, make sure you merge all of your changes into master.</p><h2 id="quickstart-with-helloworld" tabindex="-1">Quickstart with Helloworld <a class="header-anchor" href="#quickstart-with-helloworld" aria-label="Permalink to &quot;Quickstart with Helloworld&quot;">​</a></h2><p>Now lest&#39;s use <a href="https://github.com/opencui/extensions/tree/main/helloworld" target="_blank" rel="noreferrer">helloworld extension</a> as an example to show how extension is developed. This simple hello word extension gets name from configuration, and then simly return <code>hello $name</code>.</p><h3 id="describe-interface" tabindex="-1">Describe interface <a class="header-anchor" href="#describe-interface" aria-label="Permalink to &quot;Describe interface&quot;">​</a></h3><ol><li><p><strong>Create service interface</strong>. Go to one of your org, select <strong>Components</strong> in left side menu, click <strong>Create</strong> on the right side. In the <strong>Create</strong> popup window:</p><ul><li>Enter a label for service component. For example, our hello world example uses <code>component_0915</code> as label.</li><li>Turn on service toggle, enable service.</li><li>No need to add language. As a service that provides an interface for extensions does not need to add language.</li><li>Click <strong>Save</strong>.</li></ul><p><img src="'+a+'" alt="create service component"><em>Click Create</em></p><p><img src="'+o+'" alt="create service component popup"><em>Create popup window</em></p></li><li><p><strong>Declare function</strong>. Head to <strong>Service</strong> page, in the <strong>Functions</strong> section, click <strong>Add</strong> to declare function signature. In helloworld example, we declare a simple function labeled as <code>testFunction</code>, which takes a string as input parameter named <code>str</code>, and return a string.</p><p><img src="'+r+'" alt="add function"><em>Click add function</em></p><p><img src="'+l+'" alt="function popup window"><em>Function popup window</em></p></li><li><p>Review your changes and merge them into master.</p></li></ol><h3 id="generate-code-stub" tabindex="-1">Generate code stub <a class="header-anchor" href="#generate-code-stub" aria-label="Permalink to &quot;Generate code stub&quot;">​</a></h3><p>In the service you described, click <strong>Export</strong> on the second navigation bar to extract the generated file.</p><p><img src="'+p+`" alt="export service component"></p><h3 id="develop-extension" tabindex="-1">Develop extension <a class="header-anchor" href="#develop-extension" aria-label="Permalink to &quot;Develop extension&quot;">​</a></h3><ol><li><p>Clone extensions repo, create a subdirectory to host your subproject. Here we create <code>helloworld</code> under extensions.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/opencui/extensions.git</span></span></code></pre></div></li><li><p>Implement the service interface, you can develop it as standard Kotlin project. The implementation code example of <code>helloworld</code> is like:</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HelloWorldProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UserSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">? </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IComponent_0915</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">? {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello \${config[&quot;name&quot;]}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$str</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">companion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExtensionBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IComponent_0915</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> invoke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IComponent_0915</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HelloWorldProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>Make sure the project actually builds before you move to the next step.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./gradlew your_project:build</span></span></code></pre></div></li></ol><p>For a full overview, see <a href="https://github.com/opencui/extensions/tree/main/helloworld" target="_blank" rel="noreferrer">helloworld</a> in OpenCUI extensions repo.</p><h3 id="register-native-provider" tabindex="-1">Register native provider <a class="header-anchor" href="#register-native-provider" aria-label="Permalink to &quot;Register native provider&quot;">​</a></h3><ol><li><p>Create a native provider. Go to one of your org, select <strong>Provider</strong> in left side menu, click <strong>Create</strong> on the right side. In the <strong>Create</strong> popup window:</p><ul><li>Enter a label for provider. For example, <code>test</code> as label.</li><li>Select <strong>Native Provider</strong> in <strong>Provider Type</strong> field.</li><li>Select <strong>OpenCUI-hosted</strong> in <strong>Deploy Mode</strong> field as <code>helloworld</code> is one of OpenCUI extensions.</li><li>Click <strong>Save</strong>.</li></ul><p><img src="`+h+'" alt="create native provider"><em>Click Create</em></p><p><img src="'+d+'" alt="create native provider popup"><em>Create popup window</em></p></li><li><p>Declare service interface <code>component_0915</code> in native provider:</p><ul><li><p>Go to service <code>component_0915</code>, click <strong>Import</strong> on the second navigation bar. In the popup window, select your native provider, in this case we select <code>test</code>, and <strong>Save</strong>.</p><p><img src="'+e+'" alt="import component0915 to native provider"></p></li><li><p>Back to the <code>test</code> native provider, heading to <strong>Service</strong> page from the left side menu. In the <strong>Implemented</strong> section, select <code>component_0915</code>.</p><p><img src="'+c+`" alt="select service in native provider"></p></li></ul></li><li><p>Configuration setup, heading to <strong>Configuration</strong> page from the left side menu:</p><ul><li><p>Enter <strong>Provider Class Name</strong>, a fully qualified name of this implementation class. In this case, enter <code>me.test.component_0915.HelloWorldProvider</code>.</p></li><li><p>Set <strong>Configuration Meta</strong> as following:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;String&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li><li><p>Enter <code>io.opencui.extensions:helloworld:1.0-SNAPSHOT</code> in <strong>Implementation</strong> field. The format of this field should be <code>group:project:version</code>. Normally, the <code>group</code> and <code>version</code> field can be found in the <strong>build.gradle</strong> file.</p><p><img src="`+g+'" alt="configuration setup"></p></li></ul></li><li><p>Review and merge your changes into master.</p></li></ol><h3 id="wire-and-configure-in-chatbot" tabindex="-1">Wire and configure in chatbot <a class="header-anchor" href="#wire-and-configure-in-chatbot" aria-label="Permalink to &quot;Wire and configure in chatbot&quot;">​</a></h3><ol><li><p>If you have not already created a chatbot, create one now. Inside your org, head to chatbot list page by clicking <strong>Chatbots</strong> in the left side menu, then click <strong>Create</strong> on the right side.</p><ul><li>Enter your chatbot&#39;s label in the Project Label field, for example <code>helloworld</code>.</li><li>Select your preferred Region.</li><li>Select the languages for your chatbot in the <strong>Add Language</strong> field, we selcet <code>English(en)</code> here.</li></ul><p><img src="'+k+'" alt="create chatbot"><em>Create chatbot</em></p><p><img src="'+u+'" alt="create chatbot popup window"><em>Create popup window</em></p></li><li><p>Import service <code>component_0915</code> into chatbot <code>helloworld</code>. Go to service <code>component_0915</code>, click <strong>Import</strong> on the second navigation bar. In the popup window, select your chatbot, in this case we select <code>helloworld</code>, and save.</p><p><img src="'+e+'" alt="import component0915 to chatbot"></p></li><li><p>Switch to your <code>helloworld</code> chatbot, wiring the implementation and configure the integration.</p><ul><li>Heading to <strong>Settings</strong> page, in <strong>Integrations</strong> tab, select the service interface you just imported and the native provider that implements it.</li><li>Finish the configuration form and save.</li></ul><p><img src="'+m+'" alt="chatbot integration"><em>Wired the implementatio</em></p><p><img src="'+v+'" alt="configuration popup window"><em>Configuration popup window</em></p></li><li><p>Don&#39;t forget to merge your latest changes to master.</p></li></ol>',23),f=[E];function b(w,C,F,x,_,I){return s(),t("div",null,f)}const D=i(y,[["render",b]]);export{B as __pageData,D as default};