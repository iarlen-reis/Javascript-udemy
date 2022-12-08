/* 
Metodos uteis para promises:
    - Promisse.All | Promisse.race | Promisse.resolve | Promisse.reject

    - Promise.all -> Resolve todas as promises e entrega.
    
    - Promise.race -> É igual uma corrida, a primeira promise que resolve
        ele vai entregar o valor.

    - Promise.resolve -> Faz uma verificação se estado e a dependender do estado,
        Entrega uma promesa já pronta.

    - Promise.reject -> Faz uma verificação de estado e a dependender od estado,
        Entrega uma promesa rejeitada.


*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });

}




const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
]

// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     }).catch((error) => {
//         console.log(error);
//     });

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache.');
    }
    return esperaAi('Baixei página', 3000);
};

baixaPagina()
    .then(resposta => console.log(resposta))
    .catch(e => console.log('ERRO: ' + e));