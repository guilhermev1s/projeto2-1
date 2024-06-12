const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        aula: {
            type: String,
            required: true
        },
        professor: {
            type: String,
            required: true
        },
        horario: {
            type: Number,
            required: true
        },
        data: {
            type: Date,
            required: true
        },
        local : {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const AulasColetivas = mongoose.model('aulasColetivas', schema)

module.exports = AulasColetivas