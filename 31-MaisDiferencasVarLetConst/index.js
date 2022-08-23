/*
Mais diferenças entre Var, Let e Const:
- As váriaveis criadas com let não podem ser reescritas dentro no mesmo
    escopo. Já as váriaveis criadas com var, podem ser reescritas no mesmo
        escpo.
- Let tem escopo de bloco, mas var só tem escopo de função.
- O javascript sempre vai buscar as váriaveis lets dentro do escopo, se ele
    NÃO encontrar, ele vai buscar fora do escopo.
- Se criarmos uma váriavel usando let no escopo global e criarmos outro váriavel
    com o mesmo nome dentro de outro escopo, a várivavel será criada e não
        redeclarada:
        
    if (verdadeira) {
        let nome = 'Iarlen'; -> Criando uma váriavel;

        if (verdadeira) {
            let nome = 'Miguel'; -> Criando outra váriavel.
        }
    }

- Já com var, a váriavel sempre será redeclarada, ao invés de criada,
    como por exemplo:

    if (verdadeira) {
        var nome = 'Iarlen'; -> Criando uma váriavel;

        if (verdadeira) {
            var nome = 'Miguel'; -> Redeclarando a váriavel.
        }
    }

- As funções tem escopos especiais, elas protegem as váriaveis que estão dentro
    dela:
    - Você pode acessar as váriaveis que estão ao redor da função, mas não
        pode acessar as váriaveis que estão dentro da função, de fora dela.

    - Você pode acessar as váriaveis de uma função dentro de ifs, desde que eles
        façam parte do bloco da função.
    
    - Não podemos utilizar váriaveis criadas com let fora do bloco de onde foi
        criada, mas podemos utilizar se essa váriavel for criada com var.

    - As declarações das váriaveis usando var, são elevadas ao tipo do código,
        o javascript ler a váriavel mesmo ela sendo chamada antes de declarar.
*/




