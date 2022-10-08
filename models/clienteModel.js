// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contato: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    documento: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        rua: {
            type: String,
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
        complemento: {
            type: String,
        },
        cep: {
            type: String,
            required: true,
        },
    },
    status: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true,
    });

// Cria modelo
const Cliente = mongoose.model('clientes', clienteSchema);

// Exportando Model
module.exports = Cliente;