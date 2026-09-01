---
article: true
date: 2026-08-31
description:
    - Interaction Closure keeps conversation soft at the user-facing surface and rigid at the business-logic core.
---

# Interaction Closure: The Voice AI That Businesses Need

OpenAI's current [GPT-Realtime-2.1](https://developers.openai.com/api/docs/models/gpt-realtime-2.1) supports speech-to-speech conversations, configurable reasoning, instruction following, and tool use for complex voice-agent workflows. Users can explain a problem naturally, add context, change direction, and respond in their own words.

Yet these advances have not produced an equally large change in how businesses operate inbound phone lines. Many calls are still handled by people, rigid phone trees, or automation limited to a narrow set of requests. A compelling free-form voice demonstration does not automatically become an agent that a business can trust to represent it across every incoming call.

Why has better voice AI not translated into broader business adoption?

Because free-form interaction solves only the **surface** of the problem. It improves how naturally a user and model can communicate. It does not ensure that every conversational path follows the same requirements, validation, policies, confirmation rules, authority boundaries, and permitted business outcomes.

The voice model makes the interaction surface soft, but the business still needs a rigid core. Businesses already know how to place deterministic control around flexible capability in another domain: they use workflow to make backend work reliable.

## Why Work Needs Workflow

An LLM can reason about a task, choose a tool, and propose what to do next. If LLM capability were enough, a business could describe the desired process in a prompt and let the model carry it out.

That is not how reliable work is built.

Business work has dependencies and consequences. Inputs must be validated. Some steps must occur before others. Actions may require approval. Network calls fail, operations time out, and partially completed work may need to be retried or compensated. The business must know whether the work completed, failed, paused, or escalated.

A prompt can describe those expectations, but a description is not operational control. It does not by itself provide durable execution state, enforce approval gates, make side effects idempotent, retry failed operations, compensate partial work, or prove that the required terminal result was reached.

A workflow provides the control structure around that work. It defines:

- the preconditions for starting;
- the steps and dependencies involved;
- the decisions, approvals, and permissions that govern progress;
- retry, timeout, compensation, and escalation behavior;
- the allowed side effects; and
- the terminal outcomes by which success or failure is measured.

An LLM may operate inside a workflow step, but it does not own the operational contract. The workflow determines what the model is allowed to do, what must happen next, and whether the result satisfies the business requirement.

This is why reliable agentic fulfillment needs **workflow over LLM**. The model contributes flexible reasoning; the workflow makes the work bounded, observable, recoverable, and verifiable.

Workflow remains the dominant control structure not because an end-to-end LLM is incapable of following a process. A capable model can often reason through the same sequence and reach the intended result. The difference is operational:

- deterministic steps produce more repeatable results than asking a model to infer the next step each time;
- known transitions execute faster and more cheaply in code than through repeated model inference;
- workflow state can be inspected, resumed, tested, and audited directly;
- retries and side effects can be controlled without relying on the model to remember what already happened; and
- the LLM can be reserved for the steps where ambiguity or reasoning actually adds value.

Using an LLM as the entire execution layer makes the business pay for intelligence even when the next step is already known. It also makes reliability depend on the model repeatedly reconstructing a process the business could define once.

Workflow demonstrates a principle businesses already accept: **an LLM's intelligence is not a substitute for a business-owned control structure**.

If an LLM is not enough to govern business work, it should not be expected to govern business interaction by itself either. Interaction needs its own control structure—one designed for a user whose next input cannot be scheduled like the next step in a workflow.

## Why Inbound Automation Still Falls Short

Backend work normally begins after the objective has been established. An inbound interaction begins before the business knows what the user wants.

AI voice agents already answer real calls, and adoption is accelerating. The important question is not why voice AI is absent. It is why more businesses are not yet willing to give an AI agent broad, independent authority over their inbound phone lines.

The obstacle is no longer simply whether a machine can transcribe speech or produce a natural voice. Modern systems can sound convincing, recognize many intents, call tools, and complete useful tasks. The harder problem is whether the business can predict what the agent will do across the full range of calls it may receive.

An inbound phone line is an open interaction surface:

