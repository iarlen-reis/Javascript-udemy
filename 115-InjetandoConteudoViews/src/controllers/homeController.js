exports.paginaInicial = (req, res) => {
    res.render('home', {
        titulo: 'Pagina Inicial',
    });

};
