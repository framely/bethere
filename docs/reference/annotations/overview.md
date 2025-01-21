# Overview
The primary responsibility of a conversational user interface (CUI) is to create an instance of a function type through conversation so that the function can be triggered, allowing the chatbot to deliver the desired functionality for the user. For composite types, each of their slots (parameters for a function type and attributes for user-defined types) should be filled in accordance with the business logic and conditions. For instance, the chatbot should only ask whether the user wants to see the IMAX version if it is available for the chosen movie. Similarly, if Star Wars is only showing at 8:00 pm, the user should not be able to choose the 6:00 pm showing for that particular movie.

Given a type, a well-designed statechart—with purposefully chosen states, events, and actions for both emissions and transitions—can efficiently manage any conversation flow while providing full control over how an instance of that type is created conversationally. To come up a such good design, OpenCUI offers a systematic approach to translate business requirements and constraints into a statechart for a type, using dialog annotations attached to its schema.

## Five stages of slot filling
The statechart for a compound type can be broken down into individual statecharts for its slots. When a slot is of a primitive type, the process of creating an instance for that slot (known as slot filling)—is governed by state machines with 5 states: 
1. [Initialization](./init.md): In this state, the system attempts to fill the slots based on business logic first.
2. [Ask](./templateandexemplar.md#prompt): In this state, a SlotRequest dialog act can be used to prompt the user for a choice for the given slot.
3. [Value recommendation](./valuerec.md): In this state, a list of candidates based on the business production system is provided for users to select from. This ensures the user choices are both relevant and servable, avoiding wasted turns due to unservable user selections.
4. [Value check](./valuecheck.md): Examines the proposed value to determine if it is servable based on business rules.
5. [Confirmation](./confirmation.md): Gives users a second chance to verify the proposed value.

By systematically deciding the actions on these states with annotations, builders can build an effective CUI interaction logic for creating instance of this slot. 

## Advanced annotations
Slot-level annotations are designed for common use cases, prioritizing convenience over flexibility. The underlying mechanism of type-based conversational user interfaces, including the five stages of slot filling, is implemented as a [statecharts](https://statecharts.dev/), also known as composite state machines. If certain CUI behaviors cannot be defined by these high-level annotations, builders can leverge [state transitions](./transition.md) for finer control. State transitions defines arbitrary actions based on the current state, user input, and any custom conditions defined on the type. 

## Two layers
Dialog annotations are structured into two layers: interaction and language. Many annotations have an interaction-layer or language-independent interpretation, such as the Fill Strategy, which dictates how the bot should fill a given slot. Additionally, dialog annotations may include language-dependent components, such as templates and expression exemplars. Templates define how a dialog act can be expressed in natural language, while expression exemplars illustrate how user utterances should be mapped into event, a structured representation of meaning.