- the caller chooses the topic, wording, timing, and order;
- one utterance may contain several requests or corrections;
- speech recognition can distort names, numbers, dates, and negation;
- the caller may interrupt before hearing an important condition;
- identity, consent, payment, health, or account information may be involved;
- an answer can immediately create a reservation, issue a refund, change an account, or make another business commitment; and
- an unsupported or emotionally sensitive request must be handed to a person without trapping the caller in a loop.

A web application can disable a button, mark a field as required, display all available choices, and keep a confirmation visible before submission. A phone call has none of those persistent visual controls. The agent must recreate them through interaction while the caller remains free to say anything next.

It is tempting to apply the same structure to a conversational user interface (CUI): greet the user, identify an intent, ask for required information, confirm the request, and call a backend workflow. This produces a dialog flow—a happy path followed by branches for the cases the designer expects.

The problem is that a workflow controls the progression of work, but a business does not control the progression of a user's expression.

A dialog flow can control what the system asks next. It cannot control what the user says next.

A flow gains predictability by restricting flexibility. It expects the user to select one of the paths the designer represented. Adding branches can cover more expected cases, but it does not change the underlying assumption that the conversation must remain inside an enumerated path.

Users provide several answers at once. They answer questions the system has not asked yet. They omit information they assume is obvious. They change an earlier answer, introduce a new constraint, reject a recommendation, switch topics, or interrupt the assistant halfway through a sentence. In voice conversations, barge-in, false starts, pauses, and self-corrections make this even more apparent.

The system controls its own output, but it never controls the user's next input. A control structure based on a preferred path is therefore not enough. Conversation needs a structure that lets the user control the path while the business controls how every supported path resolves.

Giving control to an LLM solves the path problem but creates an assurance problem. The model can adapt to input that was not represented in a flow, but the business interaction logic then exists implicitly in prompts and probabilistic inference. A fluent response can still omit a required disclosure, misunderstand a correction, lose an earlier constraint, confirm the wrong value, or invoke a tool too early.

The two common approaches therefore fail in opposite directions:

| Approach | Interaction surface | Business core |
|---|---|---|
| Dialog flow | Rigid: users must remain on modeled paths | Rigid: rules are explicit on those paths |
| Pure LLM interaction | Soft: users can express themselves freely | Soft: behavior remains prompt- and model-dependent |

A flow keeps the core rigid by making the surface rigid. A pure LLM makes the surface soft by allowing the core to become soft. Business conversation needs a soft surface and a rigid core at the same time.

Current industry research reflects this difference between enthusiasm and operational trust. Twilio's 2025 customer-engagement survey found broad reported business value from AI, while only 15% of consumers said they absolutely trusted brands with their data and 54% wanted to know when they were interacting with AI. A Genesys study similarly found that four out of five consumers wanted clear governance of AI interactions, while only 31% of business leaders reported comprehensive organization-wide AI governance. These are not measures of Interaction Closure, but they illustrate the environment in which businesses decide whether an AI agent may represent them on a live call. ([Twilio](https://investors.twilio.com/node/13751/pdf), [Genesys](https://www.genesys.com/company/newsroom/announcements/genesys-study-finds-agentic-ai-is-advancing-but-governance-gaps-threaten-consumer-trust))

The deployment gap is therefore not only a model-capability gap. It is an **interaction-assurance gap**. Inbound automation needs a control structure that does not depend on controlling the user's path and does not leave business interaction authority inside an LLM.

## Interaction Closure: Prepare for Every Input and Return to Business Logic

Interaction Closure is a business-defined interaction contract that ensures every supported conversational path resolves according to business logic, regardless of how users express their intent or the order in which they provide information.

Its design principle is:

> **Soft at the interaction surface. Rigid at the business core.**

The surface must be soft because human expression is variable. Users should be able to speak naturally, provide information in any order, combine several answers, interrupt, correct themselves, and use wording the designer did not anticipate.

The core must be rigid because business meaning cannot vary with phrasing. Required information, validation, dependencies, permissions, confirmation, and allowed outcomes must remain governed by the same business logic on every conversational path.

Interaction Closure connects these two layers:

```text
Soft interaction surface
  Natural language, arbitrary order, interruption, correction
                         |
                         v
Interaction Closure
  Governed handling, convergence, explicit outcomes
                         |
                         v
Rigid business core
  Requirements, validation, policy, authority, outcomes
```

