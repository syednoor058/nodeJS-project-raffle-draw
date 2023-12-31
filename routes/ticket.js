const router = require('express').Router();
const db = require('../database/database');


router.get('/t/:ticketId', (req, res) => {
	const ticketId = req.params.ticketId;
	const ticket = db.findByID(ticketId);
	res.status(200).json(ticket);
});

router.patch('/t/:ticketId', (req, res) => {
	const ticketId = req.params.ticketId;
	const updatedTicket = db.updateById(ticketId, req.body);
	res.status(200).json({ message: 'Updated Successfully by ticketID', updatedTicket });
});

router.delete('/t/:ticketId', (req, res) => {
	const ticketId = req.params.ticketId;
	db.deleteById(ticketId);
	res.status(203).send();
});

router.get('/u/:username', (req, res) => {
	const username = req.params.username;
	const tickets = db.findByUsername(username);
	res.status(200).json(tickets);
});

router.patch('/u/:username', (req, res) => {
  const username = req.params.username;
  const updatedTicket = db.updateByUsername(username, req.body);
  res.status(200).json({ message: 'Updated Successfully by username', updatedTicket });
});

router.delete('/u/:username', (req, res) => {
  const username = req.params.username;
  db.deleteByUsername(username);
  res.status(203).send();
});

router.post('/buy', (req, res) => {
	const { username, price } = req.body;
	const ticket = db.buyTicket(username, price);
	res.status(201).json({ message: 'Ticket created successfully', ticket });
});

router.post('/bulk', (req, res) => {
	const { username, price, quantity } = req.body;
	const tickets = db.bulkBuyTicket(username, price, quantity);
	res.status(201).json({ message: 'Bulk ticket created successfully', tickets });
});

router.get('/draw', (req, res) => {
	const winnerCount = req.query.wc ?? 3;
	const winners = db.draw(winnerCount);
	res.status(200).json(winners);
});

router.get('', (_req, res) => {
	const tickets = db.findAllTicket();
	res.status(200).json(tickets);
});


module.exports = router;