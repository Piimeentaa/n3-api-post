const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipo dos dados
        auto: true, // é autogerado
        require: true, // é obrigatório
    },
    nome: {
        type: String,
        reuired: true,
        unique: true,
    },
    celular: {
        type: String,
        require: true,
    },
    fotoPerfil: {
        type: String,
        require: false,
    },
    dataNascimento: {
        type: Date,
        require: true,
    }
})
const ContatosCollection = mongoose.model('contato', ContatoSchema)
module.exports = ContatosCollection

