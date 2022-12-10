const nome = 'Iarlen';
const sobrenome = 'Reis';

const falaNomeSobrenome = () => {
    console.log(nome, sobrenome);
};

// Forma 1 de exportar modulos no node:

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNomeSobrenome = falaNomeSobrenome;


// Forma 2 (Forma 1 abreviada):
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNomeSobrenome = falaNomeSobrenome;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// forma 3:

module.exports = {
    nome, sobrenome, Pessoa
}