/*
Aprendendo break e continue em javascript:
- Eles nos ajuda a ter controle de um elemento, como por exemplo:
    pular um elemento e "quebrar" um laço quando quisermos.

- Elas funcionam em todos os laços de repetição.

- Como funciona o continue?
    O continue funciona da seguinte forma, dentro de uma estrutura
        de repetição você quer verificar a condição de algum item e se
            a condição for verdadeira, você quer pular aquele item ou não
                fazer nada com ele:

   const numeros = [1, 2, 3, 4];

    for (let numero of numeros) {
        if (numero === 2) {
            continue;
        }
        console.log(numero);
    }
    
    No caso, ele vai verificar na condição se o numero é igual a 2,
        se o número for igual a 2, ele vai entrar na condição e como
        o continue é um 'Pulador' ou 'ignorado' ele simplesmente vai completar
        o laço e iniciar novamente a partir do proximo numerom sendo assim,
        o número 2 não sera exibido.

        // 1 | 3 | 4 -> Ele pulou o número 2.

- Como funciona o break?
    O break diferente do continue, vai encerrar a estrutura de repetição no
        momento em que o break for encontrado.

    const numeros = [1, 2, 3, 4];

    for (let numero of numeros) {
        if (numero === 2) {
            break;
        }
        console.log(numero);
    }

        // 1 -> O laço de repetição foi finalizado assim que o break
            foi encontrado. 
*/


const numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
    if (numero === 2) {
        break;
    }
    console.log(numero);
}