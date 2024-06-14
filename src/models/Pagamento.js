const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
       
        cliente: {
            type: String,
            required: true
        },
        formaPagamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'formaPagamento',
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
        }
    },
    {
        timestamps: true
    }
)

const Pagamento = mongoose.model('pagamento', schema)

module.exports = Pagamento