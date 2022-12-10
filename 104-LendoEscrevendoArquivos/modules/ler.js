const fs = require('fs').promises;
const path = require('path');


module.exports = (caminho) => {
    return fs.readFile(caminho, 'utf8');
}