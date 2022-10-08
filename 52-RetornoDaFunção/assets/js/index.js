/* 
Retorno da função:
- Return:
    Ao utilizar a palavra 'return' a função retorna um valor e termina.
*/

// Está retornando o valor da soma.
function somar(a, b){
    return a + b;
}

// Está apenas exibindo o valor da soma;
function somar2(a, b){
    console.log(a + b);
}

// Função que cria e retorna um objeto.
function criarPessoa(nome, sobrenome, idade){
    return {nome:nome, sobrenome:sobrenome, idade:idade};
}

// Função que retornar outra função e essa função retornada executa algo:
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    };
    return falaResto;
};

const olaMundo = falaFrase('Olá');
//console.log(olaMundo('mundo!'));

// Função de duplicar um número:
function multiplicarNumero(n){
    function retornarNumeroMultiplicado(valor){
        return n * valor;
    }
    return retornarNumeroMultiplicado;
}

const numero = multiplicarNumero(2);
console.log(numero(4));