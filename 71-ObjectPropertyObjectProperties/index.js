/*
Object defineProperty() e ObjectProperties():
    - São funções relacionadas as chaves dos objetos, com elas podemos
        congelar uma ou mais chaves de um objeto, fazendo com que o valor dessas
        chaves não sejam alterados.

    - Podemos utilizar a função Object.keys(objeto) para ver todos as chaves
        de um objeto em forma de array.


*/

// Define Property:

function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Exibir a chave quando chamar o objeto.
        value: estoque, // Atribuindo o valor a chave.
        writable: false, // Dizendo que o valor não pode ser alterado.
        configurable: false, // Pode apagar a chave ou reconfigurar a chave.
    });

};

// const produto1 = new Produto('Camiseta', '20', 3);


// Define Properties

function Produto2(nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preço,
            writable: true,
            configurable: true
        }
    });

};