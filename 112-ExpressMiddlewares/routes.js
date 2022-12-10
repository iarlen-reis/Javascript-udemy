const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');


// Rotas das home:
route.get('/', homeController.paginaInicial);
route.post('/', homeController.paginaInicialPost);

// Rotas para contato:
route.get('/contato', contactController.contactHome);

module.exports = route;
