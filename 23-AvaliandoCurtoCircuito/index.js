/*
Avaliação de curto circuito:
    Usando &&:
        - Se o javascript encontrar um valor que retorna falso na expressão
            ele vai retornar o valor falso.
        - Se ele não encontrar nada falso, ele vai retornar o ultimo valor checkado.
    
    Usando ||:
        - Se o javascript encontrar um valor que retorna verdadeiro na expressao, ele vai
            retornar o valor verdadeiro.
        - Se ele não encontrar nenhum valor verdadeiro, ele vai retornar o ultimo valor
            falso checkado.

    -  Valores que avaliam em falso:
    - *false | 0 | '' | null | undefined | NaN
*/



const a = 0;
const b = null;
const c = false;
const d = 'false';
const e = NaN;

console.log(a || b || c || d || e);