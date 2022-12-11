const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContatoSchema = new Schema({
    nome: {
        type: String
    },
    idade: {
        type: String
    }
});


const ContatoModel = mongoose.model('Contatos', ContatoSchema);

module.exports = {
    ContatoModel
};