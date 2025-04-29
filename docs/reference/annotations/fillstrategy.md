# Prompting strategy

The prompting strategy, also known as asking strategy, annotation determines whether to prompt the user for a slot, under what conditions, and how other dialog annotations should work together to guide the interaction.

A slot is a piece of information that is needed to complete a task. For example, in a restaurant reservation service, the slots might be `date`, `time`, and `number of guests`. When you set the fill strategy to a slot and it is configured to be filled by user interaction, you can configure the dialog annotations based on your business logic. The OpenCUI framework will use a five-stage slot filling process to help you interact with users and converge on a servable request.

The best fill strategy to use will depend on the specific task and your business needs. By understanding the different fill strategies, you can choose the one that is most likely to result in a successful interaction.

Here is a more detailed explanation of each fill strategy.

## Never ask
Never ask strategy is a good choice for scenarios where chatbot can specify it value based on the current state of the converation or some API call. 
For example, if a chatbot is connected to a database of customer information, it can use the direct fill strategy to fill the slot for the user's name. The chatbot would not need to ask the user for their name, as it can simply retrieve the name from the database.

## Always ask

Always ask strategy is a good choice for scenarios where users are required to provide essential information. It is a robust strategy, meaning that if the user does not provide the information, the chatbot will continue to ask until it gets what it needs. The always ask strategy can be helpful in ensuring that the chatbot has all of the information it needs to complete the service.

**When you set the fill strategy to always ask, it is important to provide at least one prompt.** **Prompts** are questions that can be used to ask users for information. They should be relevant to the information that you are asking for, clear and concise, and easy for the user to understand. 

For example, if you are creating a chatbot that helps users book a table at a restaurant, you might use the following prompt: *"What time would you like to book your table?"* If you do not provide any prompts, the chatbot will not be able to ask the user for the information that you need. This could lead to the conversation getting stuck, or it could result in the chatbot providing incorrect information to the user.

::: details More detailed explanation of how to set the Always ask strategy
![Always ask strategy](/images/annotation/fillstrategy/always_ask.png)
1. Go to the **slot detail page**, and select the **Annotation** tab.
2. In the **Fill strategy** section, select **Always ask**.
3. In the **Prompt** field, enter the question that can be used to ask users for information. 
:::

## Conditional

Conditional strategy is a good choice for scenarios where users are required to provide essential information, but only under specific conditions. It is not as robust as the always ask strategy, as **it needs to meet the conditions** before asking the user for information. The conditional strategy can be helpful in ensuring that the chatbot only asks for information that is relevant to the task at hand.

**When you set the fill strategy to conditional, you should specify the condition and include at least one prompt.** The **condition** is an expression that determines whether or not the chatbot should ask the user. 

For example, if you are creating a chatbot that helps users book a table at a restaurant, you might use the conditional strategy for the slot that stores the name of the event. The condition could be that the number of guests is greater than 10:

```kotlin
// If the user wants to book a table for more than 10 people, ask for the name of the event
numberOfGuest > 10
```

If the condition is met, the chatbot would ask the user for the name of the event. If the condition is not met, the chatbot would not ask the user for the name of the event.

::: details More detailed explanation of how to set the Conditional strategy
![Conditional strategy](/images/annotation/fillstrategy/conditional.png)
1. Go to the **slot detail page**, and select the **Annotation** tab.
2. In the **Fill strategy** section, select **Conditional**.
3. In the **Condition** field, enter the expression that determines whether or not the chatbot should ask. The expression can be a simple comparison, such as `numberOfGuests > 10`, or it can be a more complex expression, such as `numberOfGuests > 10 && timeOfDay == "evening"`.
4. In the **Prompt** field, enter the question that can be used to ask users for information. 
:::


## User mention first

User mention first, or recover only strategy is a way to protect user privacy and make chatbots more user-friendly. It means that the chatbot will not ask the user for information unless the user specifically provides it. 

For example, if a business does not need to know the user's age, they can use the Recover only strategy. This means that the chatbot will not ask the user for their age unless the user says something like *"I am 25 years old"*.

**When you set the fill strategy to recover only, you should fill in at least one prompt.** This is to ensure that the chatbot can handle unexpected input from the user. The prompt will only be used if the chatbot cannot understand the user's input or if the slot value fails the value check.

::: details More detailed explanation of how to set the Recover only strategy
![Recover only strategy](/images/annotation/fillstrategy/recover_only.png)
1. Go to the **slot detail page**, and select the **Annotation** tab.
2. In the **Fill strategy** section, select **Recover only**.
3. In the **Prompt** field, enter the question that can be used to ask users for information. 
:::

The Recover only strategy can be useful for the following use cases:

- **When the business has a default behavior or choice that could satisfy most users.** If the user does not provide any information, the chatbot will use the default behavior or choice. However, if the user does provide information, the chatbot will use that information instead.

- **When the business has a behavior or choice that they do not want to promote, but they still need to handle if it is required.** For example, a business may not want to promote a specific product, but they still need to handle it if the user asks about it.

# Fill with natural language
A slot can always be filled with structured event or by code directly, but it can also be configured to be filled with natural language using dialog understanding module, particularly is the slot is used to capture user's perference.

# Blocking until filled
A slot can be filled synchrounously or asynchrounously. When **Blocking until filled" is turned on, chatbot will wait for answer from user or some system event. For example, if a chatbot is trying to book a flight, it can use the external event strategy to wait for the user to complete the payment process. Once the payment is complete, the chatbot will receive an event from the payment processor and then fill the slot with the flight information. When it is turned off, chatbot can keep this topic on hold and move onto some other topic.
