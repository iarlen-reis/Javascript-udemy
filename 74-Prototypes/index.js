/*
Prototypes:
    - É a base que o JavaScript utiliza para trabalha com 
        orientação a objetos.

    - Para criar um prototype é simples, basta chama a função construtora
        que faz os seus objetos e usar o .prototype.

    - Todos os objetos que vierem da função construtora terá o prototype criado.

    - É interessante utilizar os metodos que fazem a mesma coisa no objeto e
        adiciona-los no prototype da função construtura, assim ocupara menos espaço
        na memoria do cliente.
*/

// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O');
const pessoa2 = new Pessoa('Mária', 'A');

console.log(pessoa1);
console.log(pessoa2);