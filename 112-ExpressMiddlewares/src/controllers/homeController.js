exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.paginaInicialPost = (req, res) => {
    res.send('Formulário recebido com sucesso!');
    console.log(req.body);

};