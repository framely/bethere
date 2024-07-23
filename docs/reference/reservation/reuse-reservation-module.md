# Reuse table reservation module to build chatbot

<!--这篇文章主要写如何 reuse reservation module，应当和 reuse module 有所区分，因此：
1. 不需要赘述 reuse module 中的内容，如果需要读者具有相应 backgroud 应直接指向该文档；
2. 需要讲述和 reuse module 不同的地方，或者那篇文档里没有讲，在这里需要读者了解的信息；现在的介绍包括一部分 bg 但实际又不全面，影响理解；
3. 如果读者真的不想了解，也应当可以读下来，而不是被前置的不完整信息卡住；（因为本质上 reuse 了，就不需要关注 bg，可以直接照着做）
4. Dependency 的关系要讲明。
5. 像“Service can have one or more backend implementations, each can be accessed via its corresponding provider.”是指 platform 的机制，应该是在 background 里。并不是指在这里，builder reuse 之后可以在 chatbot 为 reservation interface 配置多个 backend。
-->

<!-- 这里是被注掉的原文
This guide shows you how to add a table reservation functionality to your chatbot by reusing a module. A module is a reusable conversational user interface(CUI) component whose conversational behavior is defined on top of some service APIs. Service can have one or more backend implementations, each can be accessed via its corresponding provider.

Modules can be composed into bigger ones to provide more comprehensive conversational experience. By importing the right module into your chatbot, you can quickly add new conversational functionality. 
-->

OpenCUI offers a convenient way for developers to share modules, allowing for the reuse of existing modules and saving time in creating new chatbots. These modules are designed to be reusable, enabling them to be easily integrated or removed from a service as required. When incorporating modules into a chatbot, it is crucial to ensure that the modules are compatible with each other and the corresponding implementations of service interfaces are also wired. This will ensure that the module works as expected in the chatbot.

To leverage a pre-existing module, the initial step is to identify a module that aligns with your requirements. Subsequently, you can import the module into your chatbot and directly leverage its functionalities. These modules are developed and maintained by other builders, assuring their quality. Moreover, you retain the flexibility to update these modules, ensuring that your chatbot remains up-to-date with the latest features and capabilities. For more background and details about modules, see "[Reuse an hours module](../reference/guide/reuse-component.md)".

