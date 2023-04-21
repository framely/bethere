import{_ as e,c as t,o,N as i}from"./chunks/framework.184eb22e.js";const a="/images/annotation/transition/transition.png",n="/images/annotation/transition/transition-event.png",s="/images/annotation/transition/transition-condition.png",r="/images/annotation/transition/transition-action.png",v=JSON.parse('{"title":"State transition","description":"","frontmatter":{},"headers":[],"relativePath":"reference/annotations/transition.md","lastUpdated":1680803032000}'),l={name:"reference/annotations/transition.md"},c=i('<h1 id="state-transition" tabindex="-1">State transition <a class="header-anchor" href="#state-transition" aria-label="Permalink to &quot;State transition&quot;">​</a></h1><p>The 5 stage slot filling is designed to minimize builders&#39; effort level in building the conversational experience that get collaborative user served as fast as possible, under the favorable conditions. As such, the bot will follow a deterministic interaction logic that first determines a user&#39;s intent, triggers the corresponding skill and then aggressively fills slots of that skill one by one until it has all the required parameters to invoke the service.</p><p>However, the design bias towards favorable conditions in these standard slot filling components can sometime cumbersome for interaction logic for unhappy use case. For example, when a user wants to buy a ticket, the movie he wants is sold out. Instead of asking what showtime he likes, whether he wants IMAX, it is a better experience to simply exit conversation early: :::: conversation ::: user User Two tickets for Star Wars please? ::: ::: bot Bot Sorry all tickets are sold out today. What else can I do for you? ::: ::::</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The 5 stage slot filling conversational interaction logic defined by chatbot builder in intentionally modeled under dynamic <a href="https://statecharts.dev/" target="_blank" rel="noreferrer">state chart</a>, or dynamic composite state machines. The deterministic nature warranted by this conceptual model make it easy for business to control interaction logic for their business needs, both in building and debugging phase.</p><p>In particular, each entity slot filling is essentially a deterministic state machine, that deterministically move from the start state to end state, that go through the 5 stages of slot filling based the transition table defined by corresponding CUI components. The frame slots are filled by a composite state machine that also includes the type-level CUI component, as well as the components defined on each one of its slots.</p><p>Transition is a low level annotation that give builder the ability to control the state machine directly. It is an optional type level annotation which lets you define transitions between slots hosted directly and indirectly by hosting frame.</p><p>Transition can be configured in two parts: triggering and update actions, where triggering defines under what condition the corresponding actions sequence is executed. ::: thumbnail <img src="'+a+'" alt="transition"> :::</p><h2 id="transitions" tabindex="-1">Transitions <a class="header-anchor" href="#transitions" aria-label="Permalink to &quot;Transitions&quot;">​</a></h2><p>Currently, we support two kinds of transitions: event triggered transitions and condition triggered transitions.</p><h3 id="event-triggered-transitions" tabindex="-1">Event triggered transitions <a class="header-anchor" href="#event-triggered-transitions" aria-label="Permalink to &quot;Event triggered transitions&quot;">​</a></h3><p>Given skill, the interaction logic or transition table defined by slot filling components will always try to proactively fill every it&#39;s slot, and delivery the result to user based on the filled slots. While direct slot filling is already capable for many real world use case, many advanced use cases involves no-direct slot filling.</p><p>For example, during a purchase session, the user might want to use a certain coupon by say &quot;<em>use the coupon that will expire soon</em>&quot;. Instead of responding with &quot;<em>I do not know what you are talking about</em>&quot;, you can set up an event triggered transition, with triggering event set to be &quot;CouponSelection&quot;, and actions include a fill action which can assign the coupon code that is returned from a function that retrieves the expiring coupon code for given user.</p><p>:::: conversation ::: bot Bot Okay lets go ahead and begin checkout. ::: ::: user User I want to use the coupon that will expire soon ::: ::: bot Bot Sure. Would you like to use the credit card on file? ::: ::::</p><p>The triggering part of event triggerred transition are defined by arbitrary frame event, and update can be any valid action sequence. ::: thumbnail <img src="'+n+'" alt="transition-event"> :::</p><h3 id="condition-triggered-transitions" tabindex="-1">Condition triggered transitions <a class="header-anchor" href="#condition-triggered-transitions" aria-label="Permalink to &quot;Condition triggered transitions&quot;">​</a></h3><p>The default behavior of slot filling after one slot is filled is always moving onto fill the next slot. But sometime, this behavior is not what you want. In addition to early exit example at the beginning of this doc, condition triggerred transition can also be used for looping back.</p><p>For example, a user want to get some food, say you have a taxonomy of food arranged into some tree structure, you can use condition triggerred transition for a while loop kind of conversational experience. Here, as long as the food user specified is not concrete food, but some category, we can jump back and ask user to clarify:</p><p>:::: conversation ::: user User I like order some Chinese food. ::: ::: bot Bot Cool, what food do you want? We have noodle or rice as main dish. ::: ::: user User noodle please. ::: ::: bot Bot Sure, what noodle do you want? we have dry noodle or noodle soup. ::: ::::</p><p>Condition triggerred transition allows you to customize interaction logic based on slot values. The triggering part is defined by triggering timing and triggering condition, where timing is defined by a slot, and triggering condition can be specified by arbitrary boolean <a href="./kotlinexpression.html">Kotlin expression</a>. When the trigger timing slot is filled and the condition expression evaluates to true, the corresponding actions will be executed. ::: thumbnail <img src="'+s+'" alt="transition-condition"> :::</p><div class="warning custom-block"><p class="custom-block-title">Used with caution</p><p>Transition is a low level control that you can use to implement arbitrary conversational interaction logic. But with great power, comes with great responsibility. The low level control can adversely impact the interaction logic defined at slot filling level if not used carefully. Please test your design when it comes to transition.</p></div><h2 id="system-actions" tabindex="-1">System actions <a class="header-anchor" href="#system-actions" aria-label="Permalink to &quot;System actions&quot;">​</a></h2><p>::: thumbnail <img src="'+r+'" alt="transition-action"> :::</p><p>Update action contains one or more actions in sequence, you need to define it by order. When the trigger is active, bot will respond the update action one by one according to the <strong>top-to-bottom order</strong>, please make sure the order of actions is the one you want.</p><p>With actions, you can:</p><ul><li>Prompt users for necessary information by <strong>Single value message</strong> and <strong>Multiple value message</strong>. See <a href="./../channels/universalmessage.html">Universal channel</a> for more details about messages;</li><li>Change the state of slot filling by <strong>Clear slot</strong>, <strong>Fill slot</strong> and <strong>Recheck slot</strong>;</li><li>Transfer conversation by <strong>Skill start</strong>, <strong>Skill abort</strong> and <strong>Skill end</strong>.</li></ul><h4 id="single-value-message" tabindex="-1">Single value message <a class="header-anchor" href="#single-value-message" aria-label="Permalink to &quot;Single value message&quot;">​</a></h4><p>Prompt user a static text or media reply, it can be used to verbalize a single value of some type. This type of message can only support tuple (think of static list where the number of elements are known at build time).</p><h4 id="multiple-value-message" tabindex="-1">Multiple value message <a class="header-anchor" href="#multiple-value-message" aria-label="Permalink to &quot;Multiple value message&quot;">​</a></h4><p>Prompt user a dynamic list reply, it is designed to verbalize multiple value of some time, where the number of elements are not know at build time. The multiple value message bind to a list of some type, and can be expressed via code expression for maximal flexibility.</p><h4 id="clear-slot" tabindex="-1">Clear slot <a class="header-anchor" href="#clear-slot" aria-label="Permalink to &quot;Clear slot&quot;">​</a></h4><p>Clear the target slot&#39;s value, which needs to be refilled according to the setting of slot filling stages. It is a good way to use in cooperation with <strong>Recheck slot</strong>, to make sure some value still makes business sense.</p><h4 id="fill-slot" tabindex="-1">Fill slot <a class="header-anchor" href="#fill-slot" aria-label="Permalink to &quot;Fill slot&quot;">​</a></h4><p>Assign the value expressed in code expression to target slot, which supports the following expressions:</p><ul><li><p><strong>Constant</strong>: For example, if the type of target slot is <code>kotlin.Int</code>, you can associate the value with <code>1</code> ; If the type of target slot is multi-valued <code>kotlin.Int</code>, you can associate the value to be <code>listOf(1, 2, 3) </code> .</p></li><li><p><strong>Slot</strong>: You can pick an earlier slot of the same type as proposed value, for example <code>slotA</code> . If you pick a later slot, the behavior is not defined, meaning the behavior might change without notice.</p></li><li><p><strong>Function call</strong>: You can set the target slot <code>phoneNumber</code> by using function label directly, such as <code>getUserPhoneNumber()</code>.</p></li></ul><p>Of course, expression can be arbitrarily nested via method calls, and combined via operators, such as if expression, when expression, !! operator, Elvis operator, for more details you can see <a href="./../annotations/kotlinexpression.html">Kotlin expression</a>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>When use <strong>Fill slot</strong> with code expression, you should ensure that assignment actually works. For instance, the code expression should be valid for the current context.</p></div><h4 id="recheck-slot" tabindex="-1">Recheck slot <a class="header-anchor" href="#recheck-slot" aria-label="Permalink to &quot;Recheck slot&quot;">​</a></h4><p>Move the stage before checking the value of target slot, to make sure it still makes business sense. OpenCUI reset every slot after slot to be cleared to be rechecked by default.</p><h4 id="skill-start" tabindex="-1">Skill start <a class="header-anchor" href="#skill-start" aria-label="Permalink to &quot;Skill start&quot;">​</a></h4><p>Start a new skill with its slot filled with assignments by code expression, when this expression is evaluated to not null, the new started skill will skip the interaction on these slots.</p><h4 id="skill-abort" tabindex="-1">Skill abort <a class="header-anchor" href="#skill-abort" aria-label="Permalink to &quot;Skill abort&quot;">​</a></h4><p>Abort the skill you specified. Abort is treated as abnormal termination which indicates all associated or nested skills will be affected. For example, if you provide a round-trip booking service by using composite skill which contains flight skill, and there is no suitable flight available, you can make a decision to abort skill. If the flight skill aborted, the round-trip composite skill will be assumed the same way.</p><h4 id="skill-end" tabindex="-1">Skill end <a class="header-anchor" href="#skill-end" aria-label="Permalink to &quot;Skill end&quot;">​</a></h4><p>Terminate the current skill. For example, when the ticket that the user wants to buy has been sold out, it is a better experience to simply exit conversation early with condition triggerred transition by adding skill end action. Of course, you&#39;d better add some replies at the same time to remind the user context. Skill end will only terminate the current skill and will not affect others.</p><h4 id="hand-off" tabindex="-1">Hand off <a class="header-anchor" href="#hand-off" aria-label="Permalink to &quot;Hand off&quot;">​</a></h4><p>Transfer the current conversation to a human agent. Please make sure you have configured <a href="./../support/overview.html">Support</a>.</p><h4 id="close-session" tabindex="-1">Close session <a class="header-anchor" href="#close-session" aria-label="Permalink to &quot;Close session&quot;">​</a></h4><p>Clear the entire session. For example, if the bot gets stuck with the user, for a better experience, the bot should actively jump out of the stuck and restart with the user under pre-set conditions.</p>',49),d=[c];function h(u,p,g,m,f,b){return o(),t("div",null,d)}const k=e(l,[["render",h]]);export{v as __pageData,k as default};
