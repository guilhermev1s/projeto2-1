const express = require('express')
const router = express.Router()

// controllers
const FuncionarioController = require('../controllers/FuncionarioController')

// validators
const { validarId } = require('../validators/IdValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)











module.exports = router