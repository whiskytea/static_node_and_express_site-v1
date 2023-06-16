const express = require('express');
const flashcards = express.Router;


const mainRoutes = require("./fc_index");
const cardRoutes = require("./cards");


flashcards.use(mainRoutes);
flashcards.use('/card', cardRoutes);
flashcards.use('/static', express.static('public'));

module.exports = flashcards;