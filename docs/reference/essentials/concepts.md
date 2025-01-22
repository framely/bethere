# Type systems​
Triggering APIs involves the exchange of data between different systems or components. Defining these API functions with a type system, such as [OpenAPI](https://swagger.io/docs/specification/data-models/), ensures that the exchanged data is well-formed, consistent, and interoperable. 

By specifying a type for a slot, the function’s capability is limited or extended to process only data that conforms to that type. The types of parameters thus define the scope of what the function can handle. Additionally, features like polymorphism and generics can significantly expand a function’s scope by enabling it to work with multiple types in a controlled manner.

To invoke an API function conversationally, a chatbot must create an object of that function's type by interacting with users to capture their preferences. OpenCUI elevates existing OpenAPI data types to the CUI level by attaching dialog annotations to their schemas. The resulting CUI-level type can be thought of as a CUI component, as it not only defines what constitutes a valid instance of the type but also how to create such an instance through conversation. These CUI types can then be used as slot types within larger CUI types, enabling the development of increasingly complex conversational behaviors.

Instead of supporting only primitive types and simple compound types with primitive-typed slots, OpenCUI supports generic type lists, polymorphism, and nested compound types, making it easy to build conversational interfaces for any OpenAPI-definable service. Specifically, OpenCUI allows the definition of three input types—entities, frames, and skills—and one output type: dialog act.

### Entities​
An entity is a primitive type at CUI level and serves as the basic building block for more complex data types. Examples for entity includes movie title, time, etc. 

To recognize a value from conversation, an entity requires a recognizer to extract mentions from user utterance and normalize them into a value. A common type of recognizer is the list recognizer, where an entity is defined by multiple entity entries, each associated with a set of expressions that serve as triggers. When a user mentions one of these expressions, it is recognized and interpreted as the user's preference for the corresponding entity entry. Other types of recognizers include regex-based and LLM-based approaches.

To model real-world *is-a* relationships, OpenCUI allows entities to have subtypes, enabling hierarchical categorization. For example, cell phone models can be categorized into feature phones and smartphones, with smartphones further divided into iPhones and Android phones.

### Skills​
A  skill is essentially a function that a user can access through conversations. As a CUI data type for functions, it is self-contained conversational component that delivers some functionality to a user. A skill does the following things:

1. Collect what the user wants through slot filling. The slots can be add at schema level.
2. Invoke functions using the collected slot value as an input parameter. The invoked function can be a native function defined in the current skill, or a function from the service slot.
3. Verbalize the service result and render it for the channel in the response section.

At the language level, skills can be expressed mainly by verb phrases or full sentences. When expressed in a full sentence, the subject needs to be in the first person. Examples of such utterances include: "Book me a table for two for Sunday evening" or "I would like to make a reservation on Sunday". One can add exemplar to the skills, and simply redeploy chatbot to hot fix the dialog understanding issues.

On OpenCUI, all skills are implementations of a special runtime interface IIntent, thanks to the built-in polymorphism support. Furthermore, every chatbot is started with a skill Main that has a slot of `List<IIntent>` type. 

### Frames​
In OpenCUI, a *Frame* is a user-defined compound type that supports composition and polymorphism at the CUI level. Frames are typically used as parameter types for functions at the schema level or as attribute types for constructing more complex frames.  

With inheritance, OpenCUI enables natural conversational interactions. For example, a conversation like *"What symptoms do you have?"* can be modeled by defining an interface *Symptom* frame along with multiple concrete frames, each representing a specific symptom. Since each concrete frame can have distinct interaction logic, filling an interface slot dynamically adapts to provide the appropriate conversational experience.  

At the language level, a *Frame* represents objects with properties and is typically expressed as a noun phrase, such as *"large, spicy noodle."* Additionally, by adding exemplars to skills and redeploying the chatbot, builders can quickly address and refine dialog understanding issues.

### Multi-value

A slot can be declared as *multi-valued*, meaning it can hold multiple instances of a given type. At the schema level, this is represented as `List<T>`.  

When a slot is multi-valued, OpenCUI automatically prompts the user with *"Do you want more of $T?"* after an instance of `T` is created. If the user responds affirmatively, the conversation for type `T` repeats to collect another instance, allowing for a flexible and natural way to gather multiple values.

### Dialog acts​

A *Dialog Act* is another CUI data type in OpenCUI, designed to map structured meaning back to natural language. OpenCUI supports various dialog acts, such as *Inform* and *Notify*.  

To control how a dialog act is verbalized, templates can be added to specify its exact phrasing. These templates can also serve as training examples, enabling the system to generate verbalizations automatically in the future.