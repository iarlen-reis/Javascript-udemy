/* 
Exercicio para fixar o aprendizado sobre for:
- Criar uma arrays com alguns objetos dentro:
    Um objeto paragrafo, um objeto div, um objeto footer e
    um objeto section.

- Esses objetos devem ser tags html, que serão criadas e inseridas no
    html através do javascript:

- O que devemos fazer?
    1. Criar e inserir um div dentro da section container.
    2. Criar um paragrafo e inserir dentro da div.
    3. Cria uma footer e inserir abaixo do paragrafo.
    4. Criar uma section e inserir abaixo do footer.
*/

function escopoPrincipal () {
    const container = document.querySelector('.container');
    const containerJs = document.createElement('div');
    container.appendChild(containerJs);
    
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ];

    function desestruturarElementos (elemento) {
        for (let i = 0; i < elemento.length; i+=1) {
            
            const {tag, texto} = elemento[i];
    
            criarElementoTexto(tag, texto);
        }
    };
    
    function criarElementoTexto (tag, texto) {
        let elemento = document.createElement(tag);
        elemento.innerHTML = texto;

        adicionarElementos(elemento);

    }

    function adicionarElementos(elemento) {
        containerJs.appendChild(elemento);
    };

    desestruturarElementos(elementos);
}

escopoPrincipal();
