exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> <button>Enviar</button>
    </form>
    `);
};

exports.paginaInicialPost = (req, res) => {
    res.send('Formulário recebido com sucesso!');
};