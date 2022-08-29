/*
Exercicio com for:
    - Pegar todos os paragrafos.
    - Pegar a cor do backgroud do body.
    - Setar a cor do backgroud do body, como cor do
        background dos paragrafos.

- Podemos selecionar todos elementos que contem a mesma classe ou
    o mesmo tipo atráves do querySelectorAll('elemento');

- Para mudar o estilo de um elemento é facil, basta selecionar o elemento
    e acessar o atributo .style dele.

- Mudando o background dos paragrafos:

    for (let p of ps) {
    p.style.background = backgroundColorBody;
    }   

    O mesmo se aplica para a cor, podemos mudar qualquer propriedade CSS atráves
        do atributo style:

        p.style.color = '#FFFFFF';
*/

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const colorWhite = '#FFFFFF';

for (let p of ps) {
    p.style.background = backgroundColorBody;
    p.style.color = colorWhite;

    console.log(p);
}