To demonstrate the reuse of modules, we will focus on the [tableReservation](https://build.opencui.io/org/demo.opencui/agent/tableReservation/struct/type?page=0&list_type=all&search=&category=ALL) module. This module allows chatbots to facilitate tasks such as making, viewing, and canceling table reservations. Below is an example of a user interaction with a chatbot utilizing the table reservation module:

``` json
User: "Hi, I'd like to reserve a table, please."
Chatbot: "Could you please provide your email address for the table reservation?"
User: "xxxx@gmail.com"
Chatbot: "How many people will you need the reservation for?"
User: "There will be two of us."
Chatbot: "Which day will you be joining us on?"
User: "This Sunday."
Chatbot: "What time would you like the reservation for?"
User: "3:00 PM."
Chatbot: "Are you sure to book a table for 2 at 3:00 PM on Sunday, Jun 8, 2024?"
User: "Yes."
Chatbot: "Your reservation has been made. We'll see you at 3:00 PM on Sunday, Jun 8, 2024."
```

Before reusing the `tableReservation` module, it is crucial to grasp the following dependencies:
1. [Table reservation CUI design](reservation-cui-design.md): Blueprint outlining the user experience and service scope of the table reservation module.
2. [Reservation API](./reservation/reservation-api.md): The API that the module relies on.
3. [Google Calendar provider](./reservation/google-calendar-reservation.md): Backend used by the chatbot to store reservations, requiring a Google Workspace account.

## Before you start
1. Log in to [OpenCUI](https://build.opencui.io/login).
2. Refer to the [quickstart guide](../reference/guide/index) to familiarize yourself with OpenCUI basics.
3. Set up [Google Workspace](./reservation/google-calendar-reservation#set-up-google-workspace) and [service account](./reservation/google-calendar-reservation#set-up-service-account).

## Set up Google Calendar
Under the reservation API design, businesses need to define resources such as tables or appointments that users can book. These resources are associated with specific locations, and before users can make a booking, the business-specific locations and resources must be set up in the backend. Different backends may have distinct methods of defining available resources for booking. The [Google Calendar based backend](./reservation/google-calendar-reservation) uses the Google Admin console to define table resources and Google Calendar to store reservations.

Let's use an example of a restaurant to demonstrate how to set up your resources:

1. **Restaurant name**: My First Restaurant
2. **Timezone**: America/Los_Angeles (formatted in IANA Time Zone Database name.)
3. **Business hours**
   - Sunday: Closed
   - Monday to Saturday: 5:00 PM - 10:00 PM
4. **Bookable resources**
   | Resource name | Resource type | Capacity  | Duration |
   |:--------------|:--------------|:----------|:---------|
   | Small table   | table         | 2 guests  | 2 hours  |
   | Medium table  | table         | 4 guests  | 2 hours  |
   | Large table   | table         | 8 guests  | 2 hours  |

There are two ways to set up your table resources:
1. Automatic setup: Provide your resources and business hours in JSON format for automatic configuration.
2. Manual configuration: Set up resources and business hours individually in the Google Admin console and Google Calendar.

### Option 1: Automatic Setup
By providing resource details in JSON format, OpenCUI simplifies the setup process for Google Calendar based backend. Here's an example of setting up the restaurant automatically:

**Buildings**
```json
[{
    // The building name as seen by users in Calendar.
    "buildingName": "My First Restaurant",
    // Timezone is stored in the description.
    "description": "{\"timezone\": \"America/Los_Angeles\"}",
    // Unique identifier for the building.
    "buildingId": "My-First-Restaurant",
    // The display names for all floors in this building. Must contain at least one entry.
    "floorNames": ["1"]
}]
```
**Resources**
```json
[{
    // The unique ID for the calendar resource.
    "resourceId": "Small-table",
    // The name of the calendar resource. 
    "resourceName": "Small table",
    // The table information is encoded in the resourceDescription field.
    "resourceDescription": "{\"@class\":\"me.restaurant.tableReservation.Table\", \"capacity\": 2}",
    // Unique ID for the building a resource is located in.
    "buildingId": "My-First-Restaurant",
    // The type of the calendar resource.
    "resourceType": "table"
}]
```
**Business hours**
```json
{
  "Monday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Tuesday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Wednesday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Thursday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Friday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Saturday": [{ "startTime": "17:00", "endTime": "22:00"}],
  "Sunday": [] 
}
```
After [wiring the provider](#wire-the-provider), proceed to initialize the resources by following these steps:
1. Navigate to **Initialization** tab.
2. Follow [set up Google calendar reservation provider](./reservation/google-calendar-reservation.md#set-up-google-calendar-reservation-provider) to input the **Service account key**, **Customer ID**, **Delegated user** and **Reservation calendar**.
3. Fill in **Buildings**, **Resources** and **Business hours** as outlined above.


### Option 2: Manual configuration
Alternatively, you can choose to add resources manually by following these steps:
1. In the **Google Admin console**, start by adding buildings as locations. Then, proceed to add resources for each location to make them available for user bookings
2. In the **Google Calendar**, set your business hours, ensuring to block off times when reservations are not accepted, such as during closed hours.


#### Add resources in Admin console
To add resources, it is essential to associate them with specific buildings in the Google Admin. Follow these steps after logging into your [Google Admin console](https://admin.google.com/):

**Add a building**
1. Navigate to the Buildings section: 
   1. From the **Main Menu** in the Google Admin console, select **Directory** > **Buildings and resources** > **Manage resources**.
   2. Click **ADD BUILDING**.
   
   ![resource management](/images/blog/tutorial-reuse-reservation/resource-management.png)

2. Add a new building:
   1. In the Buildings section, click **Add building**.
   2. Fill in the form with the following information and add:
       - **Id**: My-First-Restaurant
       - **Name**: My First Restaurant
       - **Description**: `{"timezone": "America/Los_Angeles"}`
       - **Floors**: 1
   3. Click **ADD BUILDING**.
   4. Switch back to **Resources**.

   ![add building](/images/blog/tutorial-reuse-reservation/add-building.png)

**Add resources**
1. To add the first resource based on the [business information](#set-up-resources) :
   1. In the Resources section, click **Add new resource**.
   2. Fill in the form with the following information:
       - **Category**: Other resource
       - **Type**: table
       - **Building**: My First Restaurant
       - **Resource name**: Small table
       - **Description (internal)**: `{"@class":"demo.opencui.tableReservation.Table", "capacity": 2}`
   3. Click **ADD RESOURCE**.

   ![add resource](/images/blog/tutorial-reuse-reservation/add-resource.png)

2. For the additional two resources, repeat the process with updated information in the **Resource name** and **Description** fields.
   - Medium table: `{"@class":"demo.opencui.tableReservation.Table", "capacity": 4}`
   - Large table: `{"@class":"demo.opencui.tableReservation.Table", "capacity": 8}`

Upon completing these steps, your building and resources setup should mirror the example depicted in the screenshot below.

![resources example](/images/blog/tutorial-reuse-reservation/resources-example.png)

#### Block time in Google Calendar
To ensure a seamless reservation process and prevent bookings during closed hours, follow these steps to block off unavailable times in Google Calendar:

1. Select or create a dedicated reservation calendar for managing reservation events.
2. When creating a resource in the Google Admin, a corresponding resource calendar is automatically generated. Add these resource calendars to your main calendar for event management.
3. Block off time slots by responding to event invitations in the resource calendars to confirm the unavailability of certain time slots.
::: tip
Before you start, make sure you are an [admin](https://support.google.com/a/answer/172176?hl=en) first, then sign in to your [Google Calendar](https://calendar.google.com).
:::

**Add events to block time**
1. In the reservation calendar, double-click the schedule.
2. Specify the event details and click **Save**:
   - **Title**: Closed
   - **Time**: `12:00am` to `5:00pm` (Select appropriate start and end dates based on the current date.)
   - **Repeat**: (Custom) Weekly on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
   - **Rooms**:
     - (table)-My First Restaurant-1-Large table
     - (table)-My First Restaurant-1-Medium table
     - (table)-My First Restaurant-1-Small table

   ![add event](/images/blog/tutorial-reuse-reservation/add-event.png)

3. Ceate additional events by repeating the process with adjusted **time** and **Repeat** fields for different time slots:
   - Event 2
       - **Time**: `10:00pm` to `11:59am` (Select appropriate start and end dates based on the current date.)
       - **Repeat**: Weekly on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
   - Event 3
       - **Time**: Select appropriate start and end dates based on the current date. (e.g., `Jun 16, 2024` to `Jun 16, 2024`)
       - **Repeat**: Weekly on Sunday

**Add resources calendar**
1. On **Other calendars**, click **+** > **Browse resources**. If you don't see this option, wait a few hours for ACL changes to take effect before managing resources.

   ![browse resources](/images/blog/tutorial-reuse-reservation/browse-resources.png)

2. Tick the table resources you need.

   ![tick resources](/images/blog/tutorial-reuse-reservation/tick-resources.png)

3. Back to your calendars, choose one resource calendar, and click **Settings and sharing**.

   ![click resoure](/images/blog/tutorial-reuse-reservation/click-resoure.png)

4. Ensure the timezone aligns with the location for accurate scheduling.

   ![check timezone](/images/blog/tutorial-reuse-reservation/check-timezone.png)

5. Verify and adjust the timezone settings for all resource calendars to maintain scheduling accuracy.

#### Respond to event invitations
1. Open each resource calendar and locate the three events that you added.
2. At the bottom of each event, select **Yes** as a response for all recurring events.

After completing these steps, your resource calendars should looks like the screenshot below.

![calendar example](/images/blog/tutorial-reuse-reservation/calendar-example.png)


## Reuse tableReservation module
Let's proceed with creating a table reservation chatbot and reusing the functionalities of the table reservation module.

### Import the module
1. Create a chatbot and add the **English(en)** language.
2. [Import](../reference/platform/reusability.md#import-1) the [table reservation module](https://build.opencui.io/org/demo.opencui/agent/tableReservation/struct/type?page=0&list_type=all&search=&category=ALL) into your chatbot.

### Configure restaurant inforamtion
To tailor the reservation process to your restaurant's needs, follow these steps to configure restaurant information in corresponding types:
1. Enter the chatbot you just created.
2. Under the **Workspace** tab, select type `demo.opencui.tableReservation.RestaurantInfo`. 
3. Within the type `RestaurantInfo`, add expressions for each label: 
   - **ReservationTitle**: Title of the reservation event in the Google Calendar.
   - **Location**: Name of the building in the Google Admin.
   - **MaxTableSize**: Maximum capacity allowed for a table.
4. Click **Workspace** tab, select type `demo.opencui.tableReservation.TablePreference`.
5. Within the type `TablePreference`, in the **Slots** section, select slot `defaultDuration`.
6. Inside the slot `defaultDuration`, switch to the **Interaction** tab. 
   - In the **Initialization** section, click **Add**.
   - Enter the default duration in seconds for a single reservation (e.g., 7200 for a 2-hour reservation).
   - Click **Save**.

### Wire the provider
To access the reservation API functionalities, you need to declare a reservation service and wire the reservation provider to this service. Here's how you can wire the reservation provider:

1. Enter the chatbot you just created.
2. In the navigation bar, select the **Settings** tab and head to **Integrations** page. In the **Debug service provider** section:
   - Click **Select provider** and select `services.opencui.reservation.IReservation` and then `services.opencui.googleCalendarReservation
`.
   - Follow [set up Google calendar reservation provider](./reservation/google-calendar-reservation.md#set-up-google-calendar-reservation-provider) to finalize this integration.

## Test the chatbot
Now, it's time to test your chatbot for making a table reservation. Here's how you can do it:

1. Use [Debug](../reference/platform/testing.md#debug) to initiate the reservation process by sending "_I want to book a table_". Then provide the number of guests, date and time. If there is an available table, you can book it successfully. For example:

   ![example conversation](/images/blog/tutorial-reuse-reservation/example-conversation.png)

2. After making a reservation, verify the booking in your Google Calendar. The screenshot below illustrates the reservation made in the previous example:

   ![example reservation](/images/blog/tutorial-reuse-reservation/example-reservation.png)


The image below depicts the process of how the reservation is successfully completed.

![message process](/images/blog/tutorial-reuse-reservation/message-process.png)


::tada:: Congratulations on building your table reservation chatbot! For more exploration, refer to the [Test cases](../reference/platform/testing.md#test-cases) in the [tableReservationBot](https://build.opencui.io/org/me.test/agent/tableReservationBot/en/type?page=0&list_type=all&search=&category=ALL) chatbot.
