/* 
Modelo Express + MongoDB + Handlebars:
    -
*/

// Importando path e otenv:
const path = require('path');
require('dotenv').config();

// Importando express e mongoose:
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Importando session, flash e mongoStore:
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Importando as rotas do arquivo routes.js e o middleware:
const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');


// Configurando mongoose com a dotenv:
mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// Configurando pasta de arquivos estaticos:
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurando session e criando colletions da session no banco de dados:
const sessionOptions = session({
    secret: 'sou secreto',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// Handlebars configuração:
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Setando as rotas do arquivo routes.js e configurando o middleware global:
app.use(middlewareGlobal);
app.use(routes);

// Configurando a porta do express:
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
    });
});

