const Pagamento = require('../models/Pagamento')

async function create(req, res) {
    const pagamento = new Pagamento(req.body)
    const pagamentoCriado = await pagamento.save()
    res.status(201).json(pagamentoCriado)
}

async function getAll(req, res) {
    res.json(await Pagamento.find()).populate('cliente')
}

async function getById(req, res) {
    const pagamento = await Pagamento.findById(req.params.id).populate('cliente')
    if (pagamento) {
        res.json(pagamento)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrato!" })
    }
}

async function update(req, res) {
    const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (pagamentoAtualizado) {
        res.json(pagamentoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrato!" })
    }

}

async function remove(req, res) {
    const pagamentoExcluido = await Pagamento.findByIdAndDelete(req.params.id)
    if (pagamentoExcluido) {
        res.json({
            mensagem: "Pagamento excluido com sucesso!",
            pagamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}