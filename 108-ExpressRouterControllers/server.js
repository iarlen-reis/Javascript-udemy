/* 
Routes em Express:
    - Primeiro você precisa criar um arquivo chama routes.js, dentro dele
        ficará as routes da aplicação, que serão importadas da pasta Controllers.

    - Segundo criamos uma pasta chama Controllers, lá ficará separados em arquivos
        todas nossas rotas que serão exportadas para o arquivo routes.js.

    - Terceiro voltamos no arquivo server.js e importamos o arquivo routes.

    - Quarto usamos o app.use(routes) para dizer a aplicação que as rotas dela vão
        vim do arquivo routes.js.
*/
const express = require('express');
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({extended: true}))
app.use(routes);


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
});
