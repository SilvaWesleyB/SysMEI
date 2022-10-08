// Importando Model
const Cliente = require('../models/clienteModel');

//  Funçao Add Cliente
exports.add = async (req, res) => {
    const cliente = Cliente.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Cliente não foi cadastrado com sucesso!"
        });

        return res.status(200).json({
            error: false,
            message: "Cliente cadastrado com sucesso!"
        });
    });
};

//  Funçao Delete Cliente
exports.delete = async (req, res) => {
    const cliente = Cliente.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Cliente não foi apagado com sucesso!",
            id: req.params.id
        });

        return res.json({
            error: false,
            message: "Cliente apagado com sucesso!",
            id: req.params.id
        });
    });
};

//  Funçao Atualizar Cliente
exports.update = async (req, res) => {
    const cliente = Cliente.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Cliente não foi Atualizado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Cliente Atualizado com sucesso!"
        });
    });
};

//  Funçao Buscar Cliente
exports.find = async (req, res) => {
    Cliente.findOne({ _id: req.params.id }).then((cliente) => {
        return res.json(cliente);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Cliente encontrado!"
        });
    });
};

//  Funçao Listar Todos os Cliente
exports.list = async (req, res) => {
    Cliente.find({}).then((cliente) => {
        return res.json(cliente);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Cliente encontrado!"
        })
    })
};