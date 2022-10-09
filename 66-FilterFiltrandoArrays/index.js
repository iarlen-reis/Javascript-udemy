/*
Filter (Filtrando o array):
    - Ele faz exatamente o que o nome diz, filtra valores dentro de
        um array.

    - Sempre vai retornar um array com a mesma quantidade elementos ou menos.

    - Como funciona?
        - Para utilizar o filter(), você deve utilizar uma função anonima dentro
            dele, dentro da função você faz a verificação e retorna o valor que
            quiser.
        
        - A função anonima recebe automaticamente 3 parâmetro:
            - Valor: O valor que a função terá a cada iteração no array.
            - Indice: O indice do valor atual do array.
            - array: O valor completo do array, ou seja o array inteiro.

            - Suponha que quero criar um novo array apenas com os números maiores
                que 10:
            
                const numeros = [10, 2, 30, 4];

                const novoArray = numeros.filter((valor) => {
                    return valor > 10;
                }

                console.log(novoArray); -> [10, 30]
    
    - Para sabermos a qual a ultima letra de uma string, podemos usar a função
        .endsWith('letra');

*/

// Retorne os números maiores que 10.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];

const numerosMaioresQueDez = numeros.filter(valor => valor > 10);

//console.log(numerosMaioresQueDez);

/*
Retorne as pessoas que tem o nome com 5 letras ou mais.
Retorne as pessoas com mais de 50 anos.
Retorne as pessoas cujo nome termina com 'a'.
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const arrayFiltrado = pessoas.filter((valor) => {
    if(valor.nome.length >= 5 && valor.idade > 50 && valor.nome.toLowerCase().endsWith('a')){
        return valor;
    }
});

console.log(arrayFiltrado);
