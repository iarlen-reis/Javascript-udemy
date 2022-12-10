const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text"> <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('<h1> Formulário recebido! </h1>');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
});

