/*
Revisando o basico de arrays:
    - Podemos criar um array usando o construtor do array:
        - É pouco utilizado, mas funciona da seguinte forma:

            const nomes = new Array('Mária', 'Geisy', 'Jennyfer');

            Usamos a palavra 'new' e em seguida usamos a função construtora
                Array(), dentro passamos os valores do array, igualmente um
                array normal.

    - Arrays tem seus valores passados por referência, isso siginifica que se
        declaramos um array que 'herda' os valores de outro array, os valores
        não serão copiados e sim passados por refência, se alteramos o valor em
        qualquer um dos dois arrays, o valor será alterado nos dois.

        const array1 = [1, 2, 3];
        const array2 = array1;

        const array1[0] = 10;

        console.log(array1, array2) -> [10, 2, 3] Os dois arrays serão afetados.

    - Podemos copiar os valores de um array para outro usando o operador spred:

        const array1 = [1, 2, 3];
        const array2 = [...array1];

        - Agora os valores foram copiados e não 'herdado', sendo assim, o que fizer
        em um array, não afetará o outro.
        - O spred é os 3 pontinho (...);
    
    - Podemos pegar o tamanho do array utilizando o atributo .length:
        
        const array = [1, 2, 3];
        
        console.log(array.length) -> 3
        
    - Podemos remover elementos do array utilizando o .pop():
        - Ele vai remover o ultimo elemento do array:
        - O pop() também retorna o elemento removido, com isso podemos salvar
            o elemento removido em uma váriavel se quisermos.

        const array = [1, 2, 3];
        const removido = array.pop();
        
        console.log(array) -> [1, 2]
        console.log(removido) -> 3

    - Podemos remover um elemento do inicio do array, utilizando o shift(), ele
        vai remover o primeiro elemento do array. Assim como o pop(), podemos
        atribuir o valor removido em uma váriavel também:

        const array = [1, 2, 3];
        const removido = array.shift();
        
        console.log(array) -> [2, 3]
        console.log(removido) -> 1
    
    - Podemos também adicionar elementos no array utilizando o push(), ele vai
        adicionar o valor informado no final do array:

        const array = [1, 2, 3];
        array.push(4);

        console.log(array); -> [1, 2, 3, 4]

    - Podemos adicionar elementos no inicio do array, utilizando o unshift(),
        ele assim como o shift, vai deslocar os indices do array:

        const array = [1, 2, 3];
        array.unshift(0);

        console.log(array); -> [0, 1, 2, 3]
    
    - Podemos fatiar um array, utilizando o slice(), além disso com o slice
        podemos copiar valores do array e atribuir em um novo array:

        const array = [1, 2, 3];

        const novo = array.slice(0, 2); -> vai copiar o 1 e 2 para o novo array.

        console.log(array); -> O array continua intacto [1, 2, 3]
        console.log(novo); -> recebe os valores pega no slice [1, 2];


    - 

*/

const numeros = [1, 2, 3];

const novo = numeros.slice(0, 2);

console.log(numeros);
console.log(novo);
