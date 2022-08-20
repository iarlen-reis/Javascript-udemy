/* 
Aula 2 - De condições:
-  A partir do momento que o JavaScript encontrar uma condição verdadeira,
    Ele vai executar o bloco e sair da condição.

*/

const numero = 10;


if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não entra entre 9 e 11.')
}