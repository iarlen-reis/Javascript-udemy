/*
Praticando mais sobre number e Math:
    - Criar um prompt perguntando um número para o usuário.
    - Escrever no html a raiz quadrada desse número.
    - Escrever no html se o número é inteiro ou não.
    - Escrever no html o arredondamento desse núemro para baixo.
    - Escrever no html o arredondamento desse núemro para cima.
    - Escrever no html o número com duas casas decimais.

Minha resolução:

const numero = Number(prompt('Digite um número: '));

document.body.innerHTML += `<h1>Seu número é: ${numero}</h1>`;
document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}<br>`;
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}<br>`;
document.body.innerHTML += `Arrendodando para baixo: ${Math.floor(numero)}<br>`;
document.body.innerHTML += `Arrendodando para cima: ${Math.ceil(numero)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br>`;

Resolução do professor:
- Para pegar um elemento do html use o getElementBy(elemento);
*/

const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML  = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O número é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
