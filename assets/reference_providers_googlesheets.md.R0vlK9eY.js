import{_ as e,c as t,o as s,a4 as a,dI as n,dJ as i,dK as o,dL as r,dM as l}from"./chunks/framework.BGFi9fUZ.js";const b=JSON.parse('{"title":"Google Sheets","description":"","frontmatter":{},"headers":[],"relativePath":"reference/providers/googlesheets.md","filePath":"reference/providers/googlesheets.md","lastUpdated":1682328852000}'),h={name:"reference/providers/googlesheets.md"},d=a('<h1 id="google-sheets" tabindex="-1">Google Sheets <a class="header-anchor" href="#google-sheets" aria-label="Permalink to &quot;Google Sheets&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#overview">Overview</a></li><li><a href="#build-connection">Build connection</a></li><li><a href="#implement-functions">Implement functions</a><ul><li><a href="#types-conversion">Types conversion</a></li><li><a href="#provider-dependent-functions">Provider dependent functions</a></li><li><a href="#kotlin-functions">Kotlin functions</a></li></ul></li></ul></nav><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><a href="https://www.google.com/sheets/about/#overview" target="_blank" rel="noreferrer">Google Sheets</a> is a web-based application that enables users to create, update and modify spreadsheets and share the data online in real time.</p><p>Google Sheets provider allow you to use Google Sheets as backend, which the actual data can be managed by your operation team in online spreadsheet collaboratively. Through Google Sheets provider, you can query data from your spreadsheet using the <a href="https://developers.google.com/chart/interactive/docs/querylanguage" target="_blank" rel="noreferrer">Query Language</a> and update data with the help of low level functions in <code>io.opencui.provider.GoogleSheetsConnection</code>.</p><p><img src="'+n+'" alt="data management"><em>Operations on OpenCUI and Google Sheets</em></p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Before you start, make sure you have <a href="https://support.google.com/docs/answer/6000292?hl=en" target="_blank" rel="noreferrer">created a spreadsheet</a>.</p></div><h2 id="build-connection" tabindex="-1">Build connection <a class="header-anchor" href="#build-connection" aria-label="Permalink to &quot;Build connection&quot;">​</a></h2><p>To begin with, you need to build a connection between Google Sheets and the provider so that the provider gets access to your spreadsheet. To build the connection, get your <a href="https://developers.google.com/sheets/api/guides/concepts#spreadsheet" target="_blank" rel="noreferrer">spreadsheet Id</a> and a <a href="https://developers.google.com/workspace/guides/create-credentials#service-account" target="_blank" rel="noreferrer">service account credential</a> then fill out the following form.</p><p><img src="'+i+'" alt="connection"></p><p>Once you create a service account, you need to give this account permission to view or edit your spreadsheet in three steps:</p><ol><li>Copy the email of your <a href="https://console.cloud.google.com/iam-admin/serviceaccounts" target="_blank" rel="noreferrer">service account</a>.</li><li>Go to your <a href="https://docs.google.com/spreadsheets/u/0/" target="_blank" rel="noreferrer">spreadsheet</a>. At the top-right, click <strong>Share</strong>.</li><li>Paste the email you copied and give the right permission to this service account. For example, if you don&#39;t need to update business data in your spreadsheet, set the service account as a <strong>Viewer</strong>, otherwise, set it as an <strong>Editor</strong>.</li></ol><p><img src="'+o+'" alt="permit"></p><h2 id="implement-functions" tabindex="-1">Implement functions <a class="header-anchor" href="#implement-functions" aria-label="Permalink to &quot;Implement functions&quot;">​</a></h2><p>Before you start to implement functions, read implementation first.</p><h3 id="types-conversion" tabindex="-1">Types conversion <a class="header-anchor" href="#types-conversion" aria-label="Permalink to &quot;Types conversion&quot;">​</a></h3><ul><li>When you call the <strong>provider-dependent</strong> function, use the function called <em>toQueryString</em> to convert parameters to the right format.</li><li>When the <strong>provider-dependent</strong> function returns a set of values in the <a href="https://developers.google.com/chart/interactive/docs/querylanguage#literals" target="_blank" rel="noreferrer">Google Sheets data type</a>, we put those values in the return frame you defined, so you can display or use these values in the OpenCUI environment. When returning values, be sure to follow these rules. <ul><li>The <strong>types</strong> of slots in the the frame should be compatible with the types of return columns in the same index. For example, if the types of slots in the frame are [<em>kotlin.Int</em>, <em>kotlin.String</em>], the SQL data types of return columns should be [<em>bigint</em>, <em>text</em>] instead of [<em>text</em>, <em>bigint</em>].</li><li>The <strong>labels</strong> of slots in the the frame should be the same as the names of return columns in the same index. For example, if the labels of slots in a frame are [<em>id</em>, <em>name</em>], the names of return columns should be [<em>id</em>, <em>name</em>] as well.</li></ul></li></ul><p><img src="'+r+'" alt="conversion"> Type Conversion Between OpenCUI and Google Sheets</p><ul><li>Here is the conversion between entities and Google Sheets data types:</li></ul><table><thead><tr><th style="text-align:left;">Entity</th><th style="text-align:left;">Google Sheets Data Type</th></tr></thead><tbody><tr><td style="text-align:left;">kotlin.Int / kotlin.Float</td><td style="text-align:left;">number</td></tr><tr><td style="text-align:left;">Customized entity (Builder-created Entity) / kotlin.String</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:left;">kotlin.Boolean</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:left;">java.time.LocalDate / java.time.YearMonth</td><td style="text-align:left;">date</td></tr><tr><td style="text-align:left;">java.time.LocalTime</td><td style="text-align:left;">timeofday</td></tr><tr><td style="text-align:left;">java.time.LocalDateTime</td><td style="text-align:left;">datetime</td></tr></tbody></table><h3 id="provider-dependent-functions" tabindex="-1">Provider dependent functions <a class="header-anchor" href="#provider-dependent-functions" aria-label="Permalink to &quot;Provider dependent functions&quot;">​</a></h3><p>To get your business data from a spreadsheet, you can write a query in <strong>provider-dependent</strong> functions using the <a href="https://developers.google.com/chart/interactive/docs/querylanguage" target="_blank" rel="noreferrer">Query Language</a>. A provider-dependent function implementation consists of <strong>Function Meta</strong> and <strong>Query</strong>.</p><p><img src="'+l+`" alt="provider-dependent-function"></p><ul><li><p><strong>Function Meta</strong> is used to define optional parameters that are needed in your query. The <strong>key</strong> means the parameter&#39;s name and the <strong>value</strong> is the parameter&#39;s value.</p><ul><li>The keys you can choose are range, headers, gid and sheet. To learn what each of the parameters means, check out <a href="https://developers.google.com/chart/interactive/docs/spreadsheets#creating-a-chart-from-a-separate-spreadsheet" target="_blank" rel="noreferrer">Creating a Chart from a Separate Spreadsheet</a>.</li><li>For example, because there is no <em>from</em> clause in Google Sheets, if you want to select data from a sheet that is not the first sheet, you need to specify which sheet to select from. You can use <em>gid</em> to link to the sheet&#39;s ID, or you can use <em>sheet</em> to link to the sheet&#39;s name.</li></ul></li><li><p><strong>Query</strong> is where you write a query using <a href="https://developers.google.com/chart/interactive/docs/querylanguage" target="_blank" rel="noreferrer">Query Language</a>. Wrapping <a href="./../annotations/kotlinexpression.html">Kotlin expressions</a> in <code>\${}</code>, you can reference input parameters in the provider-dependent function or return values from other functions.</p><ul><li>When you reference values using Kotlin expressions,❗make sure you use <code>connection.toQueryString(X)</code> to convert value <code>X</code> to the right format.</li><li>For example, suppose you want to get a user&#39;s name by their ID. The user&#39;s name is stored in column B while ID in column A. If the input parameter is <em>userId</em>, you may write a query like this:</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> B </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> A </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">connection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">toQueryString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userId!!)}</span></span></code></pre></div></li></ul><h3 id="kotlin-functions" tabindex="-1">Kotlin functions <a class="header-anchor" href="#kotlin-functions" aria-label="Permalink to &quot;Kotlin functions&quot;">​</a></h3><p>To update and append your business, OpenCUI provides external functions: <em>update</em> and <em>append</em>. You can call these functions using <code>connection.update</code> and <code>connection.append</code> in Kotlin functions. Check out the definitions of these functions in <code>io.opencui.provider.GoogleSheetsConnection</code>. To learn the source of the function, see <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update" target="_blank" rel="noreferrer">spreadsheets.values.update</a> and <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append" target="_blank" rel="noreferrer">spreadsheets.values.append</a>.</p><ul><li>The input parameters are the same in these two functions.</li></ul><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th>Reference</th></tr></thead><tbody><tr><td style="text-align:left;">range</td><td style="text-align:left;">kotlin.String</td><td>Use <em>range</em> to select specific ranges. To learn how to define it, see <a href="https://developers.google.com/sheets/api/guides/concepts#cell" target="_blank" rel="noreferrer">A1 notation</a>.</td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;">kotlin.Any[]</td><td>Use <em>values</em> to add/append a row of values by putting values in a list, like<code>listOf(a, b, c)</code>.</td></tr><tr><td style="text-align:left;">valueInputOption</td><td style="text-align:left;">kotlin.String</td><td>Use <em>valueInputOption</em> to determine how input data should be interpreted. To know what options you should choose, see <a href="https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption" target="_blank" rel="noreferrer">ValueInputOption</a>.</td></tr></tbody></table><ul><li>The return types are <a href="https://developers.google.com/resources/api-libraries/documentation/sheets/v4/java/latest/com/google/api/services/sheets/v4/model/UpdateValuesResponse.html#UpdateValuesResponse--" target="_blank" rel="noreferrer">UpdateValuesResponse</a> and <a href="https://developers.google.com/resources/api-libraries/documentation/sheets/v4/java/latest/com/google/api/services/sheets/v4/model/AppendValuesResponse.html#AppendValuesResponse--" target="_blank" rel="noreferrer">AppendValuesResponse</a>. You can use the methods in these classes to check if the response meets expectations. For example, if you expect to update 3 values, use <code>UpdateValuesResponse.getUpdatedCells == 3</code> to check.</li></ul><p>Suppose you want to update a user&#39;s delivery address and phone number in the range of <em>&quot;&#39;UserInfo&#39;!B5:C5&quot;</em>. If the input parameters are <em>address</em> and <em>phoneNumber</em>, the Kotlin function will be like this:</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> listOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(address, phoneNumber)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;UserInfo&#39;!B2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, values, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;RAW&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// if the update is successful, return true, otherwise, return false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUpdatedCells</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span></code></pre></div>`,31),p=[d];function c(u,g,m,f,k,y){return s(),t("div",null,p)}const E=e(h,[["render",c]]);export{b as __pageData,E as default};
