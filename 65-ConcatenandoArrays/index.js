/*
Concatenando Arrays:
    - Para concactenar dois arrays, podemos usar o metodo concat(),
        ele é um metodo do array, que permite juntar um array no outro:

        const numeros = [1, 2, 3];
        const numeros2 = [4, 5, 6];

        numeros.concat(numeros2);
        console.log(numeros) -> [1, 2, 3, 4, 5, 6];
    
    - Isso também pode ser feito com spread (...):
        
        const numeros = [1, 2, 3];
        const numeros2 = [4, 5, 6];

        const juntandoNumeros = [...numeros, ...numeros2];

        console.log(juntandoNumeros); -> [1, 2, 3, 4, 5, 6]

*/

const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6];

const novo = numeros.concat(numeros2);

console.log( typeof novo);