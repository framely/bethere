# Focus on Services, Not Conversations
Businesses allocate resources to develop conversational user interface (CUI) applications like chatbots and agents because they aim to provide conversational access to their services. Conversational interfaces enable users to interact with the business through natural language, making the process more intuitive and accessible. 

In this context, a service represents a specific business capability or functionality that delivers value to users. These services are often implemented as a collection of Application Programming Interfaces (APIs), which are functions that can be invoked by other software systems. Triggering APIs involve the exchange of data between different systems or components, to make sure the data is well-formed, consistent, and interoperable, each API function is defined by a schema that specifies its input and output parameters along with their respective data types. 

To trigger a function, we need to prepare the values for each parameter according to their respective types, which amounts to creating values of a compound type. The goal of a conversational user interface (CUI) is thus to figure out which service the user prefers. For the type corresponding to that service API, the CUI needs to gather the user's preferences for each required attribute through conversation and create an object of that type. Of course, if a slot or parameter is also of a compound type, the CUI needs to be applied recursively. 

This perspecive suggests that we can develop CUI, both components and applications, in a schema-grounded approach, which can be defined in three steps:

### Declare schema
To create an object for a specific type conversationally, one must first declare the type on the platform. For input, OpenCUI supports both primitive types, such as entities, and compound types, such as frames and skills. It also supports one output type: dialog acts.

Entity: Represents a basic or primitive category of data that is captured during a conversation. It defines the data type and how that data can be used or understood by the system. For example, an entity could represent concepts like "date", "location", and "time".

 Both frames and skills are compound types, where one need to specify all their slots (a common term for attributes in the community) on the platform, including their labels and CUI types. A frame is only responsible for collecting user preferences per that type, a skill also comes with definition for what to do after the user's preferences are collected.

Instead of supporting only entity-typed slots, OpenCUI also supports slot of compound type, list-contained types, and even polymorphic types. By covering all the static types used by OpenAPI, it becomes easier to build CUI to interact with all the functions that can be defined by widely adopted OpenAPI.

### Attach interaction annotation
If the user does not provide all the necessary information at once or changes their mind during the conversation, the chatbot must guide the conversation to gather the required user preferences before invoking the service API. To maintain a consistent user experience across different languages, the chatbot needs to follow a language-independent, programmable interaction logic.

On OpenCUI, the interaction logic is implemented through a statechart, programmed by attaching annotations directly to the slots. For each primitive slot, its state machine-based interaction is defined by a couple of annotations, each corresponding to a specific question:
1. Whether this slot can be initialized and how, based on the information collected so far;
2. Whether we need to propmt user for this slot, what is the condition for doing that;
3. Whether and how a list of candidate values should be provided to the user for more efficient selection;
4. Whether the value supplied by the user is serviceable; for example, the showtime the user preferred might already be sold out.
5. Whether the user will have the opportunity to confirm the value they selected.

### Attach language annotation
If we want to communicate with the user via voice, we need automatic speech recognition (ASR) to convert sound waves into text and text-to-speech (TTS) to convert text back into sound. After this, two language-dependent translation tasks take place: converting the user's utterance into an event, which is a structured representation of semantics, and generating natural text for a dialog act.

While large language models (LLMs) are effective for these translation tasks, they are not infallible and can make mistakes. When errors occur in a production system, it is essential to have an efficient way to fix them quickly without undergoing a lengthy fine-tuning process.

OpenCUI adopts a retrieval-augmented in-context learning approach for dialog understanding. By attaching exemplar annotations to slots, these exemplars are added as in-context examples only when the conversation is about the specific slot, providing a quick and context-dependent way to correct understanding errors. Similarly, the same dialog act can be converted into different natural text variations using template annotations.

### Summary

CUI development is about creating instances of every type required by the backend service APIs that one wants to expose to the user. This insight suggests a schema-guided CUI development approach with the following steps:
1. Begin by deciding which services one wants to expose.
2. Declare the types required directly and indirectly by these APIs by specifying their schema.
3. Add interaction annotations to the slots of these types.
4. For each language one want support, add language annotation to the hosting interaction annotations.

Every declared type, an statechart implementation is generated based on its schemas and annotations. Thanks to these generated statecharts, it is trivial for OpenCUI runtime to keep track of the dialog state. Regardless which conversation path is followed to get to dialog state, given the state, the runtime will pick action based on event converted from user input, with goal to deliver the current service as soon as possible. This factorized way of defining the conversational logic, builder never have to worry about how conversation should flow globally. 

For every declared type, a statechart implementation is generated based on its schemas and annotations. Thanks to these generated statecharts, OpenCUI runtime can easily track the dialog state. Given state, regardless of which conversation path is taken to reach there, the runtime selects the next action based on events converted from user input, always aiming to deliver the intended service as quickly as possible. This factorized approach to defining conversational logic ensures that builders never have to worry about the conversation flows that grow exponentially.