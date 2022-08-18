/*
Aprendendo mais sobre números.

- Podemos utilizar o função .toString() para tranformar um número
    temporariamente ou permanentemente em uma string.
- Podemos ultilizar a função toFixed() para arendondar um número
    e escolher quantas casas decimais ele vai ter.
- Podemos verificar se um número é inteiro usando o metodo
    Number.isInteger(var).
- Podemos verificar se uma conta é NaN usando o metodo
    Number.isNaN(var).
- 
*/

let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100;


console.log(num1);
console.log(Number.isInteger(num1));