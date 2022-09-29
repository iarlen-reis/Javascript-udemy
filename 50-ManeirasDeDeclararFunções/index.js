/*
Relembrando maneiras de declarar uma função: 
- Usando a palavra function (Function hoisting).
    Function hoisting é quando o javascript eleva a declaração das
    funções e váriavel. Assim podemos chamar a função tanto depois de
    definir, quanto antes de definir.

-  Funções são frist-class-objects (Objetos de primeira classe):
    Isso siginifica que podemos definir uma função como dado de uma
    váriavel. Também podemos passar uma função como parâmetro de outra
    função.

- Arrow Function:
    É uma function expression só que mais curta, Ela também é uma função
    de primeira classe.

- Podemos passar uma função dentro de um objeto:
    Dessa forma, definimos um objeto e uma chave, no valor dessa
    chave definimos uma função:

    const objeto = {
    falar: function () {
        console.log('Estou falando..');
        }
    }

    Podemos também criar uma função sem precisar definir a palavra
    function e sem os dois pontos, a função acima ficaria assim:

    const objeto = {
    falar() {
        console.log('Estou falando..');
        }
    }



*/

// Function:
function falaOI() {
    console.log('Oie');
}

// Arrow Function:
const arrowFunction = () => {
    console.log('Sou uma ArrowFunction!');
}


// Dentro de um objeto:
const objeto = {
    falar() {
        console.log('Estou falando..');
    }
}
