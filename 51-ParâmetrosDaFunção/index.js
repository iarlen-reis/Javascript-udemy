/*
Parâmetro da função:
- Parâmetro podem ser usados para recuperar um valor enviado atravez de
    uma função, quando digitamos um valor dentro de uma função esse
    valor é chamado de argumento.

- Quando definimos uma função com a palavra 'function', o javascript
    no disponibiliza uma váriavel chamada 'arguments'.
    - Nesse 'arguments' ficam salvas todos os argumentos passados via
    função, eles ficam dentro de um objeto.

- Podemos definir um parâmetro com um valor padrão, caso o parâmetro
    não seja enviado, o valor padrão seja usado:

    function funcao(a, b = 1) {
    console.log(a + b);
    }

    funcao(1);  // 2

- Podemos fazer a função usar o valor padrão de um parâmetro, passando o
    argumento desse parâmetro como undefined:

    function funcao(a, b = 1, c) {
    console.log(a + b + c);
    }

    funcao(1, undefined, 20);  // 22

- Podemos fazer associação via desestruturação nos parâmetros com objetos:
    Para isso acontecer devemos desestruturar o objeto nos parâmetro, com o nome
    das chaves existentes no objeto:

    const pessoa = {nome:'Iarlen', sobrenome:'Reis', idade:20};

    function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
    }

    funcao(pessoa); // Iarlen Reis 20

- Podemos fazer associação via desestruturação nos parâmetros com array:
    Para isso devemos desestruturar o array nos parâmetro:

    const pessoas = ['Iarlen', 'Mária', 'Larissa'];

    function funcao([nomeUm, nomeDois, nomeTres]) {
    console.log(nomeUm, nomeDois, nomeTres);
    }

    funcao(pessoas); // Iarlen Mária Larissa

*/

const conta = (operador, acumulador, numeros) => {
    for(let numero of numeros) {
        if (operador === '+') acumulador+= numero;
        if (operador === '-') acumulador-=numero;
        if (operador === '*') acumulador*=numero;
        if (operador === '/') acumulador/numero;
    }
    console.log(acumulador);
}

conta('+', 0, [1, 2, 3, 4, 5]);