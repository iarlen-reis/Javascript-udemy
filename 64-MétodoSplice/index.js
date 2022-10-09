/*
Método Splice:
    - Ela consegue faz as mesmas coisas que as seguintes funções faz:
        - pop() | push() | shift() | unshift() |

    - Ela modifica o array original.

    - Ela também retorna os elementos que foram removidos do array, em formato
        de array.

    - Como ela funciona?
        - No primeiro argumento você passa qual indice quero começar a mexer.
        - No segundo argumento você passa quantos elementos quero remover.
        - No terceiro argumento você passa os elementos que você quer adicionar
            ele vai adicionar o elemento a partir do indice que você escolheu.

        const numeros [1, 2, 3, 4, 5];

        numeros.splice(indiceAtual, delete, elementosParaAdicionar)
*/

const nomes = ['Mária', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

nomes.splice(3, 0);

console.log(nomes);
