# Implement copilot meta API
Copilot meta API provides ways for copilot client to get the current state of user interaction in JSON, as well as 
execute actions encoded in JSON. Clearly, the actual definition of state and action and their semantics are 
application dependent, and need to be designed for the use cases that your copilot try to address.  so Before starting 
to develop the copilot, product manager and architect need to work together to design the data
structure needed to capture the state of user interaction, as well as a set of actions that your app can execute per 
user's request.

## Expose user interaction state
To help user in a context dependent fashion, copilot needs to be aware the current state of user interaction with 
your app, and use these state as the context for conversational interaction. Copilot can then suggest 
different action for the same command under different context, instead of requiring user to provide all the details 
all the time, thus providing a more natural experience.

For modern GUI application, the state of user interaction can be represented by a stack of pages, with each page
defined by a type, which defines what information it can capture from user, and instance of that type which 
represent the user input so far on that page.  

To provide the context dependent response to user's query, it is important that copilot client get the interaction
state that user are currently in your app. The state of user session captures  


This information can then be passed to copilot backend via OpenCUI SDK in form of **data 
scope** 
and the **context**. The data scope is essential for the dialog understanding(DU) component of the conversation  
application. App users can access the data within this scope by simply mentioning its name, allowing the DU to  
comprehend the intended data.  On the other hand, the context represents the information that conversation  
application needs to collect from the app users in order to identify their current state or page. 

#### Define data scope
As an assistant, copilot should share the same permissions as app users have. Therefore, determining the scope of  
information accessible to copilots is crucial. In other words, it involves defining the range of data that  can be 
provided to the copilot.

For instance, consider OpenCUI's copilot as an example. When users ask to modify a specific type, such as adding a 
response, the copilot needs to determine which type the users are referring to. To achieve this, data accessible to  
users must be passed to the DU so that it can recognize the mentioned type. Commonly mentioned names by app users  
in OpenCUI include "frame" (encompassing both frame and skill), "entity," and more. For **frontend developers**,  
you can refer to the [sending message](./opencui-sdk.md#send-messages) section to learn how to pass this information,
while **copilot builders**  can consult the guide on [building entities](./build-copilot.md#build-entities) to learn 
how to declare  the related data structure on the OpenCUI platform.

#### Define context
When app users request a feature, they may not be in the target state or on the intended page. For example,  they 
might want to add a specific type of slot, but the required library has not been imported into the current project.  
This indicates they are not in the target state, which entails importing the necessary library first. Similarly, if 
app users want to manage team members but are not on the page where all team members are listed, they are not on the target page.
Taking OpenCUI copilot as an example, the context primarily consists of the organization label, agent label,  agent 
type, page label, and so on. For **frontend developers**, you can refer to the [sending message](./opencui-sdk.
md#send-messages) section  to learn how to pass the context, while **copilot builders** can refer to [building 
PageContext frame](./build-copilot.md#build-a-frame) to learn how to declare the context on the OpenCUI platform.

### Outputs of conversational application
There are two ways to execute actions in a conversational application: implicit and explicit. In the implicit  
approach, when users express their requests, the copilot directly performs the corresponding actions on their  
behalf. In contrast, the explicit approach involves the copilot providing action buttons to app users, enabling  
them to execute the actions themselves. To maintain better control, we prioritize the implicit method for executing actions.
For example, let's consider OpenCUI platform. If users want to clone a chatbot, they can create a new chatbot by  
selecting the cloning option, which is an action. Additionally, if the users are not currently on the 
appropriate  page to perform this action, they need to direct to the right page first, which is also an action.  For 
**frontend developers**, you can refer to the [action](./opencui-sdk.md#action)  section to learn the data structure 
required,  while **copilot builders** can look up the [universal messages](https://opencui.io/reference/channels/universalmessage.html#json-representation) to grasp the basic format of actions. 
The "actionParams" field in the action date type and the "payload" field in universal messages need to be determined 
collaboratively between frontend developers and the copilot builders. Taking the previous example into consideration,
the "actionParams" ("payload") field for the clone action can be structured as follows:

```json
{
    "clickAction":"custom",
    "targetAction": {
        "action":"createProject",
        "projectType": "chatbot"
    }
}
```

## Build copilot
Once the events and actions are settled, copilot builders can start to build conversational applications in OpenCUI. 
For guidance on how to build a copilot, please refer to [How to build a copilot](./build-copilot.md).

## Integrate copilot with OpenCUI SDK
After settling the events and actions, frontend developers can start to integrate conversational applications with  
OpenCUI SDK. To learn how to integrate with SDK, please refer to [Building copilot web frontend with OpenCUI](.
/opencui-sdk.md).