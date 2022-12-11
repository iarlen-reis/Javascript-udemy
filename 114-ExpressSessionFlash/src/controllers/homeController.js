exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'));
    console.log(req.flash('error'));
    res.render('index');
};

exports.paginaInicialPost = (req, res) => {
    res.send('Formulário recebido com sucesso!');
};