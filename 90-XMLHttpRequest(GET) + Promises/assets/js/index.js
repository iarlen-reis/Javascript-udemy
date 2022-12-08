/*
Aprendendo requisições AJAX:
*/

// Criamos uma arrowFunction que recebe um objeto
const request = obj => {

    return new Promise((resolve, reject) => { // Usamos promises para poder pegar a promesa resolvida ou rejeita-la.
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {   // fazendo um addEventListener para poder verificar o status da requisição
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // Se for 200 o status, eu resolvo a promesa.
            } else {
                reject(xhr.statusText); // se não for 200 eu rejeito a promessa.
            }
        });
    })
};

document.addEventListener('click', event => { // função para verificar o clique no elemento.
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();

   if (tag === 'a') {
    event.preventDefault();
    carregaPagina(elemento);
   }
});

async function carregaPagina(elemento) { // função que vai carregar a pagina e extrair os dados.
    const href = elemento.getAttribute('href');
   
    const objetoConfig = { // Definindo a configuração do objeto.
        method: 'GET',
        url: href,
    };

    try {
        // Definindo a função como await, para esperar o retorno da promessa resolvida.
        const response = await request(objetoConfig); // mandando o objeto para a função request, criada lá em cima.
        carregaResultado(response); // passando a resposta da promessa para a função que exibe o resultado na div.     
    } catch (error) {
        console.log(error);
    }

}

function carregaResultado(response) { // Recebendo a promessa já resolvida do then e exibindo ela na div. 
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}