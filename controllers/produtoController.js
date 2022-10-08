// Importando Model
const Produto = require('../models/produtoModel');

//  Funçao Add Produto
exports.add = async (req, res) => {
    const produto = Produto.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Produto não foi cadastrado com sucesso!"
        });

        return res.status(200).json({
            error: false,
            message: "Produto cadastrado com sucesso!"
        });
    });
};

//  Funçao Delete Produto
exports.delete = async (req, res) => {
    const produto = Produto.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Produto não foi apagado com sucesso!",
            id: req.params.id
        });

        return res.json({
            error: false,
            message: "Produto apagado com sucesso!",
            id: req.params.id
        });
    });
};

//  Funçao Atualizar Produto
exports.update = async (req, res) => {
    const produto = Produto.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Produto não foi Atualizado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Produto Atualizado com sucesso!"
        });
    });
};

//  Funçao Buscar Produto
exports.find = async (req, res) => {
    Produto.findOne({ _id: req.params.id }).then((produto) => {
        return res.json(produto);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Produto encontrado!"
        });
    });
};

//  Funçao Listar Todos os Produto
exports.list = async (req, res) => {
    Produto.find({}).then((produto) => {
        return res.json(produto);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum Produto encontrado!"
        })
    })
};