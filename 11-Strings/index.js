/*
As strings são indexadas:
    - os index começar em 0, sendo a primeira letra da string.
        Use colchetes para pegar o index de um elemento.
        Exemplo: umaString[0]
    - Podemos utilizar charAt() para verificar o elemento de uma
        determinada posição.
        umaString.charAt(0)
    - Podemos ultilizar a função concat() para concatenar um
        texto na string.
    - Podemos pesquisar o index de uma palavra, usando a função
        indexOf(letra).
        - Podemos o usar o lastIndexOf(letra), que faz a mesma coisa, mas
            começando de trás para frente.
    - Podemos fazer expressões regulares na string, como por exemplo,
        usando o match().
    - Podemos usar o replace, para encontrar uma determinada palavra ou letra e
        alterar ela.
    - Para saber o tamanho de uma string, você pode usar o atributo lenght.
    - Podemos "fatiar" uma string usando a função slice(inicio, fim).
    - Podemos dividir uma string em várias partes a partir de um determinado
        caracter, para isso, usamos a função split('caracter').
    - Podemos deixar uma string totalmente em letras maiusculas usando a 
        função toUpperCase() ou totalmente minuscula usando o toLowerCasa().


*/

let umaString = 'Um texto';

console.log(umaString.toUpperCase());