// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const pedidoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    }
},
    {
        timestamps: true,
    });

// Cria modelo
const pedido = mongoose.model('pedidos', pedidoSchema);

// Exportando Model
module.exports = Pedido;