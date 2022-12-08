/*
Herança em classes:
    - Para herdar uma classe para outro você utilizar a palavra
        'extends' na hora de criar a nova classe.
*/

// classe abstrata:
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado != false) {
            console.log(`${this.nome} já ligado!`);
            return
        };

        return this.ligado = true;
    }

    desligar() {
        if (this.ligado != true) {
            console.log(`${this.nome} Já desligado!`);
            return
        };

        return this.ligado = false;
    }
}

// nova classe que vai herdar função da classe abstrata: ele já vai herdar tudo
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) { // podemos criar um construtor para adicionar novos parâmetros
        super(nome) // Usamos a superClasse 'Super' para inicializar a classe que herdamos e passamos o parâmetro que usamos dela.
        this.cor = cor; // Definimos o novo parâmetro que fizemos no constutor
    }
}

const celular = new Smartphone('Samsgung', 'Azul');

console.log(celular);


