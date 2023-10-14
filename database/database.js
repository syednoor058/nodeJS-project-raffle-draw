const Ticket = require("../models/Tickets");

class MyDB {


    constructor(){
        //Store all the tickets
        this.allTickets = [];
    }


    /**
     * Buy a ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket}
     */
    buyTicket(username, price){
        const ticket = new Ticket(username, price);
        this.allTickets.push(ticket);
        return ticket;
    };
    

    /**
     * Buy multiple tickets at a same time
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     * @returns {Array<Ticket>}
     */
    bulkBuyTicket(username, price, quantity){
        const result = [];
        for (let i = 0; i < quantity; i++){
            const ticket = this.buyTicket(username, price);
            result.push(ticket);
        };
        return result;
    };


    //Find all tickets
    findAllTicket(){
        return this.allTickets;
    };


    /**
     * Find tickets by ticket ID
     * @param {string} tcktID 
     * @returns {Ticket}
     */
    findByID(tcktID){
        const ticket = this.allTickets.find(
            /**
             * Returns ticket object
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.ticketID === tcktID
        );
        return ticket;
    };


    /**
     * Find tickets by username
     * @param {string} username
     * @returns {Array<Ticket>} 
     */
    findByUsername(username){
        const tickets = this.allTickets.filter(
            /**
             * Returns all the tickets that matche the condition
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.username === username
        );
        return tickets;
    };


    /**
     * Update ticket by ticket ID
     * @param {string} tcktID
     * @param {{username: string, price: number}} ticketBody 
     * @returns {Ticket}
     */
    updateByID(tcktID, ticketBody){
        const ticket = this.findByID(tcktID);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();
        return ticket;
    };


    /**
     * Update ticket by username
     * @param {string} username 
     * @param {{username: string, price: number}} ticketBody 
     */
    updateByUsername(username, ticketBody){
        const tickets = this.findByUsername(username);
        tickets.forEach((ticket) => {
            ticket.username = ticketBody.username ?? ticket.username;
            ticket.price = ticketBody.price ?? ticket.price;
            ticket.updatedAt = new Date();
        });
        return tickets;
    };


    /**
     * Delete ticket by ID
     * @param {string} tcktID 
     */
    deleteByID(tcktID){
        const index = this.allTickets.findIndex(
            /**
             * 
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.ticketID === tcktID
        );

        if (index !== -1){
            this.allTickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };


    /**
     * Delete ticket by Username
     * @param {string} username 
     */
    deleteByUsername(username){
        const tickets = this.findByUsername(username);
        tickets.forEach((ticket) => this.deleteByID(ticket.ticketID));
        return tickets;
    };


    /**
     * Raffle Draw and return winners list
     * @param {number} winnerCount 
     */
    raffleDraw(winnerCount){
        const winnersIndices = new Array(winnerCount);
        let index = 0;
        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.allTickets.length);
            if (!winnersIndices.includes(winnerIndex)){
                winnersIndices[index] = winnerIndex;
                index++;
                continue;
            };
        };

        const winners = winnersIndices.map((index) => this.allTickets[index]);
        return winners;
    };
};


const myDB = new MyDB();
module.exports = myDB;