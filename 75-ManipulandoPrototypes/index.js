/*
Manipulando Prototypes:
    - Podemos fazer cadeias entre objetos, definir o objeto A e
        fazer com que o objeto B tenha o prototype dele, sendo assim,
        B terá acesso a tudo que tem em A.

    - Se definimos um objeto C e fazermos ele ter o prototype de B, ele terá
        acesso a tudo que tem em B e também a tudo que tem em A.

    - Para fazer um objeto ter o prototype do outro, basta utilizar a função
        setPrototypeOf(de, qual);

*/

// criando uma função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Definindo os metodos do objeto no prototype

Produto.prototype.desconto = function(desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100));
};

Produto.prototype.aumentaPreco = function(Valor) {
    this.preco = this.preco + (this.preco * (Valor / 100));
};


const caneca = new Produto('Caneca', 100);

// Criando um objeto literal

const camiseta = {
    nome: 'Camiseta',
    preco: 200
}

// Atribuindo o prototype da função construtura no objeto literal
Object.setPrototypeOf(camiseta, Produto.prototype);

// Tendo acesso aos metodos do prototype da função construtura no literal.
camiseta.aumentaPreco(10);


