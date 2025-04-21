


# Extensions in OpenCUI

## Introduction
OpenCUI is built on an open architecture, making it easy to extend functionality for chatbots. In particular, we allow the separation between interface and implementation, allowing conversational behavior to be defined on the interface while implementation can take various forms.

On OpenCUI, we abstract the interface for every built-in functionality that might have more than one implementation, such as channels and supports, and we encourage you to do the same for application-level functionalities like payment processing. We also support platform extenions so that we can provide a better developer experience, so that it is possible to use oauth to configure these runtime extensions. 

### Types of Extensions
There are two kinds of extensions:
- **External extensions**: Those that the OpenCUI platform does not have access to the source code for and can only be used with privately deployed chatbots.
- **Internal extensions**: Those that the OpenCUI platform does have access to the source code for (inside OpenCUI or Framely). Chatbots using Framely extensions cannot be exported for private deployment.

## Extension Development Process

### 1. Describe Interface
If the service interface you need doesn't exist yet, create a new one and describe its schema on the OpenCUI platform. System service interfaces are already created for you—if you want to connect to other channels, you can use them directly, like `io.opencui.channel.IChannel`.

To create a service interface:
1. Go to one of your orgs, select **Components** in left side menu, click **Create** on the right side.
2. In the **Create** popup window:
   - Enter a label for the service component
   - Turn on service toggle, enable service
   - No need to add language for interface definitions
   - Click **Save**
3. Head to the **Service** page, in the **Functions** section, click **Add** to declare function signatures
4. Review your changes and merge them into master

### 2. Generate Code Stub
In your service component, click **Export** on the second navigation bar to extract the generated Kotlin interface file.

### 3. Develop Extension
The standard way to develop an extension is within the extensions repository:
```
git clone https://github.com/opencui/extensions.git
```

OpenCUI uses Gradle as the build system, so you can create a subdirectory to host your subproject. Using the existing build system in this repo will make it easier to contribute your native provider back to the OpenCUI community.

Implement the service interface as a standard Kotlin project. Make sure your project builds successfully:
```
./gradlew your_project:build
```

### 4. Register Native Provider
Regardless of whether extensions are external or internal, you need to register their native provider on the platform so OpenCUI can generate the frontend code. For detailed instructions on registering native providers and a complete example, see the [Native Provider documentation](native.md).

### 5. Wire and Configure in Chatbot
After registering a native provider, you can use it in your chatbot. For detailed instructions on wiring and configuring native providers in chatbots, see the [Native Provider documentation](native.md#wire-and-configure).