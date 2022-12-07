/*
- Object.values -> Retorna os valores do objeto em formato de array.
- Object.entries -> Retorna um array com as keys e valores do objeto.
- ....(spread) -> Copia um objeto para o outro usando spread.
- Object.assign(des, any) -> Copia um objeto para o outro.
- Object.getOwnPropertyDescriptor (o, 'prop') -> Exibe as propertyDescriptor
    de um objeto.
*/

// Apredendo getOwnPropertyDescriptor

const produto = {nome: 'Produto', preco: 1.8};

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