Interaction Closure describes a business guarantee, not a particular technical architecture. It defines what must remain true across the interaction: every supported input receives governed handling, equivalent meaning converges on the same business result, and every path reaches an explicit outcome. How a system provides those guarantees is an implementation decision.

“Rigid” does not mean that business rules can never change. It means they change through an explicit business decision, not accidentally because a user chose different words or an LLM improvised a different interaction path.

Preparing for every input does not mean predicting every sentence a user might say. That is impossible. It means every input has a governed way back to business logic. An input may:

- supply or revise information for an active interaction;
- resolve several outstanding obligations at once;
- invoke another supported business interaction;
- conflict with information that must be clarified;
- be ambiguous and require disambiguation; or
- fall outside the supported domain and require a defined refusal or handoff.

The user is never required to return to the expected dialog node. Instead, Interaction Closure interprets the input, invokes the relevant business interaction, applies its rules, and determines what remains unresolved:

```text
User input in any supported wording or order
        |
        v
Interpret the business interaction act
        |
        v
Invoke validation, correction, and dependency rules
        |
        v
Update resolved and unresolved obligations
        |
        v
Continue, close, reject, defer, or hand off
```

Interaction Closure does not force the user back onto a scripted path. It brings the **meaning** of every supported path back under business logic.

It does not prescribe what users must say or when they must say it. It defines what the interaction must resolve before it can close:

- which information is required;
- which values are valid;
- how ambiguity and conflicts are handled;
- how earlier information may be corrected;
- when options or recommendations must be presented;
- when confirmation is required;
- when the business is authorized to act; and
- which completed, rejected, deferred, or escalated outcomes are allowed.

An interaction obligation is closed when it reaches an explicit business result. Closing one obligation does not mean the entire conversation must end; a conversation can contain several nested interactions with different closure states. Ambiguity can open a clarification obligation instead of permitting action. The overall request may eventually close as completed, rejected, deferred, cancelled, or handed off when that is what business logic requires.

The central invariant is:

> **Different expression or order + equivalent meaning = the same business-valid interaction result.**

The language and conversational path may vary. The business interaction contract must not.

## A Flow Controls Only One Side of the Conversation

Flows work well when a system controls the order of execution. A workflow can perform step A, evaluate a condition, choose step B or C, retry a failed operation, and eventually reach a terminal outcome. Even a workflow with many branches remains path-oriented: its designer specifies the routes through which work may proceed.

A dialog flow applies the same idea to conversation. It specifies a system prompt, lists expected user responses, and connects each response to another node. This works when the user behaves like the next step in the workflow.

But the user is not a workflow step.

Suppose a restaurant assistant asks:

> What day would you like the reservation?

The user might respond with any of the following:

- “Friday.”
- “Friday at seven, outside if possible.”
- “Actually, make the one I mentioned earlier Friday.”
- “Two people—does Friday around seven have anything?”
- “Not Thursday. Friday. And change the name to Priya.”
- “Before that, what is your cancellation policy?”

Only the first answer follows the expected edge in a simple dialog flow. The other answers may contain multiple values, corrections, preferences, references to earlier state, another business question, or all of them together.

Adding more branches does not solve the underlying problem. Each new piece of information can arrive before, during, or after every other piece. As supported intents, values, corrections, and interruptions grow, enumerating conversational paths becomes combinatorial.

A flow models the paths the designer expects. It can become larger, but it does not become genuinely free-form. Conversation requires a model that remains correct across the paths users actually take.

## One Way to Implement Interaction Closure

Interaction Closure does not begin by drawing a preferred sequence of utterances. It begins with business meaning and closure conditions.

For a reservation, the business may need to resolve:

- the requested operation, such as creating or changing a reservation;
- the reservation being changed, when applicable;
- party size;
- date and time;
- required constraints and optional preferences;
- customer identity;
- availability;
- confirmation; and
- permission to commit the change.

These requirements have dependencies, but the user's expression of them has no required order. The user may provide party size before the date, correct the time after availability is checked, or state a seating preference before the assistant asks about it.

Interaction Closure therefore treats relevant interactions as deterministically invokable. Once an utterance is interpreted as a business interaction act, the same act applied to the same business state produces the same governed transition. The user does not need to be standing on the “correct” dialog node before providing a value or correction.

