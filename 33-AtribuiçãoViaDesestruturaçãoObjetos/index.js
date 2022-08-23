/* 
Atribuição via Desestruturação de objetos:
- A atribuição via desestruturação nos objetos é simples, funciona
    praticamente igual os arrays.
    você cria uma váriavel abrindo chaves e dentro da chaves, você passa
        a chave do objeto que quer atribuir a váriavel e faz ela receber o valor
            do objeto definido:

            Aqui temos o objeto:

            const pessoa = {
                nome: 'Fernando',
                sobrenome: 'Macedo'
            };

            Aqui temos a desestruturação:

            const {nome} = pessoa;

            console.log(nome);

            Observe que o nome passado como váriaveis dentro das chaves, tem que
                corresponder a um nome dentro do objeto pessoa.
                Caso queira o atributo de sobrenome deveriamos criar uma
                desestruturação com objeto sobrenome:

                const {sobrenome} = pessoa;

                ele extrai do objeto a chave com o valor passado dentro 
                    das chaves.

- Para pegarmos mais de um valor de um objeto, podemos passar esses valores
    separados por virgulas, ainda usando o objeto pessoa acima:

        const {nome, sobrenome} = pessoa;

        Agora nome e sobrenome são váriaveis independentes:
            console.log(nome, sobrenome);

- Se o valor a chave do objeto passada dentro das chaves não exista,
    o valor retornado pelo desestruturação sera undefined;

    const {idade} = pessoa;

    console.log(idade); // Undefined
    
    Para corrigir isso, podemos setar um valor padrão para idade no momento
        da desestruturação:

        const {idade = 20} = pessoa;

        console.log(idade); // 20

        Se a chave idade passar existir dentro do objeto, o valor padrão setado
            na desestruturaçap será sobrescrito pelo valor do objeto.

- Podemos também renomear o nome da váriaveis no momento da desestruturação:
    const {nome: usuario} = pessoa;

    console.log(usuario); // Fernando

    A partir de agora, o nome da minha váriavel se chamará usuario, ao inves de
        nome.

- Podemos também fazer desestruturação de objetos dentro de objetos, para isso
    basta escolher o objeto 'filho' dentro do objeto 'pai' e para selecionar
        as chaves de dentro dele, basta passar dois pontos : abrir chaves e
            passar os nomes das chaves que deseja pegar.

            const pessoa {
                nome: 'Fernando',
                sobrenome: 'Marcedo',
                idade: 25,
                endereco: {
                    rua: 'Avenida Brasil',
                    numero: 395
                }
            }
            
            Para desestruturar o objeto endereço que está dentro de pessoa, basta
                fazer isso:

                Selecionamos o objeto endereço, e passamos as chaves que queremos
                    desestruturar.

                const {endereco: {rua, numero}} = pessoa;

                Após isso, as váriaveis 'rua' e 'numero' já podem ser usadas.

                console.log(rua, numero); // Avenida Brasil 395

                Atenção, a váriavel endereço agora para de existir, ela foi
                    desestruturada e suas chaves agora são independentes, sendo
                    elas: 'rua' e 'numero'.

                    Para resolver isso, podemos apenas reutilizar o endereco na
                        hora da desestruturação:

                        const {endereco: {rua, numero}, endereco} = pessoa;

                        Agora o objeto endereco continua existindo e suas
                            chaves continuam independentes.

- Podemos também utilizar o operador de rest, para pegar os restantes dos valores
    e atribuir a outra váriavel, que no caso, resultaria em um nome objeto.
    
    const {nome, ...resto} = pessoa;

    Agora a váriavel nome contem apenas o valor da chave nome e a váriavel resto
        contem todo o restante do objeto, a váriavel resto também é um objeto
            agora.



*/

const pessoa = {
    nome: 'Iarlen',
    sobrenome: 'Reis',
    idade: 20,
    endereco: {
        rua: 'Salomé',
        numero: 5,
    }
};


const {nome, ...resto} = pessoa;

console.log(resto);