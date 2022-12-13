exports.paginaInicial = (req, res) => {
    res.render('home', {
        titulo: 'Pagina inicial',
    })
};

exports.PaginaInicialPost = (req, res) => {
    res.render('cliente');
}
