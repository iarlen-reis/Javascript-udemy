/*
Getters e Setters em classes:
    - Ideal para criar propriedades privados da classes, onde apenas
        poderá ser alterado na classe e não fora dela.
    
    - Podemos usar Symbol() para criar um 'atributo' unico.
*/



// Criando um atributo unico (privado):
const _velocidade = Symbol();

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // associando o atributo dentro da classe.
    }

    acelerar() {
        if (this[_velocidade] >= 100) return; //manipulando o atributo.
        this[_velocidade] +=1;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade] -=1;
    }

    get velocidade() { // Criando um getters para caso o atributo seja chamado fora da classe.
        return this[_velocidade];
    }

    set velocidade(valor) { // Criando setter para verificar o parâmetro enviado e alterar o atributo.
        if (typeof valor != 'number') return;
        if (valor >= 100 || valor <= 0) return;

        return this[_velocidade] += valor;
        
    }
}

const carro1 = new Carro('Corolla');

// for(let click = 0; click <= 200; click++) {
//     carro1.acelerar();
// }


// Criando classe pessoa
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    };

    // Definindo um get para pegar o nome completo
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    };

    // Definindo um set para setar um nome completo fora da classe
    set nomeCompleto(valor) {
        if (typeof valor != 'string') return;

        let nomeCompleto = valor.split(' ');

        this.nome = nomeCompleto.shift();
        this.sobrenome = nomeCompleto.join(' ');

        return this.nome + this.sobrenome;
    };

    // Criando um get para pegar a idade;
    get pessoaIdade () {
        return this.idade;
    }

    // criando um set para difinir uma idade que não pode ser menor de 18, fora da classe
    set pessoaIdade (valor) {
        if(typeof valor != 'number') return;
        if (valor < 18) return;

        this.idade = valor;
    }

}

const p1 = new Pessoa('Iarlen', 'Reis', 20);


