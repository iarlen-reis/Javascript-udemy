/* 
Factory Functions:
    - São funções que retorna um objeto.

    - Para acessar um chave dentro de um objeto usamos
        a palavra 'this'.

    - Assim podemos criar um metodo dentro de um objeto e acessar as chaves
        pelo metodo:

        function criarPessoa(nome){
            return {
                nome,
                idade,
                falarOi: function(){
                    return `Olá meu nome é ${nome}`; -> Estou acessando o parãmetro nome, que foi passado via argumento.
                }
                falarIdade: function(){
                    return `Olá, minha idade é ${this.idade}`; -> Estou acessando a chave 'idade' do objeto. 
                }
            };
        }
    - O 'this' sempre vai se referir a quem chamou o objeto.

    - Ao usar a palavra 'get' a frente de um metodo de um objeto, ele começará
        a se comportar como um atributo:

        const pessoa = {
            nome: 'Fernando',
            get idade(){
                console.log(30);
            }
        };

        Para acessar o metodo idade dentro do objeto pessoa, antes seria 
        necessário fazer isso:

        pessoa.idade(); -> Ele vai exibir a idade da pessoa.

        Agora que utilizamos a palavra 'get' na frente do metodo, podemos
        chama-lo igual um atributo normal:

        pessoa.idade -> Ele vai exibir a idade da pessoa.

        Obs: Isso é chamado de Getter.
    
    - Também existe o Setter, onde podemos setar|modificar o valor de um 
        Atributo:

        Definimos o nome igual a metodo, mas ao inves de usar a palavra get
        usamos a palavra 'set':

            function criarPessoa(nome, sobrenome, idade){
                return {
                    nome,
                    sobrenome,
                    idade,
                    get nomeCompleto(){
                        return `${this.nome} ${this.sobrenome}`;
                    },
                    set nomeCompleto(valor){
                        valor = valor.slipt(' ');
                        this.nome = valor.shift();
                        this.sobrenome = valor.join(' ');
                        }   
                    }
                };
            };
        };
        };


       Agora se quiser modificar o nome, podemos fazer dessa forma:
       
       const pessoa = criarPessoa('Alissa', 'Darah');

       pessoa.nome = 'Mária';

       console.log(pessoa.nomeCompleto) -> Vai exibir 'Mária Darah'

       Isso acontece por causa do 'set', ele permite alterar atributos do objeto.

       Obs: Para se usar o 'set' é necessário ter existir um get e o nome do set
        deve ser o mesmo que o do get.

    - Resumindo Factory Function:
        - A factory é uma fábrica, onde criamos um modelo de um objeto que nos
            vai permitir instanciar esse objeto quantas vezes quisermos, com
            atributos independentes, cada objeto tem seus proprios valores para
            atributos.





*/  
// Factory Function:
function criarPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,
        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}`
        },
        falarPeso: function (){
            return `Meu nome é ${nome} e meu peso é ${peso}Kg.`
        },
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return `Olá ${nome}, seu IMC é ${indice.toFixed(2)}`;
        },
        get pegarNomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set pegarNomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }

    }
};

const p1 = criarPessoa('Iarlen', 'Reis', 1.75, 60);

console.log(p1.pegarNomeCompleto);



