/*
Função de CallBack:
    - São executadas quando uma a ação finaliza.
    - Podemos definir para que uma função seja executada
        apenas quando uma função for finalizada.
    - As callbacks permitem que várias funções sejam executadas em
        ordem especifica independente de quanto tempo ele demore para
        ser finalizada.
*/

// Função que cria um número inteiro de 1000 a 3000:
function rand(min=1000, max=3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

// função 1:
function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand())
}

// função 2:
function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand())
}

// função 3:
function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Relacionando callbacks:
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        });
    });
});

