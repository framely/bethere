import{_ as e,c as a,o as n,a4 as t}from"./chunks/framework.CYkyG9BA.js";const f=JSON.parse('{"title":"Build Conversational App","description":"","frontmatter":{},"headers":[],"relativePath":"reference/index.md","filePath":"reference/index.md","lastUpdated":1683185298000}'),i={name:"reference/index.md"},o=t(`<h1 id="build-conversational-app" tabindex="-1">Build Conversational App <a class="header-anchor" href="#build-conversational-app" aria-label="Permalink to &quot;Build Conversational App&quot;">​</a></h1><p>Just like their web and mobile counterparts, conversational apps, including chatbots and voicebots, are user facing applications that business build to provide services to their user. However, despite recent advances in natural language understanding (NLU) research, the magical user experiences promised by conversational apps are still elusive and only offered by those privileged.</p><p>Why most businesses can afford to build a web app, but not the conversational one with the same functionalities? This simple question motivated us to take on the challenge of democratizing conversational user experiences. Since user interface is largely business logic dependent, business logic can and will vary from business to business, instead of building entire conversational app for businesses, we aim to provide conversational interface building tools that empower business developer to build conversational experience themselves.</p><p>Users interact with a business because it can do something better or cheaper, so there is no need to respond intelligently to all possible user utterances. For any given business, it is enough to focus only on the conversations related to the service that business provides, which is defined by its API schema. OpenCUI is a framework for building schema grounded conversational interface. In this schema ground approach, the goal is to build conversational interface for data types required by API schema, natural language text and voice are converted into schemas first, which represents what service users want and how they want it. Structured data returned from business logic is then rendered into natural text in the given language and style.</p><h2 id="why-build-cui-in-opencui-way" tabindex="-1">Why Build CUI in OpenCUI Way <a class="header-anchor" href="#why-build-cui-in-opencui-way" aria-label="Permalink to &quot;Why Build CUI in OpenCUI Way&quot;">​</a></h2><p>To make building conversational app as cost-effective as building graphical user interface (GUI) app, we follow the same principles such as <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" target="_blank" rel="noreferrer">Separation of concerns</a>, <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noreferrer">model-view-controller</a> and the same workflow such as <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noreferrer">version control using git</a> for collaboration. If these principles and best practices worked well for building GUI apps, why change them? Frameworks like Vue allow a domain expert with reasonable programming training to build great web apps, why we do not have such framework for building CUI? After all CUI and GUI can be just different user interface to the same services.</p><h3 id="separation-of-concerns" tabindex="-1">Separation of Concerns <a class="header-anchor" href="#separation-of-concerns" aria-label="Permalink to &quot;Separation of Concerns&quot;">​</a></h3><p>Separation of concerns is essential in increasing productivity and reducing the cost of building things. We decompose chatbot into 3 layers: service, interaction and language perception (both understanding and text generation). OpenCUI only focuses on interaction and language layer. It should be clear that interaction logic is largely decided by underlying service and also constrained by conversation principles, but independent of which language is used. By decoupling CUI from service, and the interaction from language, we can save cost by having different people working on different aspects, at the same time make supporting multiple language very easy.</p><h3 id="declarative-framework" tabindex="-1">Declarative Framework <a class="header-anchor" href="#declarative-framework" aria-label="Permalink to &quot;Declarative Framework&quot;">​</a></h3><p>Declarative programming places much of its focus on the overall goal and intended outcome of a program&#39;s operations. Developers don&#39;t necessarily have to worry about technical details of how things are done. A declarative framework provides a set of primitives each with clearly defined semantics so that builder can use to describe the desired behavior while leaving the implementation of these primitives to the domain experts. A well-designed declarative framework is essential for adopting the separation of concerns principle so builder can now focus on describing what user experience they want to deliver.</p><h3 id="component-approach" tabindex="-1">Component Approach <a class="header-anchor" href="#component-approach" aria-label="Permalink to &quot;Component Approach&quot;">​</a></h3><p>Instead of building things from scratch, the solution for well-defined use cases, such as recommending a list of items for a user to choose one from, can be packaged into a reusable (meaning composable and reconfigurable) module or component, which can then be integrated into bigger and bigger solutions to deliver the desired experience. This component based approach can save both time and cost, and users can enjoy higher quality experience because the components can be built and maintained by specialized professionals.</p><h3 id="dialog-understanding-without-ph-d" tabindex="-1">Dialog Understanding without Ph.D. <a class="header-anchor" href="#dialog-understanding-without-ph-d" aria-label="Permalink to &quot;Dialog Understanding without Ph.D.&quot;">​</a></h3><p>Understanding human language is hard as the different texts can mean the same and also the meaning of the same can change by contexts. This is one of the key complications of building conversational user interface. The popular approach rely on standard ML/NLU tasks like text classification and named entity recognition. While these standard tasks are well studied, applying them to new business use case requires serious customization, which typically call for expensive expertise in ML/NLU. Based on clear separation between interaction and language encouraged by schema grounded CUI, OpenCUI use a set of production friendly ML/NLU models that very easy for regular dev team to customize for any use cases with just utterance exemplars and template.</p><h2 id="what-opencui-is-not" tabindex="-1">What OpenCUI is Not? <a class="header-anchor" href="#what-opencui-is-not" aria-label="Permalink to &quot;What OpenCUI is Not?&quot;">​</a></h2><p>Under the hood, we take advantage of the state of the art deep learning based natural language models that are production friendly. But conversational AI is just a means to develop conversational applications, not the goal. There are many other directions that have been tried in the industry and academia, while we are learning as much as possible from this large body of prior work, there are some trendy things we decide against. So if you want to try these approaches, look else where.</p><h3 id="end-to-end" tabindex="-1">End to End <a class="header-anchor" href="#end-to-end" aria-label="Permalink to &quot;End to End&quot;">​</a></h3><p>Chatbots are developed to deliver services with good user experiences. However, good user experience alone may not be enough motivation for a business to build one.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Use: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I would like some iced coffee.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sorry, we ran out, but the Starbucks next door has some excellent choices.&quot;</span></span></code></pre></div><p>It is good user experience alright, but as a coffee shop owner, you might not want to invest towards this chatbot. To achieve your business goal, you need to have direct and full control of your chatbot so that you can react to ever-changing business conditions.</p><p>Being able to create a well-functioning chatbot by just looking at past conversations is such an appealing idea that there is so much effort around this, from both academia and industry. But this example based on end to end approach, commonly under the name of conversational AI, is not a good idea from the production point of view. Communicating rules in form of examples is not efficient for long tail scenarios.</p><h3 id="flow-based-approach" tabindex="-1">Flow Based Approach <a class="header-anchor" href="#flow-based-approach" aria-label="Permalink to &quot;Flow Based Approach&quot;">​</a></h3><p>Business logic is typically described as processes. Full control of each step a user takes is possible in graphical user interfaces but not in conversational interaction. Without some sort of factorization, the possible conversational paths needed by flow based modeling approach grows exponentially with complexity. Thus flow based approach to define conversational interaction becomes prohibitively costly.</p><h3 id="low-level-library" tabindex="-1">Low Level Library <a class="header-anchor" href="#low-level-library" aria-label="Permalink to &quot;Low Level Library&quot;">​</a></h3><p>Conversational experiences built on code level provide the most flexibility, but it is hard to escape implementation details like intent classification and slot filling. This forces the builder to switch back and forth between business logic and language understanding which slows the building process and raises cost unnecessarily.</p>`,25),s=[o];function r(l,c,d,h,p,u){return n(),a("div",null,s)}const b=e(i,[["render",r]]);export{f as __pageData,b as default};