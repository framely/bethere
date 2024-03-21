import{_ as s,c as e,o as t,a4 as a,dN as n,dO as l,dP as o,dQ as p,dR as i,dS as r,dT as h,dU as d,dV as k,dW as c,dX as E,dY as g,dZ as u,d_ as y,d$ as m}from"./chunks/framework.BGFi9fUZ.js";const T=JSON.parse('{"title":"Native provider","description":"","frontmatter":{},"headers":[],"relativePath":"reference/providers/native.md","filePath":"reference/providers/native.md","lastUpdated":1682328852000}'),F={name:"reference/providers/native.md"},f=a('<h1 id="native-provider" tabindex="-1">Native provider <a class="header-anchor" href="#native-provider" aria-label="Permalink to &quot;Native provider&quot;">​</a></h1><p>Native providers are crucial to OpenCUI chatbots, they provide the implementation to system interface like channel and support, as well as application interface or services like payments.</p><p>With the help of native providers, you can easily use extension services provided by OpenCUI or other orgs, and you can even efficiently develop new services for yourself or other builders. The process of building and wiring native provider is as following, assuming that you want to use OpenCUI platform to define the conversational user interface frontend. You can potentially use OpenCUI runtime to develop chatbot without using OpenCUI platform, it is certainly possible, but is not covered here.</p><h2 id="build-native-provider" tabindex="-1">Build native provider <a class="header-anchor" href="#build-native-provider" aria-label="Permalink to &quot;Build native provider&quot;">​</a></h2><p>As we know before, provider provides the implementation of service interface. But unlike other providers, the implementation of native provider is defined outside the platform. Therefore, when registering a native provider, you need to declare whether its source is accessible to OpenCUI or not.</p><p>These native provider can be registered as private deployment, in which case, you do not need to make its source available to OpenCUI platform. A chatbot that relies on even one private deploy provider can NOT be hosted by OpenCUI, instead you need export the generated kotlin project, and build and deploy it per their devops rules.</p><h3 id="_1-create-native-provider" tabindex="-1">1. Create native provider <a class="header-anchor" href="#_1-create-native-provider" aria-label="Permalink to &quot;1. Create native provider&quot;">​</a></h3><p>To create a native provider:</p><ol><li><p>Go to one of your org, select <strong>Provider</strong> in left side menu, click <strong>Create</strong> on the right side.</p><p><img src="'+n+'" alt="create provider"></p></li><li><p>In the Create popup window:</p><ul><li>Enter a label for your provider.</li><li>Select <strong>Native Provider</strong> in <strong>Provider Type</strong> field.</li><li>Declare <strong>Deploy Mode</strong>. Private deploy means its source code OpenCUI platform will not access, while OpenCUI-hosted means the platform needs to access it.</li><li>Click <strong>Save</strong>.</li></ul><p><img src="'+l+'" alt="create provider popup"></p></li></ol><h3 id="_2-declare-service-interface" tabindex="-1">2. Declare service interface <a class="header-anchor" href="#_2-declare-service-interface" aria-label="Permalink to &quot;2. Declare service interface&quot;">​</a></h3><p>When you are done with creation, you need to declare which service interface this native provider implements. To declare the service interface, follow these steps:</p><ol><li><p>If you have not already entered the service component you want to implement, click into now. Within an organization, you can search it from the search bar on the component list page. Within Explore page, you can search it from the search bar at the top of this page. Don&#39;t forget selecting <strong>SERVICE</strong> in filter to help you.</p><p><img src="'+o+'" alt="search in Component list"><em>Search in Component list page</em></p><p><img src="'+p+'" alt="search in Explore list"><em>Search in Explore list page</em></p></li><li><p>When you are in the service component, click <strong>Import</strong> on the second navigation bar. Then in the popup window, select your native provider and save.</p><p><img src="'+i+'" alt="click import"><em>Click import</em></p><p><img src="'+r+'" alt="select native provider"><em>Select native provider</em></p></li><li><p>Back to your native provider, heading to <strong>Service</strong> page from the left side menu. In the <strong>Implemented</strong> section, select the service interface you just imported.</p><p><img src="'+h+'" alt="select service interface"><em>Select service interface</em></p><p><img src="'+d+'" alt="done with selection"><em>Done with selection</em></p></li></ol><h3 id="_3-configuration-setup" tabindex="-1">3. Configuration setup <a class="header-anchor" href="#_3-configuration-setup" aria-label="Permalink to &quot;3. Configuration setup&quot;">​</a></h3><p>Configuration is the way you declare the Implementation dependencies for a build.</p><p><img src="'+k+'" alt="configuration"></p><h4 id="provider-class-name" tabindex="-1">Provider class name <a class="header-anchor" href="#provider-class-name" aria-label="Permalink to &quot;Provider class name&quot;">​</a></h4><p>For implementation build, you need to let OpenCUI know the implementation class that implements the service interface. So a provider class name is the fully qualified name of this class.</p><p><img src="'+c+'" alt="provider class name"></p><h4 id="configuration-meta" tabindex="-1">Configuration Meta <a class="header-anchor" href="#configuration-meta" aria-label="Permalink to &quot;Configuration Meta&quot;">​</a></h4><p>Configuration Meta can help you setup the information needed when wiring this provider. You can create configuration template in JSON format.</p><p><img src="'+E+`" alt="configuration meta"></p><h5 id="json-representation" tabindex="-1">JSON representation <a class="header-anchor" href="#json-representation" aria-label="Permalink to &quot;JSON representation&quot;">​</a></h5><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Display Label 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;String | Text | Boolean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;placeholder text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default value&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Display Label 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;placeholder text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // when options exist, we provider selection type.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option 2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h5 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;Fields&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Fields</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Required</em>. Key will pass to codegen.</td></tr><tr><td style="text-align:left;"><code>label</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Required</em>. Displayed on chatbot Integrations.</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Required when there is no <code>options[]</code></em>. Should be one of the following: <code>String</code>, <code>Text</code> or <code>Boolean</code>, case sensitive.</td></tr><tr><td style="text-align:left;"><code>placeholder</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Optional</em>.</td></tr><tr><td style="text-align:left;"><code>default_value</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Optional</em>.</td></tr><tr><td style="text-align:left;"><code>options[]</code></td><td style="text-align:left;">array</td><td style="text-align:left;"><em>Required when there is no <code>type</code></em>.</td></tr></tbody></table><p>options</p><table><thead><tr><th style="text-align:left;">Fields</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Required</em>.</td></tr><tr><td style="text-align:left;"><code>label</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><em>Required</em>. Displayed on selection menu.</td></tr></tbody></table><h5 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h5><p>This example shows how a native provider can be configured by using text input, selection and boolean component, while wiring provider to service in chatbot.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;String Input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;String&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Enter string input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Default Value&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Text Area&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Enter text&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Boolean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Boolean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Please select&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option 2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>This code will generate the configuration information forms like the screenshot below:</p><p><img src="`+g+'" alt="configuration meta example"></p><h4 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h4><p>Implementation is the dependency info for linking implementation source code. The format of implementation should be <code>group:project:version</code>. Normally, the <code>group</code> and <code>version</code> field can be found in the <strong>build.gradle</strong> file of the implementation project:</p><ul><li><code>group</code>: group in the <strong>build.gradle</strong> file of your project. For example, in <a href="https://github.com/opencui/extensions/blob/main/helloworld/build.gradle" target="_blank" rel="noreferrer">helloworld extension</a>, it is <code>io.opencui.extensions</code>.</li><li><code>project</code>: the subdirectory name of this project.</li><li><code>version</code>: version in the <strong>build.gradle</strong> file of your project. For example, in <a href="https://github.com/opencui/extensions/blob/main/helloworld/build.gradle" target="_blank" rel="noreferrer">helloworld extension</a>, it is <code>1.0-SNAPSHOT</code>.</li></ul><p>Therefore, the Implementation should look like <code>io.opencui.extensions:helloworld:1.0-SNAPSHOT</code>. For more information about helloworld extension, see <a href="./extension.html#quickstart-with-helloworld">Quickstart with Helloworld</a> .</p><p><img src="'+u+'" alt="implementation"></p><h2 id="wire-and-configure" tabindex="-1">Wire and configure <a class="header-anchor" href="#wire-and-configure" aria-label="Permalink to &quot;Wire and configure&quot;">​</a></h2><p>After a native provider is registered on platform, anyone can use it by wiring the implementation to its interface in chatbot&#39;s integration and configure it. To wire and configure native provider, you can follow these steps below:</p><ol><li><p><strong>Declare service interface.</strong> Click into the service component implemented by the native provider you will use, and import it into your chatbot.</p><p><img src="'+i+'" alt="click import"></p></li><li><p><strong>Wire native provider to its service interface.</strong> Switch to your chatbot. Heading to <strong>Settings</strong> page, in <strong>Integrations</strong> tab, select the service interface you just imported and the native provider that implements it.</p><p><img src="'+y+'" alt="chatbot integration"></p></li><li><p><strong>Configure the integration.</strong> Finish the configuration form and save. Don&#39;t forget to merge your latest changes to master.</p><p><img src="'+m+'" alt="service provider"></p></li></ol>',40),q=[f];function v(C,b,B,x,_,w){return t(),e("div",null,q)}const I=s(F,[["render",v]]);export{T as __pageData,I as default};