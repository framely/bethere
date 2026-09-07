---
article: true
date: 2026-08-31
description:
    - Interaction Closure keeps conversation soft at the user-facing surface and rigid at the business-logic core.
---
# Interaction Closure: What Business Voice AI Needs

With configurable reasoning, instruction following, and tool use, OpenAI's [GPT-Realtime-2.1](https://developers.openai.com/api/docs/models/gpt-realtime-2.1) supports natural speech-to-speech conversations. Yet a natural conversation alone is not enough for a business to trust an agent with its inbound phone lines. What else does reliable business interaction require?

Better voice AI improves how naturally a user and model can communicate. But it does not ensure that every conversational path remains governed by the applicable requirements, validation rules, policies, confirmation steps, authority boundaries, and permitted business outcomes. In other words, the voice model makes the interaction surface soft, but the business still needs a rigid core.

## Why Businesses Need Workflow

For backend work, that rigid core is workflow. Once a business has established a best-known way to perform a task, a workflow captures it as an executable process: which steps run, what each requires, where execution branches, and how failures are handled. Known work can then follow a defined process instead of requiring the model to reconstruct that process on every run.

A business could describe its standard operating procedure step by step in a prompt. But a prompt describes what the model should do; it does not enforce execution. When the model interprets those instructions on each run, it can skip, repeat, reorder, or misapply a step. A missed approval, duplicate reservation, or incorrect retry can change a real business outcome. More instructions may reduce these errors, but they do not provide durable state, protection against duplicate actions, or enforced recovery.

A workflow makes these controls explicit in code. It:

- enforces preconditions, dependencies, permissions, and approvals;
- persists state so work can be inspected, resumed, tested, and audited;
- controls retries, timeouts, compensation, escalation, and side effects;
- records whether the work completed, failed, paused, or escalated; and
- assigns each step to an appropriate component: deterministic code, a specialized small model, or a larger model for open-ended reasoning.

This structure can also reduce unnecessary model calls. Decisions already encoded in the workflow do not require fresh inference, and individual steps can use smaller models where appropriate. More expensive reasoning can be reserved for the steps that need it.

This is **workflow over LLM**. It works because the LLM operates within a workflow harness: the model reasons within individual steps, while the workflow controls when it is invoked, which actions are permitted, how its output is validated, and what happens next. The business retains control of execution while using the model's flexibility where it is needed.

## Why Inbound Automation Still Falls Short

Business interaction needs a harness too, but it cannot depend on callers following a prescribed sequence.

For example, consider three customers making the same reservation request.

The first follows a designed sequence:

```text
User: I need a reservation.
Assistant: For what day and time?
User: This Friday, around 7 PM.
Assistant: For how many people?
User: Two.
Assistant: What name should I use, and do you have a seating preference?
User: Priya. Outside if possible.
```

The second provides everything at once:

```text
User: Book a table for two this Friday around seven under Priya, outside if possible.
```

The third provides information through correction and interruption:

```text
User: Can you book Thursday for two—
Assistant: What time on Thurs—
User: Sorry, Friday, not Thursday. Around seven. Outside if possible, under Priya.
```

All three express the same business meaning:

```text
operation: create reservation
date: resolved Friday
time preference: around 7 PM
party size: 2
seating: outdoor preferred
customer: Priya
```

Given the same availability and business conditions, all three requests should receive the same validation and confirmation checks, regardless of how the information arrived.

An LLM alone leaves the model responsible for reconstructing the interaction state and deciding which rules to apply on every turn. A dialog flow tied to a prescribed sequence has a different limitation: it controls what the assistant asks next, but callers can answer several questions at once, revise earlier information, or introduce another request.

The interaction harness must therefore govern the business requirements without prescribing the caller's conversational path. Different expressions and ordering must remain subject to the same rules and be able to converge on the same business agreement. This is the problem Interaction Closure addresses.

## Interaction Closure: Prepare for Every Input and Return to Business Logic

Voice is already an important channel between customers and businesses, and it may become more important as computing extends beyond screens. Users can express intent by speaking, without a keyboard, mouse, or visual navigation. Familiarity with spoken conversation creates an expectation that the system will follow them as they think aloud, correct themselves, and change direction.

Interaction Closure is a complete, business-defined interaction set that allows different conversational paths to converge on a permitted business agreement. Closure describes the completeness of that set: every input has a defined handling route from the current interaction state, including clarification, refusal, or fallback when no supported business act applies.

Natural-language expressions are effectively unlimited, but each business use case can define a finite set of dialog-act types: adding or revising information, satisfying requirements, invoking supported operations, clarifying, refusing, or handing control to a person. The set also includes a defined fallback for unconstrained conversation.

The LLM interprets an utterance as one or more proposed dialog acts. A business-defined state machine records accepted meaning in the accumulated interaction context, applies the relevant rules, and determines the next system act. The LLM renders that act as a natural response. This provides a fully connected invocation surface: applicable acts remain available across conversational states, while validation, dependencies, confirmation, and authorization govern their effects.

For example, if the caller changes the party size after availability has been checked, the state machine invalidates that check and requires a new one before booking can proceed.

> **The LLM interprets and renders language. Business logic governs consequential dialog acts.**

The fallback lets the LLM use common sense for unconstrained conversation, such as responding to a casual remark. It is a defined member of the interaction set, and it does not authorize consequential actions or bypass business rules. When a business request is ambiguous, unsupported, or interpreted with low confidence, the system routes it to clarification, refusal, or handoff as appropriate.

Business claims in any rendered response must remain consistent with the authorized system act and confirmed business state. For example, the assistant may say a reservation is confirmed only after fulfillment reports a successful booking. This is a requirement on response generation as well as action control; a state machine alone does not guarantee that generated language meets it.

This design supports three qualities of reliable interaction:

- **Consistency:** Equivalent meaning in the same business context receives the same governing rules.
- **Predictability:** The state machine explicitly defines permitted state changes and system dialog acts.
- **Robustness:** The LLM accommodates varied wording, compound requests, and corrections, with defined clarification or handoff when interpretation is uncertain.

An inbound phone agent also needs accurate speech processing, low latency, identity and security controls, reliable fulfillment workflows, observability, and human escalation. Interaction Closure supplies the interaction harness within that larger system, connecting open-ended language to governed business behavior.

## Let Users Control the Path Without Surrendering Business Logic

Workflow and Interaction Closure provide complementary harnesses for the LLM. Workflow governs the best-known path for executing agreed work. Interaction Closure governs a complete set of business interactions through which different conversational paths can converge on a permitted business agreement.

> **Workflow governs execution. Interaction Closure governs the interaction space.**

Users can speak in their own words, revise information, and change direction. The LLM interprets and responds, while business logic governs the interaction state, permitted actions, and authorization for fulfillment. Together, these harnesses connect natural conversation to dependable business execution.
