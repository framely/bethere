import{_ as a,c as n,o,N as r}from"./chunks/framework.184eb22e.js";const l="/images/platform/testing/testing_demo.png",i="/images/platform/testing/before_connect.png",p="/images/platform/testing/after_connect.png",c="/images/platform/testing/structure_input.png",t="/images/platform/testing/test_cases_entrance_1.png",e="/images/platform/testing/test_cases_entrance_2.png",u="/images/platform/testing/test_cases.png",g="/images/platform/testing/commit_struct.png",s="/images/platform/testing/commit_lang.png",h="/images/platform/testing/testing_try_it_now.png",m="/images/platform/testing/testing_connect.png",D="/images/platform/testing/testing_conversation.png",y="/images/platform/testing/testing_state.png",d="/images/platform/testing/save_testcase.png",F="/images/platform/testing/enter_name.png",f="/images/platform/testing/reset.png",b="/images/platform/testing/run.png",C="/images/platform/testing/passed.png",E=JSON.parse('{"title":"Testing","description":"","frontmatter":{},"headers":[],"relativePath":"reference/platform/testing.md","lastUpdated":1681291019000}'),_={name:"reference/platform/testing.md"},v=r('<h1 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#motivation">Motivation</a></li><li><a href="#structure-input">Structure input</a></li><li><a href="#test-cases">Test cases</a></li><li><a href="#how-to-use">How to use</a><ul><li><a href="#debug">Debug</a></li><li><a href="#view-log">View log</a></li><li><a href="#reset-session">Reset session</a></li><li><a href="#create-a-test-case">Create a test case</a></li><li><a href="#view-test-cases">View test cases</a></li><li><a href="#run-test-case">Run test case</a></li></ul></li></ul></nav><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-label="Permalink to &quot;Motivation&quot;">​</a></h2><p>To test your chatbot, you can use built-in <strong>Debug</strong> tool to uncover bugs and prevent regressions. When entering user input, there are two methods:</p><ul><li>Directly enter it as either text or JSON data. This method is useful for testing individual steps or simple logic flows.</li><li>Create and execute a test case to automate inputs. This method is ideal for testing more complex or multi-step processes, allowing you to easily repeat tests and analyze results.</li></ul><p>::: thumbnail <img src="'+l+`" alt="testing demo"> :::</p><h2 id="structure-input" tabindex="-1">Structure input <a class="header-anchor" href="#structure-input" aria-label="Permalink to &quot;Structure input&quot;">​</a></h2><p>When interacting with <strong>Debug</strong>, you can provide user input as text like <em>&quot;Get me two tickets for Star Wars&quot;</em>, or a json format represents the same semantics which is used to describe filling for some data structure or provide values for its slots.</p><p>OpenCUI dialog engine can be interacted directly in Frame Event in its json format, which allows for easier bug fixes on the interaction logic by separating the dialog understanding issues.</p><p>For example, the user utterance <code>Get me two tickets for Star Wars</code> can be encoded as the following JSON structure:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SellTicket</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">packageName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">me.test.movieTheater</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">slots</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">starwars</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">attribute</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">movie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">me.test.movieTheater.Movie</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">attribute</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kotlin.Int</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><p>In <strong>Debug</strong>, you can input JSON structures in the <strong>Structure input</strong> field both before and after connecting.</p><p>::: thumbnail <img src="`+i+'" alt="before connect"><em>Before connecting</em></p><br><p><img src="'+p+'" alt="after connect"><em>After connecting</em> :::</p><p>For instance, if you input a JSON structure after connecting, the conversation will be displayed in a view similar to this screenshot:</p><p>::: thumbnail <img src="'+c+'" alt="structure input"> :::</p><h2 id="test-cases" tabindex="-1">Test cases <a class="header-anchor" href="#test-cases" aria-label="Permalink to &quot;Test cases&quot;">​</a></h2><p>The goal of <a href="https://en.wikipedia.org/wiki/Characterization_test" target="_blank" rel="noreferrer">golden test cases</a> is to help you verify that the modifications made to your chatbot did not modify its behavior in unwanted or undesirable ways. In other words, test case execution verifies that chatbot responses have not changed for the same inputs.</p><p>To create a test case, you should simulate the path of the conversation you want to save in <strong>Debug</strong> and provide a test case display name. To access saved test cases in the <strong>Debug</strong> area, click <strong>Test cases</strong> located in the upper-right corner of the panel. These elements allow you to access and view saved tests before and after establishing a connection. ::: thumbnail <img src="'+t+'" alt="structure input"><em>Before connecting</em></p><br><p><img src="'+e+'" alt="structure input"><em>After connecting</em> :::</p><p>The test cases list will appear and can be viewed for either situation. ::: thumbnail <img src="'+u+'" alt="test cases"> :::</p><p>To run the test case, you can select the one you want to run. The test engine will check the following types of data turn by turn to evaluate the test result:</p><ul><li>Test will <strong>Pass</strong> when the actual output is the expected output.</li><li>Test will <strong>Fail</strong> when the actual output does not match the contents of the golden test case. You then need to figure out whether this is a bug or an intentional change.</li></ul><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>When using <strong>Debug</strong>, it is important to commit your chatbot changes in both the structure view and language view. Only the declaration that you have committed will be tested in debug, so committing regularly ensures that you are testing the latest version of your chatbot.</p><p>To commit your changes made in the structure view and make them available in the language view, click <strong>Propagate</strong>. To commit changes in the language view, simply click <strong>Commit</strong>. ::: thumbnail <img src="'+g+'" alt="commit struct"><em>Click <strong>Propagate</strong> in the structure view</em></p><br><p><img src="'+s+'" alt="commit lang"><em>Click <strong>Commit</strong> in the language view</em> :::</p><p>The instructions below show you how to test your bot.</p><h3 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;Debug&quot;">​</a></h3><ol><li>To test a specific language chatbot, navigate to the corresponding language view, and click <strong>Commit</strong> in the upper-right corner of the <strong>Types</strong> area.</li></ol><p>::: thumbnail <img src="'+s+'" alt="commit lang"> :::</p><ol start="2"><li>Click <strong>Debug</strong> in the upper-right corner of the <strong>Types</strong> area, then the test field will slide out.</li></ol><p>::: thumbnail <img src="'+h+'" alt="testing try it now"> :::</p><ol start="3"><li>Enter <strong>Structure Input</strong> if needed and click <strong>Connect</strong>. In this case, we just need to click <strong>Connect</strong>.</li></ol><p>::: thumbnail <img src="'+m+'" alt="testing connect"> :::</p><ol start="4"><li>Chat with the chatbot to create a conversation that covers the functionality you want to test.</li></ol><p>::: thumbnail <img src="'+D+'" alt="testing conversation"> :::</p><ol start="5"><li>Verify correct values for the triggered type, the response, and the session parameters with <strong>State</strong>.</li></ol><p>::: thumbnail <img src="'+y+'" alt="testing state"> :::</p><h3 id="view-log" tabindex="-1">View log <a class="header-anchor" href="#view-log" aria-label="Permalink to &quot;View log&quot;">​</a></h3><p>For coders, you can inspect the detailed log by clicking the &quot;<strong>View log</strong>&quot; icon. This will show you a log of all the interactions that have taken place between your chatbot and the user. This can be helpful for troubleshooting problems.</p><h3 id="reset-session" tabindex="-1">Reset session <a class="header-anchor" href="#reset-session" aria-label="Permalink to &quot;Reset session&quot;">​</a></h3><p>The replies that the chatbot generates for user input depend on the conversation history. Sometimes, you need to have a clean start to try something new. You can restart the testing session by clicking the &quot;<strong>Reset contexts</strong>&quot; icon.</p><h3 id="create-a-test-case" tabindex="-1">Create a test case <a class="header-anchor" href="#create-a-test-case" aria-label="Permalink to &quot;Create a test case&quot;">​</a></h3><p>You can save test cases by clicking the &quot;<strong>Save test case</strong>&quot; icon. This will save the current interaction as a test case. You can then use this test case to reproduce the interaction later.</p><ol><li>Click the <strong>Save Test Case</strong> icon in the topbar to save a conversation as a test case.</li></ol><p>::: thumbnail <img src="'+d+'" alt="save test case"> :::</p><ol start="2"><li>Enter a test case display name, and click <strong>Save</strong> to save the test case.</li></ol><p>::: thumbnail <img src="'+F+'" alt="enter name"> :::</p><ol start="3"><li>Click the <strong>Reset Contexts</strong> icon in the topbar to restart a conversation to test.</li></ol><p>::: thumbnail <img src="'+f+'" alt="reset"> :::</p><h3 id="view-test-cases" tabindex="-1">View test cases <a class="header-anchor" href="#view-test-cases" aria-label="Permalink to &quot;View test cases&quot;">​</a></h3><p>Clicking the &quot;<strong>Test cases</strong>&quot; icon lets you compare your chatbot&#39;s behavior against expected results and identify errors that require attention.</p><h3 id="run-test-case" tabindex="-1">Run test case <a class="header-anchor" href="#run-test-case" aria-label="Permalink to &quot;Run test case&quot;">​</a></h3><ol><li>Click <strong>Test cases</strong> located in the upper-right corner of the <strong>Debug</strong> panel. ::: thumbnail <img src="'+t+'" alt="structure input"><em>Before connecting</em></li></ol><br><p><img src="'+e+'" alt="structure input"><em>After connecting</em> :::</p><ol start="2"><li>Select the test cases you want to run, and click <strong>Run</strong>.</li></ol><p>::: thumbnail <img src="'+b+'" alt="run"> :::</p><ol start="3"><li>The test starts running and the result will be updated when it is completed.</li></ol><p>::: thumbnail <img src="'+C+'" alt="passed"> :::</p>',64),w=[v];function q(A,k,T,x,S,B){return o(),n("div",null,w)}const V=a(_,[["render",q]]);export{E as __pageData,V as default};
