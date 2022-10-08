// importando dependências
const express = require('express');
const mongoose = require('mongoose');

// importando rotas
const userRouter = require('./routes/user');
const clienteRouter = require('./routes/cliente');

// iniciaizando express
const app = express();

//conectando bd
const username = encodeURIComponent("db_admin");
const password = encodeURIComponent("wEc2608");
const cluster = "sysmei.m5wfrp1.mongodb.net";
const db = "SysMEI";

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${db}?retryWrites=true&w=majority`);

//confirma connection
mongoose.connection.on('connected', () => {
	console.log('BD Conectaddo!');
});

//error
mongoose.connection.on('error', (err) => {
	console.log('erro de Conexao' + err);
});

//carregando fuçoes express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ativando rotas
app.use('/user', userRouter);
app.use('/cliente', clienteRouter);

// rodando  server 
app.listen(8080, () => {
	console.log('Servidor Ativo!');
});