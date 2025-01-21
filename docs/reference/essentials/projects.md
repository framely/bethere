# Projects
OpenCUI is a conversational user interface (CUI) platform that allows builders, including designers and developers, to create, test, and manage CUI components or applications, commonly referred to as chatbots, agents, assistants, or copilots. The CUI development on OpenCUI are structured as projects, which may include chatbots, modules, providers, and knowledge bases. The diagram below illustrates how these components typically interact to provide a smooth conversational experience.

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