Interaction Closure does not require a specific implementation. One practical design is a fully connected invocation surface over a guarded state machine: from any relevant conversational state, the user can supply, revise, reject, or inquire about any supported part of the interaction. “Fully connected” does not mean that every business transition is permitted. Validation, dependencies, confirmation, and authorization still guard business state changes. It means every supported user move has defined handling instead of being accepted only on one expected path.

At the surface, deterministic handlers should map input directly whenever meaning is already known. The LLM is the fallback for the part that cannot be enumerated: interpreting free-form language, resolving references, separating compound utterances, and proposing canonical interaction acts. Its proposal still passes through the state machine, which may accept it, reject it, or open a clarification obligation.

```text
User expression
      |
      v
Known mapping? ------ no ------> Bounded LLM interpretation
      |                              |
     yes                             v
      +---------------------> Canonical interaction act
                                     |
                                     v
                          Closure state machine
                                     |
                                     v
                    Continue, close, reject, or hand off
```

This division keeps routine input cheap and repeatable, while preserving the LLM's flexibility for language that genuinely needs interpretation. More importantly, the probabilistic layer can suggest meaning but cannot bypass business rules or manufacture authority.

This makes Interaction Closure **convergent**. Semantically equivalent sequences of interaction acts reach the same resolved result even when their wording and order differ.

## Why LLM-Based Interaction Is Not Enough

Large language models are valuable precisely because users do not speak in canonical commands. An LLM can help recognize that “outside if possible” is a preference, that “make that seven” corrects a time, or that “the one we talked about earlier” refers to an existing reservation.

But recognizing language and governing interaction are different responsibilities.

In a pure LLM-based CUI, the model decides what the user means, which information is still required, what to ask next, when to validate, whether to confirm, and when to invoke a tool. The interaction logic exists implicitly in prompts and probabilistic inference.

This produces conversational flexibility, but it gives the model authority over business interaction. Equivalent requests may follow materially different logic. A change in phrasing, model version, or context can change whether the system requests confirmation, treats a preference as mandatory, or acts before all preconditions are satisfied.

Interaction Closure places a business-defined control structure over the LLM. The model is used when flexible expression needs interpretation and when a natural response needs rendering. Closure logic decides how proposed acts affect the interaction, what remains unresolved, and whether the business may proceed.

> **The LLM controls linguistic form. Business logic controls closure.**

This does not make every part of the system deterministic. Speech recognition and language understanding remain probabilistic. When their interpretation is ambiguous or insufficiently confident, however, Interaction Closure produces a defined clarification or safe failure outcome instead of allowing the model to improvise an operational decision.

## One Meaning, Many Conversational Paths

Consider three customers making the same reservation request.

The first follows a designed sequence:

```text
User: I need a reservation.
Assistant: For what day?
User: Friday.
Assistant: What time?
User: Around 7 PM.
Assistant: For how many people?
User: Two.
Assistant: Any seating preference?
User: Outside if possible.
Assistant: What name should I use?
User: Priya.
```

The second provides everything at once:

```text
User: Book an outdoor table for two this Friday around seven under Priya.
```

The third provides information through corrections and interruption:

```text
User: Can you book Thursday for two—
Assistant: What time on Thurs—
User: Sorry, Friday, not Thursday. Around seven. Outside if possible, under Priya.
```

These conversations should not be forced through the same sequence. They should converge on the same business meaning:

```text
operation: create reservation
date: resolved Friday
time preference: around 7 PM
party size: 2
seating: outdoor preferred
customer: Priya
```

The business may then apply the same availability, validation, and confirmation logic in all three cases. If “around seven” is not precise enough for the available inventory, all three paths should produce the same need to present options. If explicit confirmation is required before booking, no path should bypass it merely because the user supplied all values in one sentence.

Different words and order should change the language experience, not the governing business result.

## Why Voice Makes Closure More Important

Graphical interfaces can constrain input through visible fields, buttons, disabled actions, and page structure. A form can require a user to enter a value before continuing. Conversation exposes no equivalent physical boundary.

Voice removes even more structure. Users cannot see the complete set of required values. They often speak while thinking, revise themselves mid-utterance, and interrupt as soon as they understand where the assistant is going. Network delay or synthesized speech may cause turns to overlap. A natural voice assistant must support barge-in without losing valid context or corrupting business state.

