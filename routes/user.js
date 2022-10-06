var express = require('express');
var router = express.Router();

//importando Controller
const userController = require('../controllers/userController');

//rota listar todos
router.get('/', (req, res, next) => {
    res.send('Bem vindo!');
});

//rota listar um
//router.get('/act', userController.add);

//rota adicionar
router.post('/act', userController.add);

//rota editar/atualizar
//router.put('/act', userController.add);

//rota deletar
//router.delete('/act', userController.add);

//exporta rotas
module.exports = router;