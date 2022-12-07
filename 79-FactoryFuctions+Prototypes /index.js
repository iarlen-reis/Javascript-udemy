/*
Factory Functions e Prototypes:
*/

// Criamos a função factory com herança:
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = { // Definimos um prototype dentro da factory.
        falarOi() {
            console.log(`${this.nome} está falando oi!`);
        },
    }
    // Retornando um objeto create com o prototype criado na factory.
    return Object.create(pessoaPrototype, { 
        nome: { // Passamos uma as chaves e valores dentro da descrição.
            value: nome,
            enumerable: true,
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        }
    });
}


const p1 = criaPessoa('Iarlen', 'Reis');

// Desacoplando metodos com composição:

// Criamos os metodos fora da factory sem herança:
const ligar = {
    ligar() {
        console.log('Controle ligado!');
    },
}

const desligar = {
    desligar() {
        console.log('Controle desligado!');
    },
}

const controleDetalhes = {
    controleDetalhes() {
        console.log(`Marca: ${this.marca} | Cor: ${this.cor}`);
    },
}

// Definimos o prototype do objeto fora da factory e fazendo spread com os metodos dentro dele:
const controlePrototype = {...ligar, ...desligar, ...controleDetalhes}


// Criamos a função Factory:
function criaControleRemoto(marca, cor) {

    // Retornando o Object.create() passando o prototype criado lá fora como primeiro parâmetro.
    return Object.create(controlePrototype, {
        marca: {    // Fazendo a descrição dos  atributos no segundo parâmetro.
            value: marca,
            enumerable: true,
        },
        cor: {
            value: cor,
            enumerable: true
        }
    });
}

// Criamos a instancia do objeto:
const tv = criaControleRemoto('Samsung', 'Vermelho');

// E já podemos usar os metodos desaclopados.
console.log(tv);
tv.controleDetalhes();

