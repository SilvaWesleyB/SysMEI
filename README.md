<head>
<style>
    .bold{
        font-weight: bold;
    }
    </style>
</head>

<h1>Descrição do Sistema</h1>

<p> Sistema Back-End, desenvolvido utilizando NodeJS, juntamente com a biblioteca Express para criação de Rotas.
Utilizado também, para fins de teste o banco de dados MongoDB e Insomnia para teste de rotas/requisições.</p>

###

<h1>Recursos Utilizados</h1>

<ul>
<li><a href="https://nodejs.org/pt-br/" target="_blank">NodeJS</a></li>
<li><a href="https://expressjs.com/" target="_blank">Express</a></li>
<li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
<li><a href="https://insomnia.rest/" target="_blank">Insomnia</a></li>
</ul>

<h1> Dados de um PEDIDO</h1>

<ol>
<li class="bold">Cliente: nome completo, email, contato, tipo de cliente, cpf/cnpj e endereço completo.
<ol>
    <li> Obs: Na listagem dos cliente, os clientes com status "false" aparecer com as letras vermelhas (clientes inativos). </li>
    </ol> </li>

<li class="bold">Usuário/vendedor: Nome, id</li>

<li class="bold"> Produtos: codigo, descrição, quantidade e valor unitario. Deve conter campo de valor total do item.
    <ol>
    <li> Obs: Na tela de busca de produtos, produtos sem estoque devem aparecer com letra em vermelho.</li>
    </ol>
    </li>

<li class="bold">Pagamento: Tipo de pagamento, valor total, campo de desconto (%) e valor final (total - desconto).</li>

<li class="bold">Status: Aberto, Finalizado/fechado (pago) e Cancelado.</li>
</ol>
