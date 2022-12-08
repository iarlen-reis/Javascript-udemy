/*
Aprendendo a usar Async e AWait em Promises:
    - Definimos uma função com a palavra async.
    - E dentro da função, quando formos executar algo que seja uma promise,
        usamos a palavra await, e a função vai esperar automaticamente essa
        promise ser resolvida antes de ir para a proxima.
    - Podemos utilizar um try e catch para tratar um erro globalmente ao executar
        a funçã ou podemos adicionar um catch() a cada promises.

    - Se optar pelo try e catch global, ele vai executar a função até encontrar o erro,
        quando encontrar ele vai ir para o catch.

    - async ->  Diz que aquela função é assincrona.
    - await -> Pede para a função aguardar o retorno da promise para prosseguir.

        */ 

function rand(min=0, max=3) {
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

// codigo sem Async / Await
// esperaAi('Frase 1', rand(0, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2', rand(0, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 3', rand(0, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch(e => {
//         console.log(e);
//     })

// função com async
async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi(22222, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Frase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
    

}

executa();

