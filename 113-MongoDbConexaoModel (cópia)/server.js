/* 
Express + MongoDB:
    -
*/
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
    });
});

