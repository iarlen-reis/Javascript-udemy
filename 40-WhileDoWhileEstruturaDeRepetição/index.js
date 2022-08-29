/*
Aprendendo while e do while em javacript:
- São estruturas de repetição, porém diferente do laço for
    eles podem ser infinitos.
    
    Diferente do for, a váriavel de controle do while deve ser criada
    fora da estrutura:

    - Estrutura while:
        let controle = 0;

        while (condição) {

        }

    Exemplo:
        let controle = 0;

        while (controle <= 5) {
            console.log(controle); Exibindo o valor do controle.
            controle+=1; Atualizando a váriavel de controle, incrementando
        }                   sempre mais 1 a cada laço.

        // 0 | 1 | 2 | 3 | 4 | 5

        Se a váriavel não for incrementada, o valor da váriavel de controle
            sempre vai ser 0, sendo assim, o laço será infinito.

- O while vai verificar a condição e depois vai executar o código.

- Estrutura do While:
    Ele primeiro executa o código e depois ele verifica a condição.

    do{
        código
        } while(condição);

    Exemplo:

    do {
        cosole.log(controle);
        controle+=1;
    } while(controle < 5);

    // 0 | 1 | 2 | 3 | 4

    Ele primeiro executa, e depois verifica a condição.
    Ele sempre vai executar pelo menos 1 vez.
*/

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);