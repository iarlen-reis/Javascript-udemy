/*
Na hora de importar usamos uma constante para armazenar o objeto,
    exportado e usamos require('caminho') para atribuir os itens importados
    na constante.

Podemos também fazer importação atravez de desestruturação, por ser um objeto.

*/
// const { Pessoa } = require('./mod1');
// const path = require('path');

const axios = require('axios');

axios('https://gerador.iarlenreis.com.br/').then(
    resposta => console.log(resposta.data)
).catch(error => console.log(error));