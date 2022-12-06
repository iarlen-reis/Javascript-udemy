/*
Revisando objetos:
    - Objetos são formados por par: chave e 'valor'.
    - Podemos criar objetos com o construtor new Object().
    - Podemos utilizar delete para apagar alguma chave de um objeto
    - Objetos podem ter metodos, o metodo terá acesso as chaves do objetos
        atrávez da palavra 'this'.
    - Podemos criar model de objetos: Factory Functions e Construtor Functions.
    - Também temos classes para criar models de um objeto em javascript.
    - Podemos utilizar Object.freeze(objeto) para congelar uma objeto e não
        permitir alterações nos valores deles.
*/

// Factory Functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

// Constructor Functions
// {} <- this -> this: Cria um objeto vazio, atrela o this a ele e retorna o this
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Iarlen', 'Reis');


