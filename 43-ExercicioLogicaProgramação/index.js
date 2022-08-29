/*
Exercicio - 02
    Escreva uma função chamada ePaisagem que recebe
    dois parêmetros: largura e altura de uma imagem (number).
    Retorne true se a imagem tiver no modo paisagem.

*/

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1280));