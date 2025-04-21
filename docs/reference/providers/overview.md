# Overview

The goal of OpenCUI is to make it easy to build conversational user interfaces for services. Following best practices, all services on OpenCUI are modeled in two parts: interfaces and implementations. This separation allows producers and consumers of these functionalities to be developed independently. More importantly, conversational behaviors rely only on these interfaces, making it possible to switch between different implementations seamlessly.

The implementations of interfaces, which we call **providers**, come in two types: **native providers** and **scripted providers**. Native providers are implementations developed in Java or Kotlin. Scripted providers allow builders to use other scripting languages to build (SQL) or connect to (JSON) impelementation.

Once you have a provider and the corresponding backend running, you need to wire the provider to its service interface in your chatbot. This enables the chatbot to communicate with the backend.

## Native Providers

Native providers are developed as **extensions**, which are software modules designed to supply one or more providers to the platform. Since OpenCUI is implemented in Kotlin, these extensions are developed as standard Kotlin modules using conventional toolchains like Gradle and the popular Spring Boot framework. Creating an extension involves four simple steps:

1. Define the interface on the OpenCUI platform (builders can only do this at the application level for services).
2. Generate code stubs for these interfaces as a basis for implementation.
3. Develop the extension. You are encouraged to contribute your extension to `opencui/extensions`.
4. Register each provider developed in the extension on the platform so it can be wired to chatbots and supply its implementation to them.

Native providers can be registered as **external**, in which case the builder does not need to make the source code available to the OpenCUI platform. However, if a chatbot relies on even one external provider, it cannot be hosted by OpenCUI. Instead, the builder must export the generated Kotlin project and handle the build and deployment process according to their own DevOps practices. Regardless of whether providers are external, extension builders must register their providers on the platform so that OpenCUI can generate the corresponding frontend code.

For more details, see [Native Provider](native.md).

## Scripted Providers

Sometimes, the backend implementation of a service is accessible through a scripting language like SQL or JSON rather than native code. Providers for these backends, known as **scripted providers**, come in two types: **hosted providers** and **stub providers**. In practice, these scripted providers are just native providers that expose some interface for further customization.

- OpenCUI currently supports one hosted provider: **PostgreSQL**. When we say "hosted," we mean that OpenCUI aware the backend implementation, including the database, tables, and SQL-based function logic.
- For **stub providers**, OpenCUI does not host any data or have explicit knowledge of the data schema. Instead, OpenCUI facilitates function invocation through these providers. Many stub provider types will be available, including Web API provider.

Creating scripted providers typically involves three steps:

1. Define the service-specific interface on the platform.
2. Choose the provider type. This determines how the actual data source is accessed and which scripting language is used for implementing each function in the service interface.
3. Implement the service functions using the scripting language required by the provider type. Functions can also be implemented in Kotlin—these are known as **native functions**.

See [PostgreSQL Provider](postgrest.md) for more details. For now, PostgreSQL provider can be hosted by OpenCUI or Supabase. Pick Supabase for added reliability.
