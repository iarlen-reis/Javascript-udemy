/*
Aprendendo Fetch API:
    - Definimos uma fetch() e passamos a url como parâmetro.
    - O que retorna da fetch é uma promise, então usamos then() para pegar a
        promise resolvida.
    - No primeiro then, podemos verificar o status da promise e retornar ela para
        o proximo then.
    - No segundo then, podemos simplesmente mandar ela para o destino final.
    - Por ultimo, usamos um catch() para previnir qualquer erro.

*/

document.addEventListener('click', event => { // função para verificar o clique no elemento.
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();

   if (tag === 'a') {
    event.preventDefault();
    carregaPagina(elemento);
   }
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');
   
    try {
        const promise = await fetch(href);

        if (promise.status !== 200) throw new Error('ERROR 404 NOSSO!'); 
        
        const promiseResolvido = await promise.text();
    
        carregaResultado(promiseResolvido);
    } catch(error) {
        console.log(error);
    }


}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
