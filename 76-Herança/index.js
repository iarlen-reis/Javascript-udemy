/*
Herança em prototype:
    - 
*/

/*
Criar uma abstração dos seguintes produtos:
    - Camiseta e Caneca:
        Camiseta: cor
        caneca: material

    - O que elas vão ter incomum?
        - Aumentar preço e desconto

*/

// Criando uma função construtura que faz um produto.
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Definindo os prototypes do produto.
Produto.prototype.aumento = function(quantia) {
    return this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    return this.preco -= quantia;
};


// Criando uma função construtura abstraida do Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Likando o Objeto Produto com o novo objeto.
    this.cor = cor;
}

/*
Criando o prototype da camiseta e atribuindo a ela o prototype
    de Produto.prototype. Agora Camiseta tem o prototype de produto, porém ao
    criar um objeto com a função construtura de Camiseta, ele vai dizer que
    a função construtura é Produto.
*/

Camiseta.prototype = Object.create(Produto.prototype);


/*
Para resolver é facil para atribuir a função construtura ao prototype novamente,
    e a partir de agora, a função criadora Camiseta passa a ser construtura
    das instancias dela novamente.
*/

Camiseta.prototype.constructor = Camiseta;


const produto = new Produto('Shampo', 10);

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

// console.log(camiseta);
// console.log(produto);

function Caneca(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco)
    this.cor = cor;
    this.tamanho = tamanho;
}

Caneca.prototype.aumento = function(percetual) {
    return this.preco = this.preco + (this.preco * (percetual / 100));
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('C ClashofClans', 100, 'Azul', 'M');

caneca.aumento(10);

console.log(caneca);