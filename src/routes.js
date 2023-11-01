const express = require('express');// IMPORTANDO EXPRESS
const path = require('path');// IMPORTANDO PATH
//O Path Retorna o Caminho de Forma Dinamica

const router = express.Router()
//ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTs PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
});

const clienteController = require('./clienteController');


//cliente
router.get('/clientes',clienteController.listarClientes);

router.get('/clientes/:cpf',clienteController.buscarClientes);

// POST: ACEITA CRIAR ALGUM OBJETO DO SERVIDOR.
router.post('/clientes', clienteController.adicionarCliente);

// PUT ACEITA SUBSTITUR ALGUM OBJETO DO SERVIDOR.

//PATCH ACEITAR ALTERAR ALGUNS OBJETO DO SERVIDOR

router.patch('/clientes/:cpf',clienteController.atualizarCliente);

//DELETE: informa por meio do url o objeto a ser deletado
router.delete('/clientes/:cpf',clienteController.deletarCliente);



module.exports = router;



