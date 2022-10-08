/* 
Funções Geradoras:
    - Ela tem a função de gerar coisas alternadas, como pro exemplo,
        preciso que a função me gere 3 números, mas apenas quanto eu chama-la:
        - Vamos supor:
            Eu quero me a função me retorne os números 3, 6 e 9, mas não tudo
            de vez, ai entra as funções geradoras, eu posso executa-la e ela me
            entregar o número 3, e quando quiser o número 6, basta executa-la
            novamente e assim para o número 9 também.
    
    - Para criar uma função geradora devemos adicionar um * no final da
        palavra function:

        function* geradora(){

        }
    
    - Para informar qual valor queremos obter a cada execução usamos a
        palavra yield, ela funciona como se fosse um return, mas ao inves de parar
        a execução, ela só returna o valor informado e quando chamamos novamente
        ela passar para o proximo valor:

        function* geradora(){
            yield 3;
            yield 6;
            yield 9;
        }
    
    - Para usamos a função geradora, devemos instancia-la e chama-la usando o
        .next(), assim ela vai exibir o valor atual do gerador em formato de
        objeto:

        const gerador = geradora();
        console.log(gerador.next()) -> { value: 'Valor 1', done: false }

    - Para acessar esse valor, basta usar .value no final do next():
        console.log(gerador.next().value) -> Valor 1
    
    - Agora se chamamos essa função novamente, ela vai passar para o valor 2 e
        assim por diante:

        console.log(gerador1.next().value); -> Valor 1
        console.log(gerador1.next().value); -> Valor 2
        console.log(gerador1.next().value); -> Valor 3
    
    - Também podemos iterar nos geradores como se fosse um iteravel, usando o
        laço de repetição for of.

    - Podemos interligar várias funções geradoras uma na outra, basta no yield
        da função ao inves de passar um valor, passarmos outra função geradora.

    - Podemos colocar uma função diretamente no yield, assim quando chamada a
        função geradora vai executar a função que está no yield e assim por diante.

    - Se usarmos return no lugar do yield, a função geradora vai retornar o valor
        e vai parar.
        */

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const gerador1 = geradora1();

console.log(gerador1.next().value);
console.log(gerador1.next().value);
console.log(gerador1.next().value);