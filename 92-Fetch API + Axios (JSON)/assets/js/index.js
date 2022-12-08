/* 
Fetch API e Axios com JSON:
    - A fetch API vai precisar receber a promise,  e pedir para retornar a
        promise.json()
    - A promise.json() vai retornar outra promise que a agora poderemos
        passar para função ou fazer o que quisermos.

Axios:
    - Já com o axios, recebe a promises e já podemos pedir para retornar já
        com a promise.data(), sendo assim, já podemos ali mesmo passar a
        promise.data para uma função ou fazermos o que quisermos.

*/

// Requisição Json usando fetch:
fetch('pessoas.json')
    .then(resposta => {
        return resposta.json();
    })
    .then(json => carregaElementosNaPagina(json));


// Requisição Json usando Axios:
// axios('pessoas.json')
//     .then(resposta => carregaElementosNaPagina(resposta.data))
//     .catch(error => console.log('ERROR 404!' + error))


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;  
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);     

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
    const resultadoDiv = document.querySelector('.resultado');

    resultadoDiv.appendChild(table);
}


