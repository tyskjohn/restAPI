const route = require('express').Router();

const cards = require('../controllers/cardController.js');

//unres routes
route.get("/all", cards.getCards);
route.get("/:id", cards.getCard);

module.exports = route;