/*
For Each - iteração em arrays:
    Ele é apenas disponivel em arrays.
*/

let acumador = 0;

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(
    (valor, indice, array) => {
        acumador+= valor;
    }
);

console.log(acumador);


