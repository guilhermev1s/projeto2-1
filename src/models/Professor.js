const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        dataContratacao: {
            type: Date,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            logradouro: String,
            localidade: String,
            bairro: String,
            numero: String,
            complemento: String
        },
        aulas: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'aulas',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Professor = mongoose.model('professor', schema)

module.exports = Professor