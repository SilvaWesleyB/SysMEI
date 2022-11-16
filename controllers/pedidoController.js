// Importando Model
const Pedido = require('../models/pedidoModel');

//  Funçao Add Pedido
exports.add = async (req, res) => {
    const pedido = Pedido.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Pedido não foi cadastrado com sucesso!"
        });

        return res.status(200).json({
            error: false,
            message: "Pedido cadastrado com sucesso!"
        })
    });
};

//  Funçao Delete Pedido
exports.delete = async (req, res) => {
    const pedido = Pedido.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Pedido não foi apagado com sucesso!",
            id: req.params.id
        });

        return res.json({
            error: false,
            message: "Pedido apagado com sucesso!",
            id: req.params.id
        });
    });
};

//  Funçao Atualizar Pedido
exports.update = async (req, res) => {
    const pedido = Pedido.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Pedido não foi Atualizado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Pedido Atualizado com sucesso!"
        });
    });
};

//  Funçao Buscar Pedido
exports.find = async (req, res) => {
    Pedido.findOne({ _id: req.params.id }).then((pedido) => {
        return res.json(pedido);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Pedido encontrado!"
        })
    })
};

//  Funçao Listar Todos os Pedido
exports.list = async (req, res) => {
    Pedido.find({}).then((pedido) => {
        return res.json(pedido);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Pedido encontrado!"
        })
    })
};