Adding speech to a dialog flow does not change this control boundary. It changes the transport, not who controls the conversational path.

A voice flow can decide what the assistant intended to say next. It cannot guarantee that the user waits, answers only that question, or finishes the current topic first.

Interaction Closure separates transport timing from interaction meaning. Barge-in may cancel speech playback, but it does not erase already validated business information. A correction updates the intended value while preserving unrelated context. An answer supplied early closes the corresponding obligation so the assistant does not ask for it again later.

Without closure, a voice assistant either becomes rigid—forcing users back onto the expected path—or unpredictable—letting an LLM decide how to recover each time.

Interaction Closure is not the entire production voice stack. An inbound phone agent also needs accurate speech processing, low latency, barge-in, identity and security controls, reliable fulfillment workflows, observability, and human escalation. Closure supplies the part those capabilities do not: control over how arbitrary user input becomes a business-valid interaction result.

## Workflow Is to Work What Closure Is to Interaction

The words themselves expose the architectural symmetry:

- **Work + flow:** organize work into reliable execution paths.
- **Interaction + closure:** ensure interaction reaches a predictable business result across every supported path.

Work needs flow because execution has dependencies and order. Interaction needs closure because expression has no guaranteed order but must still resolve correctly.

This leads to two complementary control structures:

> **Workflow over LLM for reliable fulfillment. Interaction Closure over LLM for predictable interaction.**

A backend workflow begins with a structured request and controls how work is performed: API calls, transactions, retries, compensation, and terminal outcomes. A backend agent may handle open-ended fulfillment when the objective is known but the required execution steps are not.

Interaction Closure establishes that objective. It determines what the user and business have agreed to, whether required information and confirmation are present, and whether fulfillment is authorized.

The two responsibilities may interleave. A reservation interaction can call an availability service, present alternatives, collect a new choice, and call the backend again. The distinction is not a strict chronological phase boundary. It is a boundary of authority: the interaction layer governs meaning and agreement; the fulfillment layer governs execution.

## How to Test Interaction Closure

A conversational system should not be verified only with a few natural-sounding transcripts or one happy path. Interaction Closure creates testable invariants:

1. **Paraphrase invariance:** Equivalent expressions resolve to the same interaction act.
2. **Order invariance:** Independent information supplied in different orders reaches the same resolved state.
3. **Compound-input handling:** One utterance can close several obligations without skipping their validation.
4. **Correction integrity:** A correction replaces the intended value without discarding unrelated valid context.
5. **Interruption continuity:** Barge-in stops the current response without corrupting interaction state.
6. **Repetition safety:** Repeated information does not trigger duplicate business actions.
7. **Clarification safety:** Ambiguous, conflicting, or unsupported input prevents premature fulfillment.
8. **Policy consistency:** Required validation, confirmation, and authorization apply on every conversational path.
9. **Result convergence:** Conversations with equivalent resolved meaning produce the same business-valid result.

These tests do not require identical assistant wording. Predictability is about interaction semantics, not scripted sentences.

## Let Users Control the Path Without Surrendering Business Logic

Dialog flows are useful for scripting expected exchanges, just as workflows are useful for organizing expected work. But conversation is not a process whose complete path the system controls.

Users decide what to say, how to say it, and in what order. A capable CUI must accept that freedom without transferring control of business interaction to a probabilistic model.

Interaction Closure provides the missing structure. It defines the obligations and permitted outcomes of an interaction, makes supported interaction acts invokable from any relevant point, and ensures equivalent conversational paths converge on the result required by business logic.

The promise is simple:

> **Do not control the user's conversational path. Control how every supported path closes.**

That is how a business can offer flexible conversation and still deliver predictable interaction.

At scale, neither extreme works. A rigid flow cannot absorb the ways people actually speak, while an end-to-end LLM cannot provide the repeatability, cost control, and business authority that consequential interactions require. The scalable requirement is a soft interaction surface connected to a rigid business core. Interaction Closure defines that contract independently of the technology used to implement it.

That separation is what allows the conversational interface to become a dependable business channel rather than an impressive demonstration. A guarded state machine with bounded LLM interpretation is one way to build it; it is not the definition of Interaction Closure itself.
