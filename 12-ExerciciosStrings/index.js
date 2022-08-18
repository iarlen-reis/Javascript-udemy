/* 
Praticando conceitos sobre strings.
1- Pedir para o usuário digitar o nome completo e exibir.
2- Exibir as letras do nome do usuário.
3- Informar a segunda letra do nome do usuário.
4- Informar a primeira letra do nome do usuário.
5- Informar a ultima letra do nome do usuário.
6- Informar as ultimas três letras do nome do usuário.
7- Exibir as palavras do nome do usuário.
9- Exibir o nome do usuário com letras maiúsculas.
10- Exibir o nome do usuário com letras minúsculas.
*/

const nome = prompt('Digite seu nome completo:');
document.body.innerHTML = `O seu nome é completo é: <strong>${nome}</strong> <br />`
document.body.innerHTML += `Seu nome tem essas letras: <strong>${nome.length}</strong> letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`
document.body.innerHTML += `Qual o primeiro indice da letra A no seu nome é: <strong>${nome.indexOf('a')}</strong> <br />`
document.body.innerHTML += `Qual o ultimo indice da letra A: <strong>${nome.lastIndexOf('a')}</strong> <br />`
document.body.innerHTML += `As ultimas três letras do seu nome são:<strong> ${nome.slice(-3)}</strong>  <br />`
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')}</strong> <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`
document.body.innerHTML += `Seu nome com letras minúsculas:<strong> ${nome.toLowerCase()}</strong> <br />`

