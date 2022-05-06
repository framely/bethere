# Overview

We understand no matter how well you build your chatbot, there will always be user requests that is beyond the design and implementation scope, and we need to handoff the conversation to human support team. Support is a software where human agent can handle the conversation when bot failed or upon user requirement. Framely understand that your human support team already have their favorite support software, so instead of reinventing wheels, Framely is designed to play well with others when it comes to support system, as long as they can provide some basic APIs. 


## Two Cooperation Modes
There are two different ways support system can work with chatbot, internal mode and external mode. In the internal mode, both channels and bots are managed by support systems, and when either bot or user indicate that they want to talk to human agent, then support system will route the conversation from bot to human agent, and let human agent take over. In theory, Framely should be able to work with any support system that is design to work with third part bot solution, by simply implementing the hooks required by given support system.

In the external mode, messages are coming from the channel attached to the bot, and bot appear to be a normal agent on the support system, and bot is responsible for requesting routing the messages via exposed APIs on the support side. For this mode to work, we need to support system expose the APIs conforming to the following semantics. 

### Support API Requirement for external mode
To reduce the effort level on the user side, it is important that we route user conversation to the most relevant support team/department. This translates to support of notion of team/department on the support system side, where team is a group of human agent that are qualified to solve problem of certain topic.
1. We can create a new user on the support side.
2. We can create a conversation to store the history/context of the conversation in case human agent need to take over. 
3. We can send messages from user and bot to this conversation before we hand off to human agent.
4. Support system support more than one human agent teams, each is responsible for something.
5. We can transfer the conversation from bot to specified team by department statically or dynamically, potentially based on , so that user can be served effectively. 
6. After human agent is done with service, next time user will start with interacting bot again. Simply invoke CloseSession should be enough.  

In the Framely hosted environment, we mainly interested in the external mode, currently we provide the great open source support system chatwoot as the only option, but this can change when someone starts to build the connection with other system and open source it. 


### Intent Based Routing under external mode
To reduce the effort level on the user side, we support the conversation routing based on user intent. Essentially, user intents are grouped into multiple set, each maps to a particular team. When there are unfinished intent in the conversation, that intent can be used to decide which team should we route the conversation to, based on the builder supplied the information. when there are no unfinished intent, we can also ask user to provide one, so that they can be transferred to right team directly.

## Configure Support

### Before You Begin

1. Make sure all the owners in your organization have verified their emails first otherwise you won't be able to get support of Chatwoot.

::: tip How to Verify Your Email?
1. Click on your avatar in the top right corner and click on your name.
2. Click "!" icon in the **E-mail** box and follow the instructions to verify your email.
   :::


2. Make sure you have configured your channel first. Learn more about channel configuration, see [WeChat Official Account](https://www.framely.ai/reference/channels/wpa.html#before-you-begin).

3. We show here how to integrate your chatbots with Chatwoot in Framely hosted environment. For private deploy, please consult systems in your organization.

### Enable Chatwoot

1. Click **Setting** > **Integrations**. In the **Support** field, enable **Chatwoot**.

![enable-chatwoot](/images/Chatwoot/enable-chatwoot.png)

2. If you enable Chatwoot for the first time in your organization, check your email to get your user name and password so you can log into [Chatwoot](https://chatwoot.naturali.io/).

### Set Up Routing Priority

To make intent based routing work, you need to set up routing priority. When there are unfinished intents in the conversation, we follow routing priority to decide which team we should route the conversation to. If an unfinished intent is one of the associate intents in routing priority, we route the conversation to the corresponding team. Otherwise, we route the conversation to default team.\
Follow these steps to set up routing priority.

1. Click **Setting** > **Routing Priority** > **Default**, input team id of the default team. To get team id, see [How to Get Team Id](/reference/support/Chatwoot.html#how-to-get-team-id).
2. Click **add** to add more teams. Input the name of intent in **Associate intent** box.

![routing-priority](/images/Chatwoot/routing-priority.png)


