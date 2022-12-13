const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// Rotas das home:
route.get('/', homeController.paginaInicial);
route.post('/', homeController.PaginaInicialPost);

module.exports = route;
