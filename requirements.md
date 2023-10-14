#Lottery Ticket API

- Buy loterry ticket
- Update lottery tickets by ID
- Update lottery tickets by Username
- Delete lottery ticket
- Get lottery tickets by ID
- Get lottery tickets by username
- Bulk lottery tickets (A user can buy multiple tickets at a same time)
- Get all lottery tickets
- Raffle Draw


#Ticket object

- Username
- Ticket ID (Unique number)
- Price
- Buy time
- Update time


#Routes

- /tickets/t/:ticketID - GET - Find a ticket by ID
- /tickets/t/:ticketID - PATCH - Update a ticket by ID
- /tickets/t/:ticketID - DELETE - Delete a ticket by ID
- /tickets/u/:username - GET - Find a ticket by username
- /tickets/u/:username - PATCH - Update a ticket by username
- /tickets/u/:username - DELETE - Delete a ticket by username
- /tickets/buy - Create new ticket
- /tickets/bulk - Create multiple tickets
- /tickets/draw - Raffle draw result
- /tickets - GET - Get all tickets
