// Importando Model
const User = require('../models/userModel');

//  Funçao Add User
exports.add = async (req, res) => {
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

//  Funçao Delete User
exports.delete = async (req, res) => {
    const user = User.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuário não foi apagado com sucesso!",
            id: req.params.id
        });

        return res.json({
            error: false,
            message: "Usuário apagado com sucesso!",
            id: req.params.id
        });
    });
};

//  Funçao Atualizar User
exports.update = async (req, res) => {
    const user = User.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuário não foi Atualizado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Usuário Atualizado com sucesso!"
        });
    });
};

//  Funçao Buscar User
exports.find = async (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => {
        return res.json(user);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Usuário encontrado!"
        })
    })
};

//  Funçao Listar Todos os User
exports.list = async (req, res) => {
    User.find({}).then((user) => {
        return res.json(user);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Usuário encontrado!"
        })
    })
};