var express = require('express');
var router = express.Router();

//importando Controller
const produtoController = require('../controllers/produtoController');

//rota listar todos
router.get('/', produtoController.list);

//rota adicionar
router.post('/act', produtoController.add);

//rota listar um
router.get('/act/:id', produtoController.find);

//rota editar/atualizar
router.put('/act/:id', produtoController.update);

//rota deletar
router.delete('/act/:id', produtoController.delete);

//exporta rotas
module.exports = router;