// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const produtoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    unidade: {
        type: String,
        required: true,
    },
    estoque: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
},
    {
        timestamps: true,
    });

// Cria modelo
const Produto = mongoose.model('produtos', produtoSchema);

// Exportando Model
module.exports = Produto;