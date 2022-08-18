/*
Praticando const e let:
    - Crie variáveis com os seguintes valores:
        - nome
        - sobrenome
        - idade
        - peso
        - altura
        - IMC

*/

const nome = 'Iarlen';
const sobrenome = 'Reis';
const idade = 21;
const peso = 60;
const altura = 1.70;
let imc = peso / (altura * altura);
let anoAtual = 2022;
const anoNascimento = anoAtual - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é', imc)
console.log(nome, sobrenome, 'nasceu em', anoNascimento)
console.log()

// Unindo valores com o sinal +:
console.log(nome +' '+ sobrenome +' '+ 'tem' +' '+ idade +' '+ 'anos, pesa' +' '+ peso +' '+ 'kg, tem' +' '+ altura +' '+ 'de altura e seu IMC é' +' '+ imc)
console.log()

// Usando template strings (Forma mais legivel):
console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso} kg, sua altura é ${altura} e seu IMC é de ${imc}.`)
