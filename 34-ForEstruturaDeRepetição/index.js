/*
Aprendendo o tradicional FOR emjavascript:
- Estrutura de repetição é simplesmente uma forma de repetir algo,
    sem ter que necessariamente repetir o código.
- O esqueleto do for é praticamente igual o de uma função ou de um if, 
    você usar na nomeclatura for abre e fecha parenteses e abre e fecha as
    chaves.

    for () {

    }

- O for tem que receber três parâmentos:
    1. Uma váriavel de controle.
    2. Uma condição.
    3. Incrementar ou decrementar a váriavel.

    Para separar os parâmetros dentro do for, se usa ponto-virgula (;),
    a estrutura ficaria assim:

    for (variavel; condição; imcrementador/decrementador) {

    }

- Sempre que a condição for avaliada como verdadeira, o javascript vai continuar
    executando o laço, podemos imagina o for como uma linha que vai de um lado,
    a outro:

    Ponto 1 <--------> Ponto 2

    Assim que o for é inicializado ele verifica se a condição é verdadeira,
        se a condição for verdadeira, ele sai do ponto 1, vai para o ponto 2,
        ao chegar no ponto 2, ele retorna para o ponto 1 e checka novamente se
        a condição é verdadeira, se ele for verdadeira, ele continua mais uma
        vez. A partir do momento que a condição se tornar falsa, o laço de
        repetição é finalizado.

- Assim ficaria um for de 0 até 5:

    for (let i = 0; i <= 5; i+=1) {
        console.log(i);
    }

    A variavel i é inicializada com o valor 0, a cada volta do for ele vai 
    checkar e incrementar o valor de i com + 1 e exibir o valor no terminal.

    // Terminal:
        1 | 2 | 4 | 5

- Podemos também inicializar a váriavel com um valor negativo, ele vai começar
    do valor negativo e ir até o valor definido pela condição:

    for (let i = -5; i<=0; i+=1) {
        console.log(i);
    }

    // terminal: 
        -5 | -4 | -3 | -2 | -1 | 0

- Podemos também incrementar o valor com mais de 1, basta no incrementar definir
    o valor que quiser incrementar na váriavel:

        for (let i = 0; i<=20; i+=10) {
        console.log(i);
    }

    // terminal:
        0 | 10 | 20

- Podemos também decrementar um valor, como por exemplo:
        for (let i = 5; i>=0; i-=1) {
        console.log(i);
    }

    // terminal:
        5 | 4 | 3 | 2 | 1 | 0

    A cada laço de repetição, esta sendo extraido 1 do valor da váriavel,
        até ela chegar ao valor definido pela condição.

*/

// checkando se um valor é par ou impar:

// for (let i = 0;  i <= 10; i+=1) {
//     const par = i % 2 == 0 ? console.log(`${i} é PAR`) : console.log(`${i} é IMPAR`)
// }

// Percorrendo um array com for:

const listaFrutas = ['Banana', 'Maça', 'Goiaba', 'Uva'];

for (let i = 0; i < listaFrutas.length; i+=1) {
    console.log(listaFrutas[i]);
}