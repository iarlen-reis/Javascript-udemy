/*
Condições em JavaScript:
- Serve para desviar o fluxo da aplicação quando necessário.
- Sempre que utilizo a palavra "else", preciso de um if antes.
- Posso ter quantos else if quiser.
- Só posso ter apenas 1 else na condição.
- Podemos utilizar condições com apenas "if" e "else", ou apenas com
    "if", se o "else" não for necessário.
*/

/*
Sistema usando condições:
- Entre 0  - 11 -> Bom dia
- Entre 12 - 17 -> Boa tarde
- Entre 18 - 23 -> Bom dia

const hora = 44;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!')
};

*/

const tenhoGrama = true;

if (tenhoGrama) {
    console.log('Vou sair de casa.');
};