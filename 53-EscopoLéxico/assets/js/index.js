/*
Escopo Léxico:
    - Permite que a função reconheça váriaveis ou qualquer tipo de dado que
    esteja no escopo vizinho.
    - Com isso, podemos acessar de dentro de uma função váriaveis que estejam
    no escopo vizinho dela.
*/

const nome = 'Iarlen';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome();