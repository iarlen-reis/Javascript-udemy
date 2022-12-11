const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {
        type: String
        },
    descricao: {
        type: String
        }
});



const HomeModel = mongoose.model('filmes', HomeSchema);

/*
Criando um filme novo:

new HomeModel({
    titulo: 'Titulo do filme',
    descricao: 'Descrição do filme'

}).save()

*/


module.exports = {
    HomeModel
};
