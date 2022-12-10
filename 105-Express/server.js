const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label>Nome:</label> <br>
            <input type="text" name="nome"> <br>
            <label>Sobrenome:</label> <br>
            <input type="text" name="sobrenome">
            <button>Enviar</button>

        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('<h1>Formulário recebido com sucesso!</h1>');
});

app.get('/contato', (req, res) => {
    res.send('<h1>Meus Contatos:</h1>');
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('SERVIDOR EXECUTANDO NA PORTA 3000!');
});