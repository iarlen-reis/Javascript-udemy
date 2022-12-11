const { ContatoModel } = require('../models/ContatoModel');


exports.contactHome = (req, res) => {
    res.render('contact', {
        titulo: 'Contatos',
    });
}

exports.contactPost = (req, res) => {

    const novaPessoa = {
        nome: req.body.nome,
        idade: req.body.idade
    };

    new ContatoModel(novaPessoa).save()
        .then(resposta => {
            console.log('Dados salvos com sucesso!');
            res.render('contact-post', {
                titulo: 'Contato | Salvado'
            });
        })
        .catch(error => console.log(error));
}

exports.listarContatos = (req, res) => {
    ContatoModel.find().lean().then((pessoas) => {
        res.render('contatos', {
            pessoas
        })
    })

};