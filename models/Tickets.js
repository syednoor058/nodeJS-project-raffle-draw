const shortID = require("shortid");

class Ticket {

    /**
     * Constructor of Ticket class
     * @param {string} username 
     * @param {number} price 
     */
    constructor(username, price){
        this.username = username;
        this.price = price;
        this.ticketID = shortID.generate();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    };
};

module.exports = Ticket;