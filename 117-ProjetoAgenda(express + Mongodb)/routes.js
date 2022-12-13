const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const {userIsConnected} = require('./src/middlewares/middleware');

// Rotas das home:
route.get('/', homeController.index);

// Rotas  de login:
route.get('/login',userIsConnected, loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/logout', loginController.logout);

module.exports = route;
