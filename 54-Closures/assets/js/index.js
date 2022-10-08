/* 
Closures:
    - É a habilidade que a função tem de acessar seu escopo léxico.

*/

function retornaFuncao(){
    const nome = 'Iarlen';
    return function(){
        return nome;
    };
};

const funcao = retornaFuncao();
console.dir(funcao);