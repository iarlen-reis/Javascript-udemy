let valor_1 = Number(prompt('Digite um valor:'));
let valor_2 = Number(prompt('Digite outro valor:'));
let operador = prompt('Qual operação deseja fazer?');
10
switch (operador) {
    case '+': alert(`O resultado da soma é: ${valor_1 + valor_2}`);
    break
    case '-': alert(`O resultado da subtração é: ${valor_1 - valor_2}`);
    break
    case '*': alert(`O resultado da multiplicação é: '${valor_1 * valor_2}`);
    break
    case '/': alert(`O resultado da divisão é: ${valor_1 / valor_2}`);
    break
}


