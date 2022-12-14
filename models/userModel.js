// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
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
const User = mongoose.model('usuarios', userSchema);

// Exportando Model
module.exports = User;