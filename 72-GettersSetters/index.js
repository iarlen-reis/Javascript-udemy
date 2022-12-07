/*
Getters e Setters:
    - Além de fazer com que um metodo se comporte como uma propriedade
        de um objeto, getters e setters serve para proteger chaves de um objeto.

    - Geralmente a função do getters só vai ser pegar o valor e exibir ele.

    - Geralmente o setters só vai modificar o valor.
*/


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque; // Definindo uma váriavel privada

    Object.defineProperty (this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado; // retornando a váriavel privada
        },
        set: function(valor) { // Valor = o valor que será passado pela notação de .
            if (typeof valor === 'number') { // verificando o tipo do valor
                estoquePrivado = valor; // Associando o valor a váriavel privada.
            };
        }
    });
}

const produto = new Produto('Camiseta', 20, 3);

console.log(produto);
produto.estoque = 6;
console.log(produto.estoque);