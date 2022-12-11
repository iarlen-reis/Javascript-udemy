const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Rotas das home:
route.get('/', homeController.paginaInicial);

// Rotas para contato:
route.get('/contato', contactController.contactHome);
route.post('/contato', contactController.contactPost);
route.get('/contatos', contactController.listarContatos);

module.exports = route;
