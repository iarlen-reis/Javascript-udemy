/*
Objetos em JavaScript:
- Usamos chaves para criar objetos em javascript.
- dentro do objeto, podemos passar vários parâmetros que poderemos
    acessar fora do objeto atrávez do .atributo.
- Podemos criar funções dentro do objetos e essas funções podem
    modificar as instacias|atributos desse objeto.
- Usamos this para referencias o objeto dentro de si próprio, sendo
    assim, podemos usar this.nomeDoAtributo, para referenciar o
    atributo dentro do proprio objeto.

*/
// Objeto em javascript:
const pessoa = {
    nome: 'Iarlen',
    sobrenome: 'Reis',
    idade: 25
};

// Criando função que cria objetos:
criarObjetoPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade
    }
};

//const pessoa1 = criarObjetoPessoa('Iarlen', 'Reis', 20);

// Criando funções dentro de um objeto (metodo):

const pessoa1 = {
    nome: 'Iarlen',
    sobrenome: 'Reis',
    idade: 20,
    falar () {
        console.log(`Olá, Eu sou ${this.nome} e minha idade atual é ${this.idade}.`)
    },
    incrementaIdade () {
        this.idade += 1;
    }
};

pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()
pessoa1.incrementaIdade()

