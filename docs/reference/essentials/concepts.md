# Key concept in OpenCUI
OpenCUI is a conversational user interface (CUI) platform that enables builders, including designers and developers to build, test, and operate CUI components or application, also known as chatbots, agents, assitant, or copilots. Here are the key concepts in OpenCUI. 

## Projects
Projects are the fundamental unit of work in OpenCUI. Builders can choose to make their projects public or private. There are different types of projects: chatbots, modules, providers and knowledge base. The following diagram illustrates how these components typically work together to deliver a conversational experience:

![relationship](/images/guide/use-service/relationship.png)

### Modules
Modules are reusable conversational components. For example, a CUI date picker is a simple module that gets the user's preferred date. Modules can be combined to form larger modules for more complex use cases, or they can be imported into the chatbot to add new conversational functionalities.

A module usually defined on top of a service (not always). A service is simply an interface erepresents a capability, typically exposed as a set of API functions. Services (also known as interface) decouple the CUI from the actual capability provider (or implementation).

### Providers
A service can have one or more providers that link the chatbot to its backend implementation, enabling it to perform its functions. Providers can be shared across different chatbots within the same organization, promoting reusability. Thanks to OpenCUI's open architecture design, it supports a variety of provider types. Some examples include:
1. PostgreSQL (OpenCUI-hosted): A relational database provider for managing structured data.
2. RESTful Providers: For connecting to web services and APIs using the REST architecture.
3. Native Providers: Allowing for integration with backend systems using kotlin code.

### Chatbots
A chatbot is an application that delivers services to users through a conversational user interface (CUI), it is also known as agents, copilots, assistant etc. Chatbots, or CUI applications, are typically rely on imported modules for the CUI capabilities, so that builder does not need to start from scratch. 

### Knowledge
Not every thing is stored in the structured representation, like APIs or databases. Sometime, useful information can be stored in unstrcutured format. Knowledge is simply a collection of articles or documents that the system can reference to answer user queries. The knowledge base can be populated with structured information that the agent can search to provide responses. These information can be surfaced to users using RAG system.


## Type systems​
Services can be described by their schema, using description languages such as OpenAPI. Such language requires a type system because APIs involve the exchange of data between different systems or components, and data types provide a way to ensure that the exchanged data is well-formed, consistent, and interoperable. OpenCUI's type system supports not only primitive types and enums, but also lists and user-defined types with polymorphism support, making it easy to build conversational interfaces for arbitrary services.

To invoke a function through conversations, we need to create an object of that function's type. To do this, OpenCUI allows you to define CUI types (also known as components), such as skills (think of functions), frames (needed by their parameters), and entities (primitive types), in three steps. First, declare the type and its component, which will be mapped to the hosting language's data types (currently Java/Kotlin) so that they can be used to invoke service functions. Second, use dialog annotations to define interaction logic. Lastly, use exemplars and templates to control how natural text is converted to structured representation, and vice versa.

### Skills​
Generally, a skill is essentially a function that a user can access through conversations. As a CUI data type for functions, it is designed to define a self-contained conversational component that delivers some functionality to a user. This means that all three aspects of conversational service delivery need to be defined on top of the corresponding data type:

Collect what the user wants through slot filling. You can add slots in the Slots section of a skill.
Invoke functions using the collected slot value as an input parameter. The invoked function can be a native function defined in the current skill, or a function from the slot of the current skill, in a nested sense like slot.function(). You can add service slots in the Services section of a skill.
Verbalize the service result and render it in the channel.
At the language level, skills can be expressed mainly by verb phrases or full sentences. When expressed in a full sentence, the subject needs to be in the first person. Examples of such utterances include: "Book me a table for two for Sunday evening" or "I would like to make a reservation on Sunday".

### Frames​
In OpenCUI, a frame is a standard object-oriented class type with support for composition and polymorphism behaviors. Frames typically map to parameter types for your function at schema level.

With inheritance, we can easily support conversations like "What symptoms do you have?" by defining an interface symptom frame and multiple concrete frames, each for an actual symptom. Since each concrete frame can have different interaction logic, when we try to fill an interface Frame slot, we can naturally get the conversational experience we need.

At the language level, a Frame represents objects with properties and is typically expressed in a noun phrase such as "large, spicy noodle".


### Entities​
Entity is your primitive type in OpenCUI, and it is basic building block for complex data type. Entity type can have subtypes. For example, cell phone models could be partitioned into feature phone and smartphone, and smartphone can be further partitioned to iPhone and android phones.

For each entity type, there are many entity entries. Each entity entry provides a set of expressions that are considered to be trigger for that entry, or when one of expression is mentioned, we consider user prefer the corresponding entry.

### Dialog acts​
Dialog act is another CUI data type in OpenCUI and is designed to help map structured meaning back to natural text.


## Annotations
After these types are defined at schema level, builder can add annotation on top of it to control the every aspect of this component. An example will be what if a user did not specify a value for a required slot, how do we prompt them in a given language.

### Dialog annotations
In cases where users do not provide all the information needed in a single utterance, you need to design a conversation to help chatbot get the user's preference for a given option. This can be done in OpenCUI by adding various dialog annotations. 

Dialog annotations can be defined both on slot and type level. Slot level annotations defines how individual slot can be filled. This includes whether the slot can take multiple values, whether it needs confirmation. For frame slot, whether the polymorphism is allowed. Type level annotations are related to multi-slot filling where values for slots need to collectively make business sense. This includes annotations like value recommendations and value check. Value recommendation provides a user with candidate list so that they can pick one from that instead of input something that is invalid. Value check makes sure agent catch user input error as early as possible so that conversation can be efficient. Dialog annotations are naturally separated into interaction related and language related, each can be handled by different set of people. This makes multiple language support easy.

### Backend annotations
OpenCUI allow you to build hosted SQL provider declaratively using annotations and SQL. 
- Declare all data types first required the service APIs and their implementation helper functions;
- Add storage annotation to help OpenCUI infer corresponding table schema;
- Use SQL to implement the service APIs; 
- Add backoffice annotation to define admin interface, including look and feel, and input mode. 

Once you have decided on the data frame that you want to persist, you can simply turn on the storage annotation for that frame. When the storage annotation is turned on for a frame, OpenCUI will automatically create a corresponding table with each slot mapped to a column in the hosting database. You can precisely control how these columns are created, using annotations such as:
- Not Null: indicates whether a column can host a null value;
- Default Value: defines the default value for the column;
- Unique: indicates whether a value in the column needs to be unique and can potentially serve as a key.

The data in these tables also needs to be accessed and manipulated by your operations team. For the SQL provider, they can do so through a web interface called "back office". The back office is automatically created based on the back office annotation, and its user experience can be controlled by annotations such as:
- Sortable: indicating whether one can sort the entire table by the given column.
- Input Mode: determining whether a dropdown menu can be used for inputting this column and specifying the available choices.