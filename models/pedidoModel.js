// Importando dependencia
const mongoose = require('mongoose');

// Define Modelo
const pedidoSchema = new mongoose.Schema({
    // um pedido deve conter os seguintes dados >>
    /*********/
    // Cliente: nome completo, email, contato, tipo de cliente, cpf/cnpj e endereço completo.
    // obs: na listagem dos cliente, os clientes com status "false" aparecer com as letras vermelhas (clientes inativos).
    /*********/
    // Usuário/vendedor: Nome, id
    /*********/
    // Produtos: codigo, descrição, quantidade e valor unitario. Deve conter campo de valor total do item.
    // na tela de busca de produtos, produtos sem estoque devem aparecer com letra em vermelho.
    /*********/
    // Pagamento: Tipo de pagamento, valor total, campo de desconto (%) e valor final (total - desconto).
    /*********/
    // Status: Aberto, Finalizado/fechado (pago) e Cancelado.
    
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