/*
Aprendendo Estrutura de dados map em objetos:
    - É excelente para manter a ordem de inserção dos objetos.
    - Para definir um item dentro do map usando set(chave, valor).
    - Podemos buscar item dentro do map atravez do get(chave).
    - Podemos deletar atravez do variavel.delete(chave).

    È basicamente um objeto, onde muda a forma como pegamos e colocamos
        itens dentro.
*/

/*
Tentando criar um novo objeto, com o id sendo chave e id + nome
    o valor: 3: { id: 3, nome: 'Luiz' }

    Poŕem o javascript adiciona o valor da chave como string, sendo
    assim, perdemos a ordem que estava antes, agora sendo ordenado por
    ordem crescente.

const novasPessoas = {};

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);
*/

// solução com Estrutura map

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Mária'},
    {id: 1, nome: 'Helena'},
];

// Definimos o objeto novo como um new Map();
const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa}); // Usamos set para definir a chave e o valor.
};

// Para pegar um valor especifico dentro do map, podemos usar o get(chave):

console.log(novasPessoas.get(2)); // { id: 2, nome: 'Mária' }

for (const chaves of novasPessoas) {
    console.log(chaves);
}