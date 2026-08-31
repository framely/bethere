---
article: true
date: 2026-08-31
description:
    - Interaction Closure lets users speak freely while ensuring every supported conversational path resolves according to business logic.
---

# Interaction Closure: Why Dialog Flows Are Not Enough for Conversation

A dialog flow can control what a system asks next. It cannot control what a user says next.

This difference is easy to miss when designing a conversational user interface (CUI). We draw a happy path: greet the user, identify an intent, ask for required information, confirm the request, and call a backend service. Then we add branches for the cases we expect.

Real users do not follow those branches.

They provide several answers at once. They answer questions we have not asked yet. They omit information they assume is obvious. They change an earlier answer, introduce a new constraint, reject a recommendation, switch topics, or interrupt the assistant halfway through a sentence. In voice conversations, barge-in, false starts, pauses, and self-corrections make this even more apparent.

The system controls its own output, but it never controls the user's next input.

That is why conversation needs a control structure designed for interaction rather than a flow borrowed from work execution. We call that structure **Interaction Closure**.

## What Is Interaction Closure?

Interaction Closure is a business-defined interaction contract that ensures every supported conversational path resolves according to business logic, regardless of how users express their intent or the order in which they provide information.

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

A flow models the paths the designer expects. Conversation requires a model that remains correct across the paths users actually take.

## Interaction Is State-Space-First, Not Path-First

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

One implementation may expose a fully connected invocation surface over a guarded state machine: from any relevant conversational state, the user can supply, revise, reject, or inquire about any supported part of the interaction. “Fully connected” does not mean that every business transition is permitted. Validation, dependencies, confirmation, and authorization still guard business state changes. It means every supported user move has defined handling instead of being accepted only on one expected path.

This makes Interaction Closure **convergent**. Semantically equivalent sequences of interaction acts reach the same resolved result even when their wording and order differ.

## The LLM Handles Language, Not Interaction Authority

Large language models are valuable precisely because users do not speak in canonical commands. An LLM can help recognize that “outside if possible” is a preference, that “make that seven” corrects a time, or that “the one we talked about earlier” refers to an existing reservation.

But recognizing language and governing interaction are different responsibilities.

In a pure LLM-based CUI, the model decides what the user means, which information is still required, what to ask next, when to validate, whether to confirm, and when to invoke a tool. The interaction logic exists implicitly in prompts and probabilistic inference.

This produces conversational flexibility, but it gives the model authority over business interaction. Equivalent requests may follow materially different logic. A change in phrasing, model version, or context can change whether the system requests confirmation, treats a preference as mandatory, or acts before all preconditions are satisfied.

Interaction Closure places a business-defined control structure over the LLM. The model maps flexible expression into canonical interaction acts and renders appropriate language. Closure logic decides how those acts affect the interaction, what remains unresolved, and whether the business may proceed.

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
