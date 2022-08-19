/*
Exercicio utilizando funções, objetos e arrays:
- Criar um formulário, onde a pessoa digite:
    - nome, sobrenome, peso e altura.
    - Salvar os válores dentro de um objeto e enviar para um array.
    - Exibir os dados enviados na tela.
*/

function meuEscopo() {
    const form = document.querySelector('.form');
    const content = document.querySelector('.main-content');
    const pessoas = [];
    let cliente = {};

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        cliente = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(cliente);



        let resultado = content.querySelector('p');
        resultado.innerHTML = `Nome: ${cliente.nome} | Sobrenome: ${cliente.sobrenome} | Peso: ${cliente.peso}kg | Altura: ${cliente.altura}`;
        console.log(pessoas);

    }


    form.addEventListener('submit', recebeEventoForm);



}

meuEscopo();