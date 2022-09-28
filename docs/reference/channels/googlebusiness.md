# Google Business Message
[Business Messages](https://developers.google.com/business-communications/business-messages) is a mobile conversational channel that combines entry points on Google Maps, Search, and brand websites to create rich, asynchronous messaging experiences that delight customers and drive business results.

We are going to show here how to integrate Google Business Message into Framely and deploy the chatbot to a Framely hosted environment. For the private deployment, please consult systems in your organization.

Follow these steps to configure:
[[toc]]

## Set Up Google Business Message

#### Register As a Partner

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages).
2. Under **Business Messages**, click **Create partner account**.
3. Enter your partner information:

| Field           | Value                                                     |   
|:----------------|:----------------------------------------------------------|
| Your name       | Your full name                                            |
| Partner name    | Your organization's name                                  |
| Partner website | Your organization's website                               |
| Region          | The region you want to host the Business Messages service |

4. Click **Create**.

![register](/images/channelConfig/googlebusiness/register.png)

#### Create a service account

1. On the [Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages) home page, click **Partner account settings**.
2. In the left navigation, click **Service account**.
3. Click **Create key**, then click **Create**.

Your browser downloads the service account key. Store it in a secure location. You'll need this key later to deploy your chatbot.

![create-key](/images/channelConfig/googlebusiness/create-key.png)

#### Create a brand and an agent

1. Open the [Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages) and sign in with your Business Messages Google account.
2. Click **Create agent**.
3. Enter values for **Brand name** and **Agent name**.
4. Deselect **Enable the Business Messages Helper Bot**.
5. Click **Create agent**.

![create-agent](/images/channelConfig/googlebusiness/create-agent.png)

## Add Google Business Channel

1. On the Framely side, enter a chatbot that you want to deploy. click **Setting** > **Integrations**. In the **Channels** field, click **Add New** > **Google Business Message**.
2. The configuration information is as follows. Once you complete the configuration, click **SAVE**.
    - **Name**: You can set a name for your Google Business Message. This will be part of the Callback URL.
    - **Callback URL**: :clipboard: Copy this value. This will be used to configure the Google Business Message Webhook.  
    - **Client Token**: You can enter any private token you desire.:clipboard: Copy this value. This will be used to configure the Google Business Message Webhook. 
    - **Credential**: Enter the service account key you stored when [creating a service account](#create-a-service-account).
3. [Deploy](../platform/deployment.md) your chatbot.

![add-channel](/images/channelConfig/googlebusiness/add-channel.png)

## Set Your Webhook
A webhook is a partner-created HTTPS callback that specifies how your agent should respond to messages and events. You can set your webhook either at the partner level or at the agent level. Partner-level webhooks apply to every agent you maintain, while agent-level webhooks each apply to one individual agent.

### Set Your Partner-level Webhook
1. Open the [Account settings](https://business-communications.cloud.google.com/console/partner/settings?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages) in the Console.
2. Make sure the correct partner account is selected.
3. Set **Technical point of contact**.
4. For **Webhook**, click **Configure**.
    - For **Webhook endpoint URL**, paste the *callback URL* you copied when [adding Google Business channel](#add-google-business-channel).
    - For **Client token**, paste the *client token* you copied when [adding Google Business channel](#add-google-business-channel).
5. Click **Verify** and click **Save** in the top right corner.

![set-webhook](/images/channelConfig/googlebusiness/set-webhook.png)

### Set an Agent-level Webhook
1. Click your agent.
2. In the left navigation, click **Integrations**.
3. For **Webhook**, click **Configure**.
    - For **Webhook endpoint URL**, paste the *callback URL* you copied when [adding Google Business channel](#add-google-business-channel).
    - For **Client token**, paste the *client token* you copied when [adding Google Business channel](#add-google-business-channel).
4. Click **Verify**.

![set-webhook-agent](/images/channelConfig/googlebusiness/set-webhook-agent.png)

## Test Your Chatbot
1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages).
2. Under **Agent test URLs**, click the **Android button** or **iOS button**.
    - Scan the QR code with the corresponding mobile device, or click **Copy Android URL** or **Copy iOS URL** to copy the agent's test URL.
    - You can also click **Send** to send the URLs to your email address.
3. Open the URL in your mobile device. (iOS devices require the Google Maps app.) 
4. Now you can start a conversation with your chatbot. :tada:

![test](/images/channelConfig/googlebusiness/test.png)