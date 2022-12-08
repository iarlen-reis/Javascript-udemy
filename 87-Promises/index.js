/*/
Aprendendo promises com JavaScript:
    - É a forma de fazer o javascript esperar uma função  executar e
        esperar independente do tempo que ela demore.

    - Na função que sabemos que vai demorar utilizamos a palavra new e chamamos o
        construtor do Promise().

    - Dentro dele passamos uma arrowFunction com os paramêmtros resolve e reject.

    - Resolve, siginifica que codigo foi executado com sucesso.

    - junto com a promise, usando then() e catch(), ambos recebem uma ArrowFunction.

    - O then, será usado no final da função que sabemos que vai demorar, ele vai
        receber uma 'resposta' da função que virá do resolve.
        
    - Podemos encadiar quantos then quisermos, e o proximo then só será executado,
        quando o then anterior tiver terminado (igualmente uma callback).
    
    - Ao usarmos o reject(resposta), ele irá cair diretamente no catch caso aquela
        verificação seja verdadeira.
    
    - Usamos o catch para 'tratar' algum erro ou promessa rejeitada duramente a execução. 

    - Promisses trabalham em paralelo, ele vai executando o restante dos codigos.
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });

}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os resultados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Exibindo resultados na tela', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch((resposta) => {
        console.log(resposta);
    });
