/* 
Express middlewares:
    - Middlewares são praticamente intermediario entre uma rota e a respota,
        o middleware vai fazer algo antes da rota devolver a resposta.

    - Também podemos utilizar a função next para executar uma função após o servidor
        entregar a resposta ao cliente.

    - Podemos trabalhar com middleware em rotas individuais (routes.js), como em 
        todas as rotas (server.js).

    - Podemos também criar uma pasta middlewares e exportar os middlewares de lá.

*/
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Meu próprio middleware:
app.use(middlewareGlobal);
app.use(routes);


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
});
