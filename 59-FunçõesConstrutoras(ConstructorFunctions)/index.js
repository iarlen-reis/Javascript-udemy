/* 
Funções Construtorasv (Constructor Functions):
    - Ela responsavel por criar objetos, assim como a função fábrica.
    - A diferença entre elas, é que ela cria e retorna o objeto automaticamente.
    - Na função construtora precisamos mudar a conversão de como criamos
        nossas funções:
        - Devemos iniciar seu nome sempre com letras maiusculas:
            - Funções normais | funções de fábrica:
                criarPessoa(){

                };

            - Funções construtoras:
                Pessoa(){

                };
            
            Obs: Paramos de utilizar o formato comeCase.
    
    - Para transformar a função em construtora basta adicionar a palavra 'new'
        ao instanciar a função:

        function Pessoa(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        const pessoa1 = new Pessoa('Fernando', 'Henrique');

        console.log(pessoa1) -> {nome:'Fernando', sobrenome:'Henrique'}

        - A função automaticamente retorna um objeto.
    
    - Para criar um método em uma função construtora, podemos utilizar function
        ou arrow function:

            function Pessoa(nome, sobrenome) {
                this.nome = nome;
                this.sobrenome = sobrenome;

                this.falarOi = () => {
                    return `${this.nome} está falando Oi!`;
                }
            }

            const pessoa1 = new Pessoa('Mária', 'Aparecida');

            console.log(pessoa1.falarOi()) -> Mária está falando Oi!

    - Podemos criar atributos privados na função construtora:
        - Para isso basta criar um váriavel usando const ou let:
                
                function Pessoa(nome, sobrenome) {
                    const ID = 1;
                    this.nome = nome;
                    this.sobrenome = sobrenome;

                };
                
                - A váriavel criada só poderá ser usada dentro da função
                    construtora, ficando 'indisponivel' fora dela.
                
                - Isso também pode ser feito com metodo, bastá cria-lo com
                    const:

                    function Pessoa(nome, sobrenome) {
                        const ID = 1;
                        this.nome = nome;
                        this.sobrenome = sobrenome;

                        const disponivelApenasNaFuncao() => {
                            console.log('Estou disponivel apenas dentro da função!');
                        };
                    };
    

*/           

function Pessoa(nome, sobrenome){
    const ID = 1;

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falar = () => {
        return `${this.nome} meu ID é ${ID}`;
    }

}

const pessoa1  =  new Pessoa('Iarlen', 'Reis');
console.log(pessoa1.falar());

