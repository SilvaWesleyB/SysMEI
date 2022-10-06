// Importando Model
const User = require('../models/userModel');

//  Funçao add User
exports.add = (req, res) => {
    const user = User.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuário não foi cadastrado com sucesso!"
        });

        return res.status(200).json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });
};