const {HomeModel} = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
    HomeModel.find().lean().then((filmes => {
        res.render('home', {
            titulo: 'Pagina Inicial',
            filmes: filmes
        });
    }));
};
