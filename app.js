// importando dependências
const express = require('express');
const mongoose = require('mongoose');

// importando rotas
const userRouter = require('./routes/user');

// iniciaizando express
const app = express();

//carregando fuçoes express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ativando rotas
app.use('/user', userRouter);

// rodando  server
app.listen(8080, () => {
	console.log('Servidor Ativo!');
});