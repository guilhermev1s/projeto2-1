const Aulas = require('../models/AulasColetivas.js')

async function create(req, res) {
    const aula = new Aulas(req.body)
    const aulaCriada = await aula.save()
    res.status(201).json(aulaCriada)
}

async function getAll(req, res) {
    res.json(await Aulas.find())
}

async function getById(req, res) {
    const aula = await Aulas.findById(req.params.id)
    if (aula) {
        res.json(aula)
    } else {
        res.status(404).json({ mensagem: "Aula não encontrada!" })
    }
}

async function update(req, res) {
    const aulaAtualizada = await Aulas.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (aulaAtualizada) {
        res.json(aulaAtualizada)
    } else {
        res.status(404).json({ mensagem: "Aula não encontrada!" })
    }

}

async function remove(req, res) {
    const aulaExcluida = await Aulas.findByIdAndDelete(req.params.id)
    if (aulaExcluida) {
        res.json({
            mensagem: "Aula excluida com sucesso!",
            aulaExcluida
        })
    } else {
        res.status(404).json({ mensagem: "Aula não encontrada!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}