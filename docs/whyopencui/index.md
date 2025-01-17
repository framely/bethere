# Why OpenCUI
Applications with a conversational user interface (CUI apps), such as chatbots, agents or copilots, are widely recognized as powerful tools for delivering personalized service throughout the customer journey—before, during, and after sales. To build these applications effectively, CUI platforms must provide builders with:
- control, to ensure that resulting CUI apps can achieve business objectives;
- coverage, to avoid bad experience with responses like "Sorry, I don't get that," 
- low costs, to make CUI apps viable for a broader range of use cases.

## The problem with existing approaches
CUI apps, with chatbots as an example, can typically be built in three layers: the backend layer, the interaction logic layer, and finally, the language understanding and generation layer. The backend is typically shared with web and mobile apps to ensure a seamless experience, and large language models (LLMs) have become the standard solution for both language understanding and generation. The main difference between these CUI platforms then lies in how the interaction logic is designed and implemented. Most CUI platforms fall into one of two categories: flow-based or LLM-based. Unfortunately, both have their drawbacks.

### Flow-based: control but not coverage

Flowcharts are a standard tool for designing graphical user interfaces (GUIs) and have also been widely adopted for creating conversational user interfaces (CUIs). In a flow-based approach, interactions are typically defined as turn-by-turn sequences from start to end, giving developers complete control over the chatbot's response, thus makes it easier for the chatbot to achieve business objectives.

When an interaction falls outside of the predefined flows, the chatbot simply doesn’t know what to do. This forces developers into a difficult trade-off: either attempt to cover an exponentially increasing number of conversational pathways, leading to skyrocketing costs, or risk delivering a subpar user experience by neglecting critical conversational pathways.

### LLM-based: coverage but lack control
By simply describing what you want your chatbot to do and providing a list of functions, large language models (LLMs), particularly those with function-calling capabilities, can generate natural responses for a wide range of user inputs, using the appropriate functions as needed.

However, this broad coverage comes at the cost of control. LLMs are not always perfect at following natural language instructions. While it’s relatively straightforward to align an LLM-based chatbot with high-level design goals, maintaining consistency in finer details can be challenging. Moreover, when something goes wrong, there is often no clear or reliable way to diagnose and resolve the issue effectively.

## Towards Full-Stack CUI component 
State machines provide a more concise, factorized conceptual model for user interactions. With carefully defined states, events, and actions that conditionally trigger state transitions or emit responses, a state machine can efficiently model complex user interactions without enumerating every possible pathway, thus offering both complete control and coverage. However, determining the correct states and transitions from conversations can be daunting and error-prone due to the complexity of language and the inherent openness of conversations.

### Type-grounded statechart construction
To provide a service, chatbots simply need to collect the information required to trigger the corresponding API through conversation. In software engineering terms, this amounts to construct an object for the corresponding function type, including values for all its parameters (or slots). For example, to sell a movie ticket to a user, we need to build the following object:
``` json
{ 
  "@class":"BuyMovieTicket",
  "movieTitle": "Inception",
  "showDate": "2025-01-10",
  "showTime": "7:00 PM",
  "numberOfTickets": 2,
  "seatPreference": "Middle Row"
}
```

Instead of manually designing the state space, at OpenCUI, we advocate for a systematic, type-grounded process. For primitive-typed slots, the interaction required to fill that slot can be roughly modeled by a state machine with the following states:
![interaction state machine for primitive typed slot](/images/essentials/statemachine.png)
- INIT: In this state, actions can be used to initialize the slot using values from the conversation history or the results of a function call. If there is a candidate value, we transit to CHECK state, otherwise, we transit to ASK state.
- ASK: In this state, we emit a prompt asking the user to provide a value for the slot. And events converted fom user input can trigger the transition to CHECK state.
- CHECK: In this state, the proposed value is verified, for example via an API call, to ensure it is serviceable. If checked out, move to CONFIRMATION state, otherwise, back to ASK.
- CONFIRMATION:  In this state, the user is provided with an opportunity to confirm their choice. When such action is defined, ff user confirms, we move the next state, otherwise back to ASK.

For slots with a compound data type, like "BuyMovieTicket," we need to use a statechart to model the interaction. A statechart, essentially a compound state machine, extends the basic state machine with the support for parallel and nested states. For example, to fill a slot of type "BuyMovieTicket," the interaction can be modeled with a statechart that consists of multiple parallel state machines—one for each primitive-typed slot, such as "movieTitle" or "numberOfTickets." The statechart can be nested into bigger statechart, thus make it possible to build complex behavior by composing simple building blocks.
![interaction state machine for compound typed slot](/images/essentials/statechart.png)

By default, the statechart follows a depth-first scheduling. However, its actions—defining both transitions and emissions, and thus defining every aspect of the interaction—can be customized through corresponding annotations attached to the respective states. For example, the CHECK state can be annotated with a no-op action or with a conditional transition action that moves the state back to the ASK state if the value provided by the user is deemed unserviceable. The guards on the actions, or conditions, further enhance the flexibility of this state-based modeling.

### Context Dependent Understanding
Dialog understanding was solved with shallow models. These models required large, labeled datasets, so building these dialog understanding modules can be very labor-intensive and time-consuming. Today, with the advent of large language models (LLMs), it is possible to achieve reasonable understanding accuracy under few-shot or even zero-shot settings.

To facilitate easy correction of understanding mistakes, we adopt an agentic approach by breaking down dialog understanding into smaller tasks, such as intent detection, slot filling, and yes/no understanding. Each task is framed as an in-context learning problem, with in-context examples dynamically retrieved based on the user's input. If errors occur in understanding, the problematic user input and its correct interpretation are added to the retrieval index. This ensures that similar inputs in the future are processed with more relevant in-context examples, eliminating the need for frequent fine-tuning. Additionally, these examples are attached to a specific context (e.g., a state) as language-level annotations, ensuring they only affect dialog understanding within the same context.


### Never Build Chatbot from Scratch
The component-based approach, characterized by open interfaces and encapsulated implementations, was designed to simplify the development of complex systems. While it has become a staple in modern GUI development, its adoption in CUI development—despite the greater complexity of conversational interfaces—has been notably absent, until now.

OpenCUI aims to transform the paradigm of CUI development by introducing CUI components as the core building blocks. Each component is defined by a type and its constituent slots at the schema level, accompanied by an automatically generated statechart backbone tailored to that type. This backbone can be customized using annotations that define both interaction-level behaviors (e.g., conditional actions for emissions and transitions) and language-level behaviors (e.g., examples for in-context learning). Along with the ability to interact with APIs natively at the schema level, these features collectively define how the chatbot should systematically collects values for all slots of a given type through conversation.

In addition to being a platform for building conversational components, OpenCUI is also a marketplace for buying and selling them. For builders—including both conversational designers and chatbot developers—OpenCUI enables them to create and sell world-class components that can be reused across a wide range of CUI applications. For businesses, instead of reinventing the wheel, they can integrate and customize these proven, well-tested components on the OpenCUI platform. This accelerates CUI app delivery, reduces development and maintenance costs, and enhances both quality and user experience.

With OpenCUI, there’s no reason to build a chatbot from scratch.