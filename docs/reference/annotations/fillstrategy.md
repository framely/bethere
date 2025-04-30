# Fill strategy
There are three high-level decisions that impact how slots are filled:

Should the user be prompted if the slot is missing a value?

Can the slot be filled using natural language?

Should the conversation be blocked until the slot is filled?

# Prompting strategy

The prompting strategy, also known as asking strategy, annotation determines whether to prompt the user for a slot, under what conditions, and how other dialog annotations should work together to guide the interaction.

A slot is a piece of information that is needed to complete a task. For example, in a restaurant reservation service, the slots might be `date`, `time`, and `number of guests`. When you set the fill strategy to a slot and it is configured to be filled by user interaction, you can configure the dialog annotations based on your business logic. The OpenCUI framework will use a five-stage slot filling process to help you interact with users and converge on a servable request.

The best fill strategy to use will depend on the specific task and your business needs. By understanding the different fill strategies, you can choose the one that is most likely to result in a successful interaction.

Here is a more detailed explanation of each fill strategy.

### Never ask
Never ask strategy is a good choice for scenarios where chatbot can specify it value based on the current state of the converation or some API call. 
For example, if a chatbot is connected to a database of customer information, it can use the direct fill strategy to fill the slot for the user's name. The chatbot would not need to ask the user for their name, as it can simply retrieve the name from the database.

### Always ask

Always ask strategy is a good choice for scenarios where users are required to provide essential information. It is a robust strategy, meaning that if the user does not provide the information, the chatbot will continue to ask until it gets what it needs. The always ask strategy can be helpful in ensuring that the chatbot has all of the information it needs to complete the service.


For example, if you are creating a chatbot that helps users book a table at a restaurant, you might use the following prompt: *"What time would you like to book your table?"* If you do not provide any prompts, the chatbot will not be able to ask the user for the information that you need. This could lead to the conversation getting stuck, or it could result in the chatbot providing incorrect information to the user.

### Conditional

Conditional strategy is a good choice for scenarios where users are required to provide essential information, but only under specific conditions. It is not as robust as the always ask strategy, as **it needs to meet the conditions** before asking the user for information. The conditional strategy can be helpful in ensuring that the chatbot only asks for information that is relevant to the task at hand.

The **condition** is an expression that determines whether or not the chatbot should ask the user. 
```kotlin
// If the user wants to book a table for more than 10 people, ask for the name of the event
numberOfGuest > 10
```



### User mention first

User mention first, or recover only strategy is a way to protect user privacy and make chatbots more user-friendly. It means that the chatbot will not ask the user for information unless the user specifically mentioned it first. This strategy can be useful for the following use cases:

- **When the business has a default behavior or choice that could satisfy most users.** If the user does not provide any information, the chatbot will use the default behavior or choice. However, if the user does provide information, the chatbot will use that information instead.

- **When the business has a behavior or choice that they do not want to promote, but they still need to handle if it is required.** For example, a business may not want to promote a specific product, but they still need to handle it if the user asks about it.

## Fill with natural language
A slot can always be filled using a structured event or directly through code. However, it can also be configured to be filled using natural language, processed by the dialogue understanding module—particularly when the slot is intended to capture the user's preferences.

## Blocking until filled
A slot can be filled either synchronously or asynchronously. When **Blocking until filled** is turned on, the chatbot will wait for an answer from the user or for a system event. For example, if a chatbot is booking a flight, it can use an external event strategy to wait for the user to complete the payment process. Once the payment is complete, the chatbot receives an event from the payment processor and then fills the slot with the flight information. When blocking is turned off, the chatbot can put this topic on hold and move on to another one.

