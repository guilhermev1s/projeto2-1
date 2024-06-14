const Professor = require('../models/Professor')

async function create(req, res) {
    const professor = new Professor(req.body)
    const professorCriado = await professor.save()
    res.status(201).json(professorCriado)
}

async function getAll(req, res) {
    res.json(await Professor.find())
}

async function getById(req, res) {
    const professor = await Professor.findById(req.params.id)
    if (professor) {
        res.json(professor)
    } else {
        res.status(404).json({ mensagem: "Professor não encontrato!" })
    }
}

async function update(req, res) {
    const professorAtualizado = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (professorAtualizado) {
        res.json(professorAtualizado)
    } else {
        res.status(404).json({ mensagem: "Professor não encontrato!" })
    }

}

async function remove(req, res) {
    const professorExcluido = await Professor.findByIdAndDelete(req.params.id)
    if (professorExcluido) {
        res.json({
            mensagem: "Professor excluido com sucesso!",
            professorExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Professor não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}