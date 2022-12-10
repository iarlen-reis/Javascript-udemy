const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');



module.exports = function(nomeArquivo, conteudo) {
    const caminhoArquivo = path.resolve(__dirname, '..', nomeArquivo);

    fs.writeFile(caminhoArquivo, conteudo, {flag: 'w'});
}

