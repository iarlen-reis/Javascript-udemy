/*
Aprendendo sobre arrays:
- Podemos adicioanr qualquer tipo de dados dentro de um
    array, porém é uma boa pratica adicionar apenas 1 tipo de dado.
- Arrays também são indexados, podendo acessar um valor dele usado
    array[valor].
- Podemos editar um valor dentro do array usando o index e alterando
    array[0] = 'novo valor'.
- Podemos adicionar um elemento ao array usando o função push(), o valor
    será adicionado na ultima posição do array.
- Podemos saber o tamanho de um array usando o atributo length.
- Podemos adicionar um elemento no começo do array usando a função unshift().
- Podemos remover elementos do array usando a função pop(), ele vai
    remover o elemento do final.
- Podemos usar o shift, para remover o primeiro elemento do array.
- Podemos apagar um elemento do array usando o delete array[indice], o
    elemento será alterado, mas o indice ficará vazio.
- POdemos usar a função slice() para fatiar um array.
*/

const alunos = ['Luiz', 'Mária', 'João'];
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos instanceof Array);
