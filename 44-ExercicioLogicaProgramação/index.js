/*
Exercicio - 03
    Escreva uma função que recebe um número e retorne a
        seguinte coisa:
        Número divisivel por 3 = Fizz
        Número divisivel por 5 = Buzz
        Número divisivel por 3 e 5 = FizzBuzz
        Número NÃO é divisivel por 3 e 5 retorne o proprio número
        Checar se o número pe realmente um número, se não for retorne o que recebeu
        Use a função com números de 0 a 100.
*/

// const fizzBuzz = (numero) => {
//     if (isNaN(numero)) {
//         return numero;
//     }
//     if (numero % 3 === 0 && numero % 5 === 0) {
//         return 'FizzBuzz';
//     } else if (numero % 3 === 0) {
//         return 'Fizz';
//     } else if (numero % 5 === 0) {
//         return 'Buzz';
//     } else {
//         return numero;
//     }
// }

const fizzBuzz = (numero) => {
    if (isNaN(numero)) {
        return numero;
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return numero;
    }
}

const gerarNumero = () => {
    let min = 0;
    let max = 100;

    return (Math.random() * (max - min)).toFixed(0);
}
     

console.log(fizzBuzz(gerarNumero()));
