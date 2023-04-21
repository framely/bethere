import{_ as e,c as t,o as a,N as o}from"./chunks/framework.184eb22e.js";const m=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"reference/annotations/overview.md","lastUpdated":1681261285000}'),i={name:"reference/annotations/overview.md"},n=o('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>The primary responsibility of a conversational user interface is to instantiate a function type or create an instance of that function type so that the chatbot can deliver the necessary functionality for the user. For composite types with multiple slots (representing parameters for a function and properties or attributes for user-defined types), their slots should be filled or a value of the slot type should be created in accordance with the business logic. For instance, since not every movie has an IMAX version, the chatbot should only ask whether the user wants to see the IMAX version if it&#39;s available for the chosen movie. Similarly, if Star Wars is only showing at 8:00 pm, the user should not be able to choose the 6:00 pm showing for that particular movie.</p><p>In a conversational system, what information to request from the user, and what options to present to the user are all controlled by the interaction logic. It is important that the interaction logic is designed to follow the business logic, in order to ensure that the chatbot operates in a way that is consistent with the business goals and objectives. Building the interaction logic requires a deep understanding of the business requirements and constraints. Since every business is different, this is a job best left to experienced business application development teams.</p><h2 id="a-type-based-approach" tabindex="-1">A type-based approach <a class="header-anchor" href="#a-type-based-approach" aria-label="Permalink to &quot;A type-based approach&quot;">​</a></h2><p>At a conceptual level, OpenCUI provides a declarative approach to defining how to create an instance for a given type by attaching dialog annotations to that type. For composite types such as skills and frames, we also need to add dialog annotations for their slots. This way, the OpenCUI runtime would always know how to guide the conversation by figuring out which slot needs to be filled based on the user input and the current dialog state, regardless of which conversation path it is on.</p><h2 id="five-stages-of-slot-filling" tabindex="-1">Five stages of slot filling <a class="header-anchor" href="#five-stages-of-slot-filling" aria-label="Permalink to &quot;Five stages of slot filling&quot;">​</a></h2><p>On OpenCUI, all skills are implementations of a special runtime interface <code>IIntent</code>, thanks to the built-in polymorphism support. Furthermore, every chatbot is started with a built-in skill that has a slot of <code>List&lt;IIntent&gt;</code> type. As a result, slot filling, or instantiating the slot type, becomes one of the most important aspects that chatbot builders need to consider.</p><p>The behavior of slot filling, or creating an instance for a slot, is controlled by the <a href="./fillstrategy.html">Fill strategy</a>. This strategy determines how the slot should be filled, including whether users can be prompted for their choice.</p><p>When a slot is configured to be filled by user interaction, the OpenCUI framework uses a five-stage slot filling process designed to help users effortlessly converge on a servable request. This filling process can be easily configured via corresponding annotations based on business logic. The stages are as follows:</p><ol><li><a href="./init.html">Initialization</a>: Tries to fill the slots based on business logic first.</li><li><a href="./templateandexemplar.html#prompt">Prompt</a>: Allows you to provide the template for the SlotRequest dialog act to request user choice for the given slot.</li><li><a href="./valuerec.html">Value recommendation</a>: Provides a list of candidates per business production system for users to choose from. This can avoid wasted user effort in filling slots with an unservable choice.</li><li><a href="./valuecheck.html">Value check</a>: Examines the proposed value to determine if it is servable based on business rules.</li><li><a href="./confirmation.html">Confirmation</a>: Gives users a second chance to verify the proposed value.</li></ol><p>By systematically deciding on how to configure these five annotations, builders can end up with an effective CUI interaction logic for delivering the services.</p><h2 id="advanced-annotations" tabindex="-1">Advanced annotations <a class="header-anchor" href="#advanced-annotations" aria-label="Permalink to &quot;Advanced annotations&quot;">​</a></h2><p>Slot-level annotations are designed for common use cases, prioritizing convenience over flexibility. The underlying mechanism of type-based conversational user interfaces, including the five stages of slot filling, is implemented based on dynamic <a href="https://statecharts.dev/" target="_blank" rel="noreferrer">statecharts</a>, also known as composite state machines. Therefore, if there are CUI behaviors that cannot be defined by these high-level annotations, one can always turn to <a href="./transition.html">state transitions</a>, which offer greater control at a lower level. Builders can directly control how the bot should react given the current state, user input, and any arbitrary conditions defined on the type.</p><h2 id="two-layers" tabindex="-1">Two layers <a class="header-anchor" href="#two-layers" aria-label="Permalink to &quot;Two layers&quot;">​</a></h2><p>Dialog annotations are defined in two layers: interaction and language. Many annotations have an interaction-layer or a language-independent interpretation, such as Fill Strategy, which determine how the bot should fill the given slot. In addition, dialog annotations may include language-related components such as templates and expression exemplars. Templates provide examples of how a dialog act can be expressed in natural language, while expression exemplars exemplify how user utterances in natural language should be converted into a structured representation of meaning.</p>',15),s=[n];function r(l,h,c,d,p,f){return a(),t("div",null,s)}const g=e(i,[["render",r]]);export{m as __pageData,g as default};
