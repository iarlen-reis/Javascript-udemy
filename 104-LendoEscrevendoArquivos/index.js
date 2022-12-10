/* 
Lendo e escrevendo arquivos com FS:

*/
// const Escrever = require('./modules/escrrever');
const Ler = require('./modules/ler');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');

const pessoas = [
    {nome: 'Iarlen'},
    {nome: 'Mária'},
    {nome: 'Larissa'},
    {nome: 'jennifer'}
];

const json = JSON.stringify(pessoas, '', 2);

async function leArquivo(caminho) {
    const dados = await Ler(caminho);
    renderizaDados(dados);
}


function renderizaDados(dados) {
    dados = JSON.parse(dados);
    
    dados.forEach(pessoa => {
        console.log(pessoa.nome)
    });
}


leArquivo(caminhoArquivo);
