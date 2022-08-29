/*
Aprendendo for of em javascript:
- Ele é especifico para objetos iteraveis:
    Strings | Arrays ou seja, qualquer coisa que seja iteravel e tanha
        indices.
- Sua estrutura é facil:
    for (let valor of iteravel) {
        console.log(valor);
    }

- Iterando sobre uma string usando for of:
    const nome = 'João';

    for (let valor in nome) {
        console.log(valor);
    }

    // J | o | ã | o

    Como podemos ver, ele vai iterar sobre a várivavel nome e vai
        exibir cada letra dela. Diferentes dos outros for que aprendemos
        o for of não precisamos passar o indice 'i', ele já vai nos dá o valor
        na variavel que definimos.

- Além disso, o proprio array tem um for, ele se chama forEach.
    Usando forEach diretamente no array:

    Estrutura do forEach:

    .forEach(function (elemento, indice) {
        console.log(elemento, indice)
    })

    A estrutura dele pode paracer um pouco complexa, mas não é, 
        para  se usar o forEach() você precisar passar uma função
        como parâmetro:

        function () {

        }

    Dentro dessa função, podemos passar 2 parâmetros, sendo um deles
        opcional:
        parâmetro:
            elemento - É cada elemento iterado pelo forEach, sendo ele
                o valor do elemento em si.
            indice - É o indice que aquele elemento ocupa na lista.
    
    Exemplo: 
    const nomes = ['Alana', 'Larissa', 'Maria'];

    nomes.forEach(function (elemento) {
        console.log(elemento);
    }); 
        // Alana | Larissa | Mária

    Caso passarmos o indice também, ele será exibido junto com o elemento:

        nomes.forEach(function (elemento, indice) {
        console.log(elemento, indice);
    }); 
        // Alana 0 | Larissa 1 | Mária 2

    caso quisermos recuperar o valor do array, podemos passar outra
    váriavel como parâmetro:

        nomes.forEach(function (elemento, indice, array) {
        console.log(elemento, indice, array);
    }); 
        // Alana 0 | Larissa 1 | Mária 2 | ['Alana', 'Larissa', 'Maria']
            
*/

const nomes = ['Iarlen', 'Fernanda', 'Larrisa'];

// for (let valor of nome) {
//     console.log(valor);
// }

nomes.forEach(function (valor, indice) {
    console.log(valor, indice);
});