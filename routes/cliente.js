var express = require('express');
var router = express.Router();

//importando Controller
const clienteController = require('../controllers/clienteController');

//rota listar todos
router.get('/', clienteController.list);

//rota adicionar
router.post('/act', clienteController.add);

//rota listar um
router.get('/act/:id', clienteController.find);

//rota editar/atualizar
router.put('/act/:id', clienteController.update);

//rota deletar
router.delete('/act/:id', clienteController.delete);

//exporta rotas
module.exports = router;