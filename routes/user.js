var express = require('express');
var router = express.Router();

//importando Controller
const userController = require('../controllers/userController');

//rota listar todos
router.get('/', userController.list);

//rota adicionar
router.post('/act', userController.add);

//rota listar um
router.get('/act/:id', userController.find);

//rota editar/atualizar
router.put('/act/:id', userController.update);

//rota deletar
router.delete('/act/:id', userController.delete);

//exporta rotas
module.exports = router;