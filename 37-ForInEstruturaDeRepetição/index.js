/*
For in em javacript:
- Ele é mais simples que a estrutura for classica.
    for (let i in array) {

    }

    Essa é a estrutura dele, fica bem mais simples que o
    for classico.

    O 'i' faz referência ao indice, logo ele pega automaticamente a
    quantidade de itens dentro array:

    const frutas = ['uva', 'pera', 'banana'];

    for (let i in frutas) {
        console.log(frutas[i]);
    }
        // uva | pera | banana

    Se fizemos apenas console.log(i); ele vai vai exibir apenas os
        indices que aquele array tem.

        no caso ficária assim:
        // 0 | 1 | 2

- Ele lê os indices ou chaves do objeto.

- Utilizado for in com objetos:
    A estruta dele ao ser usado com objetos é a mesmo:

    for (let i in objetos) {
        console.log(i);
    }

    Mas, ao inves dele exibir os indices igual ele faz no array, ele
        vai exibir as chaves do objetos, por exemplo:

        const pessoa = {
            nome: 'Matheus',
            sobrenome: 'Viana',
            idade: 25
        }

        for (let chave in pessoa) {
            console.log(chave);
        }

        // nome | sobrenome | idade

        Ele exibe as chaves do objeto, para exibir o valor dessas chaves
            podemos fazer da seguinte forma:
        
        console.log(pessoa[chaves]); 

        // Matheus | Viana | 25

        Exatamente igual ao array.
 */

const pessoa = {
    nome: 'Iarlen',
    sobrenome: 'Reis',
    idade: 20
}

for (let i in pessoa) {
    console.log(pessoa[i]);
}