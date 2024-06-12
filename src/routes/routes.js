const express = require('express')
const router = express.Router()

// controllers
const FuncionarioController = require('../controllers/FuncionarioController')
const ProfessorController = require('../controllers/ProfessorController')
const AulasController = require('../controllers/AulasController')
const PagamentosController = require('../controllers/PagamentosController')
const ClientesController = require('../controllers/ClientesController')

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
router.post('/pagamentos', pagamentoValidador, PagamentosController.create)
router.get('/pagamentos', PagamentosController.getAll)
router.get('/pagamentos/:id', validarId, PagamentosController.getById)
router.put('/pagamentos/:id', validarId, PagamentosController.update)
router.delete('/pagamentos/:id', validarId, PagamentosController.remove)

//Clientes
router.post('/clientes', clienteValidador, ClientesController.create)
router.get('/clientes', ClientesController.getAll)
router.get('/clientes/:id', validarId, ClientesController.getById)
router.put('/clientes/:id', validarId, ClientesController.update)
router.delete('/clientes/:id', validarId, ClientesController.remove)







module.exports = router