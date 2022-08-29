/*
Tratamento de erros com try | catch e finally:
- Funciona basicamente igual o try catch:
    O finally é opcional, ele será executado sempre, tendo ou
    não um erro:

    Estrutura com finally:

    try {
        // É executado quando não há erros
    } catch (error) {
        // É executado quando há erros 
    } finally {
        // É executado sempre.
    }

- Podemos verificar se uma váriavel é instancia de uma
    função contrutura:

    Para isso usamos: instanceof

    if (!(data instanceof Date)) {
        console.log('Não é');
    }

    Aqui estamos verificando se o parâmetro passado é uma instacia
        do função Date. Se não for, ele vai exibir 'Não é'.

*/

function retornaHora (data) {
   if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
   }
   if (!data) {
    data = new Date();
   }
   return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
   });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch {
    // Tratar error
}

