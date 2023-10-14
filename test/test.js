const myDB = require("../database/database");

myDB.buyTicket('user111', 10);
myDB.buyTicket('user112', 10);
myDB.buyTicket('user113', 10);
myDB.buyTicket('user114', 10);
myDB.buyTicket('user115', 10);
myDB.bulkBuyTicket('user116', 10, 3);
myDB.bulkBuyTicket('user117', 10, 4);
myDB.bulkBuyTicket('user118', 10, 2);

const allTickets = myDB.allTickets;
console.log('All tickets:', allTickets);

const winners = myDB.raffleDraw(3);
console.log("Winners:", winners);