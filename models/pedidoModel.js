// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const pedidoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    });

// Cria modelo
const pedido = mongoose.model('pedidos', pedidoSchema);

// Exportando Model
module.exports = Pedido;