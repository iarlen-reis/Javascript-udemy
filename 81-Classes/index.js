/*
Classes em JavaScrpt:
    - É praticamente a mesma coisa que uma função construtura,
        fazem a mesma coisa, mas são criadas de formas diferentes.
    
    - Usamos a palavra 'class' para criar uma classe.

    - Existe um metodo da classe opicional, para receber os parâmetro,
        o nome dele é constructor(parâmetros){ }.

    - Na hora de instanciar um classe, devemos utilizar a palavra 'new'.

    - Para se criar um metodo na classe é facil, podemos definir o nome, a classe
        já são linkados no prototype da classe, sendo mais pratico.

    - 

*/

// Definindo a classe
class Pessoa {
    constructor(nome, sobrenome) { //Definindo os contrutores com os parâmetros.
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // Definindo uma função falar, eles já estão sendo atrelados ao protype.
        console.log(`${this.nome} está falando!`);
    }
}

// Instanciado a classe
const p1 = new Pessoa('Iarlen', 'Reis');

console.log(p1.falar());