


# Extensions in OpenCUI

OpenCUI has an open architecture designed to make it easy to add new functionality to chatbots. It achieves this by promoting a clear separation between interface and implementation. We abstract the interface for every built-in functionality that may have multiple implementations, such as channels and support systems. The same approach can be applied to application-level functionalities like payment processing. By defining conversational behavior based on stable interfaces, we can easily reuse the same conversational experience across different implementations.

On OpenCUI, the interface—and the conversational experience potentially defined on top of it—is called a module, while the implementation of a module is called a provider. If there is only one possible implementation, the module can be configured to include the implementation as well.


### Types of Extensions
There are two kinds of extensions:
- **External extensions**: Those that the OpenCUI platform does not have access to the source code for and can only be used with privately deployed chatbots.
- **Internal extensions**: Those that the OpenCUI platform does have access to the source code for (inside OpenCUI or Framely). Chatbots using Framely extensions cannot be exported for private deployment.


### Create module
If the service interface you need doesn't exist yet, create a new one and describe its schema on the OpenCUI platform. System service interfaces are already created for you—if you want to connect to other channels, you can use them directly, like `io.opencui.channel.IChannel`.

To create a service interface:
1. Go to one of your orgs, in the project list page, click **Create** on the top right, select module.
2. In the **Create** popup window:
   - Enter a label for the service module
   - Turn on service toggle, enable service
   - No need to add language for interface definitions
   - Click **Save**
3. Head to the **Service** page, in the **Functions** section, click **Add** to declare function signatures
4. Review your changes and merge them into master

