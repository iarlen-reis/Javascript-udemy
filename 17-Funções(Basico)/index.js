/*
Aprendendo funções em JavaScript:
- Elas são responsaveis por exercutar ações, geralmente
    mandamos um valor e esperamos receber outro de volta.
- É uma boa praticar fazer com que uma função exerça apenas um
    dever.
- A partir do momento em que o interpretador encontrar a palavra return
    ele vai encerrar a função, ou seja não executar o que está abaixo do
    return
- Se não passarmos os valores dos parâmetros a função vai retornar NaN.
- Podemos passar valores padrões para os parâmentos e esses valores serão usados
    se não enviarem os valores.
*/
// Modo classico de fazer funções:

function somarValores(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = somarValores(2, 5);

// Funções anonimas:
const raiz = function (n) {
    return n ** 0.5;
};

/* Arrowfunctions: 
Se a função retorna apenas um coisa e tem apenas  um parâmetro
podemos deixa-la dessa forma:
*/
// retornando apenas uma coisa e tendo apenas um parâmetro:
const elevadoPorDois = n => n ** 2;

// Arrowfunction normal:

const divisao = (x, y) => {
    return x / y
}

console.log(divisao(10, 2));

