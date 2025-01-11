# Table reservation CUI design
This document describes the design of a conversational user interface (CUI) for table reservations so that all stakeholders can stay in sync on goal and scope. The table reservation module provides a conversational service that enables users to make, view and cancel table reservations. The conversational experience of each functionality is described in detail below.

The design and implementation of this module are based on the assumption that a reservation will remain valid until it is expired or canceled by the user. While businesses may change plans and render some reservations invalid, this module does not cover those scenarios.

## Make a reservation
To make a reservation, the user can simply say something like "*I'd like to make a reservation.*" Subsequently, the chatbot will prompt for the necessary details. The essential information required for creating a reservation includes the following (captured by slots):

1. `userEmail` **String** Required. User's email for reservation tracking.
2. `numberOfGuests` **Int** Required. Count of guests for the reservation.
3. `date` **LocalDate** Required. Reservation date.
4. `time` **LocalTime** Required. Reservation time.

Upon furnishing all mandatory information, the chatbot will confirm the reservation and proceed accordingly.

The service's conversational behavior is detailed through contextual snippets:

### Happy path
1. Description: Reservation creation with user confirmation.
2. Precondition: N/A
3. Annotated conversation
   ```json
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
4. End state: Slots `userEmail`, `numberOfGuests`, `date` and `time` are filled.
   ```json
   {
      "userEmail": "xxxx@gmail.com",
      "numberOfGuests": 2,
      "date": "2024-6-8",
      "time": "15:00"
   }
   ```

### Inform reservation failure
1. Description: Notifying the user when a reservation cannot be processed.
2. Precondition: Slots `userEmail`, `numberOfGuests`, `date` and `time` are all filled.
3. Annotated conversation:
   ```json
   Chatbot: "Are you sure to book a table for 2 at 3:00 PM on Sunday, Jun 8, 2024?"
   User: "Yes."
   Chatbot: "Sorry, the table you want to book is currently unavailable. You may change to another time or date, and try it again."
   ```
4. End state:
   - Keep the filling for slots `userEmail` and `numberOfGuests`.
   - Clear up slots: `date` and `time`.

### Handle invalid input
1. Description: Prompting the user for a valid input when the chatbot receives an unserviceable value for a slot (e.g., an invalid date).
2. Precondition: Slots `userEmail` and `numberOfGuests` are filled.
3. Annotated conversation:
  ```json
   Chatbot: "Which day will you be joining us on?"
   User: "This Sunday."
   Chatbot: "Sunday, Jun 8, 2024 is not available. Please choose another date. Which day will you be joining us on?"
   ```
4. End state:
   - Slots `userEmail` and `numberOfGuests` are filled.
   - Slot `date` is active.

### Handle value replacement
1. Description: Updating slot values upon user request for modification (e.g., changing the date).
2. Precondition: Slots `userEmail`, `numberOfGuests` and `date` are filled,.
3. Annotated conversation:
   ```json
   User: "Can I change the date to this Saturday?"
   Chatbot: "Sure, the date is changed from Sunday, Jun 8, 2024 to Saturday, Jun 7, 2024."
   ```
4. End state: Slot `date` is filled with new value.

## View reservations
Users can check their reservations by asking the chatbot to "*show me my reservations.*" The chatbot will then display a list of the user's current reservations upon providing the required information:

1. `userEmail` **String** Required. User's email for reservation lookup.

The service's conversational behavior is detailed through contextual snippets:

### Happy path
1. Description: Displaying the user's current reservations.
2. Precondition: N/A
3. Annotated conversation:
  ```json 
   User: "Show me my reservations."
   Chatbot: "Could you please provide your email address for the table reservation?"
   User: "xxxx@gmail.com"
   Chatbot: "You have reserved a table for Sunday, Jun 8, 2024 at 3:00 PM."
   ```
4. End state: Slot `userEmail` is filled.

### No valid reservations
1. Description: Informing the user when no valid reservations are found.
2. Precondition: N/A
3. Annotated conversation:
   ```json 
   User: "Show me my reservations."
   Chatbot: "Could you please provide your email address for the table reservation?"
   User: "xxxx@gmail.com"
   Chatbot: "Apologies, I couldn't locate a reservation linked to your email (xxxx@gmail.com). Please verify if you used the correct account for the reservation."
   ```
4. End state: Slot `userEmail` is filled.

## Cancel a reservation
Users can cancel a reservation by instructing the chatbot to "*cancel my reservation.*" The chatbot will guide the user to specify the reservation for cancellation, requiring the following details:

1. `userEmail` **String** Required. User's email for reservation tracking.
2. `reservationId` **String** Required. The ID of the reservation will be cancelled.

The service's conversational behavior is detailed through contextual snippets:

### Happy path
1. Description: Successful cancellation of a reservation with user confirmation.
2. Precondition: N/A
3. Annotated conversation:
   ```json  
   User: "Cancel my reservation."
   Chatbot: "Could you please provide your email address for the table reservation?"
   User: "xxxx@gmail.com"
   Chatbot: "Which reservation would you like to cancel?"
         "1. Sunday, Jun 8, 2024, 3:00 PM"
         "2. Saturday, Jun 7, 2024, 7:00 PM"
   User: "The second"
   Chatbot: "Okay, I see that reservation. Is this the correct reservation?"
   User: "Yes, that's correct."
   Chatbot: "Thank you. The reservation has been canceled successfully."
   ```
4. End state: Slot `userEmail` and `reservationId` are filled.