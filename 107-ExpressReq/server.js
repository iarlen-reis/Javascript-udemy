/* 
Parâmetros em express:
    - Para receber parâmetros via url url no express, devemos adicionar um
        : (dois pontos) no final da rota que queremos receber o parâmetro, além
        disso, devemos dá um nome para esse parâmetro:
        Por exemplo: /contatos/:nome

    - A requisição.body do express é basicamente recebida quando um formulário é
        enviado, podemos acessar o body da requisição atravez do req.body, além disso
        o body trabalha com o campo 'name' dos inputs.

    - Existe uma coisa chamada queryString no express, que outro tipo de parâmetros
        para acessa-lo podemos utilizar req.query. Além disso, para podermos mandar
        um req.query em uma url, devemos adicionar no final dela uma ? (interrogação):
        Por exemplo: /contato?

*/


const express = require('express');
const app = express();


// Tratar o body da requisição:
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> <button>Enviar</button>
    </form>
    `);
});

// Usando parâmetros opcionais na url:
app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
});

// Exibindo o objeto recebido no req.body:
app.post('/', (req, res) => {
    res.send(`O que você me enviou: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
});

