const { json } = require('express');
const db = require('./db');

const Joi = require('joi');


const produtoSchema = Join.object({
    id: Joi.string().required(),
    nome_produto: Joi.string().required(),
    descricao: Joi.string().required(),
    valor: Joi.string().required(),
    imagem: Joi.string().required(),

});
// Lista de todos os Produtos..

exports.listarProdutos =(req, res) => {
    db.query('SELECT * FROM produto', (err, result) => {
        if (err) {
            console.error('Erro ao Buscar Produtos:', err);
            res.status(500).json({error: 'Erro interno do Servidor'});
            return;
        
        };
        res.json(result);
    });
    
};

exports.buscarProduto = (req, res) =>{
    const { cpf } = req.params; // req.params acessa os parametros

db.query('SELECT * FROM produto WHERE id = ?', id,(err, result) => {
    if (err) {
        console.error('Erro ao buscar Produto:', err);
        res.status(500).json({error: 'Erro Interno do Servidor'});
        return;
    }
    if (result.length === 0) {
        res.status(404).json({ error: 'Produto Não Encontrado'});
        return;
    }
    res.json(result[0]); 
});
};

exports.adicionarProduto = (req,res)=> {
    const{ id,nome_produto, descricao, valor, imagem} =req.body;

    const{ error } = produtoSchema.validate({id, nome_produto, descricao, valor, imagem});
    
    if (error) {
        res.status(400).json({error:'Dados do Produto Invalido'});  
        return;
    }

};



