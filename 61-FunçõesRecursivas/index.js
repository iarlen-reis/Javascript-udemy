/* 
Funções Recursivas:
    - É uma função que se chama de volta.
    - Uma função recursiva é quase igual um loop de repetição,
        geralmente você passa um valor maximo que ela vai repetir
        e faz uma verifição se o valor é maior ou igual o valor passado como
        argumento, se for maior ou igual ela para, se for menor, ela incrementa
        a váriavel e 'se chama' novamente.

    function recursiva(max) {
        if (max >= 10) return;
        max++;
        console.log(max);
        recursiva(max);
    }

    recursiva(0) -> Vai começar de 0 e vai até 10, quando chegar em 10 a função
        vai parar de 'auto-chamar' e será finalizada.

recursiva(-10);    


*/

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);