/*
Valores primitivos e valores por referencias:
- Primitivos: strings, number, boolean, undefind, null (bigint, symbol).
    Dados primitivos são imutaveis.

- Podemos copiar um dado primitivo para outro dado:
    let a = 'A';
    let b = a;   A váriavel b copia o valor da váriavel a.
    porém, após copiar, o valor da váriavel b, vai ser independente da
    váriavel a.
-  Dados por Referência:
    - geralmente são mutaveis, como, por exemplo:
        Arrays, Objetos e funções.
    
    - Os valores são obtem a mesma referência na memoria, exemplo:
        let a = [1, 2, 3];
        let b = a;
        a.push(4); Ambas váriavel serão afetadas e acrecestarãoo valor 4.
    
    - Para evitar isso, podemos usar operadores ternários, exemplo:
        let a = [1, 2, 3];
        let b = [...a]; Agora os válores de a foram copiados e não passados como
        referência.
- 
*/

const pessoa = {
    nome: 'Iarlen',
    sobrenome: 'Reis'
};

const pessoa2 = {...pessoa};
pessoa.nome = 'Marcelo';
console.log(pessoa, pessoa2);