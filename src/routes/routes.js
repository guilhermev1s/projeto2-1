const express = require('express')
const router = express.Router()

// controllers
const FuncionarioController = require('../controllers/FuncionarioController')
const ProfessorController = require('../controllers/ProfessorController')
const AulasController = require('../controllers/AulasController')
const PagamentoController = require('../controllers/PagamentoController')
const ClienteController = require('../controllers/ClienteController')

// validators
const { validarId } = require('../validators/IdValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')
const {aulaValidador} = require('../validators/AulasValidator')
const {pagamentoValidador} = require('../validators/PagamentoValidator')
const { professorValidador } = require('../validators/ProfessorValidator')
const {clienteValidador} = require('../validators/ClientesValifator')



// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

//Professores
router.post('/professor', professorValidador, ProfessorController.create)
router.get('/professor', ProfessorController.getAll)
router.get('/professor/:id', validarId, ProfessorController.getById)
router.put('/professor/:id', validarId, funcionarioValidador, ProfessorController.update)
router.delete('/professor/:id', validarId, ProfessorController.remove)


// Aulas
router.post('/aulas', aulaValidador, AulasController.create)
router.get('/aulas', AulasController.getAll)
router.get('/aulas/:id', validarId, AulasController.getById)
router.put('/aulas/:id', validarId, AulasController.update)
router.delete('/aulas/:id', validarId, AulasController.remove)

// Pagamentos
router.post('/pagamentos', pagamentoValidador, PagamentoController.create)
router.get('/pagamentos', PagamentoController.getAll)
router.get('/pagamentos/:id', validarId, PagamentoController.getById)
router.put('/pagamentos/:id', validarId, PagamentoController.update)
router.delete('/pagamentos/:id', validarId, PagamentoController.remove)

//Clientes
router.post('/clientes', clienteValidador, ClienteController.create)
router.get('/clientes', ClienteController.getAll)
router.get('/clientes/:id', validarId, ClienteController.getById)
router.put('/clientes/:id', validarId, ClienteController.update)
router.delete('/clientes/:id', validarId, ClienteController.remove)







module.exports = router