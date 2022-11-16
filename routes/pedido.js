var express = require('express');
var router = express.Router();

//importando Controller
const pedidoController = require('../controllers/pedidoController');

//rota listar todos
router.get('/', pedidoController.list);

//rota adicionar
router.post('/act', pedidoController.add);

//rota listar um
router.get('/act/:id', pedidoController.find);

//rota editar/atualizar
router.put('/act/:id', pedidoController.update);

//rota deletar
router.delete('/act/:id', pedidoController.delete);

//exporta rotas
module.exports = router;