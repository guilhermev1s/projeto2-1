const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        formaPagamento: {
            type: String,
            required: false
        },
        dataVencimento: {
            type: Date,
            required: true
        },
        dataPagamento: {
            type: Date,
            required: false
        },
        valor: {
            type: Number,
            required: true
        },
        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Pagamento = mongoose.model('pagamento', schema)

module.exports = Pagamento