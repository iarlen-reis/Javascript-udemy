/*
Operador ternário em JavaScript:
- ?:
- Usado quando necessário apenas um if e else.
- Passamos um variável que vai receber a expressão, e a condição que queremos
    checkar: (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
        const Maiorque = 1>= 1? 'Si, é igual.' : 'Não, é diferente';
*/


// Com operadores ternários:
const pontuacaoUsuário = 900;
const nivelUsuario = pontuacaoUsuário >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

/*
Com if e else:

if (pontuacaoUsuário >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal.')
}
*/

// usando um valor padrão ou um selecionado pelo usuário:
const corUsuario = 'Rosa';
const corPadrao = corUsuario || 'Azul';
console.log(corPadrao);