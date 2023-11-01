const { json } = require('express');
const db = require('./db'); // IMPORTANDO O NOSSO MÓDULO DE CONECXÃO COM O BANCO

const Joi = require('joi'); // JOI- VALIDA SE A ESTRUTURA DE DADOS ATENDE UMA AVALIÇÃO CRIADA NO BANCO,IMPEDINDO QUE O ERRO PASSE POR AQUI E CHEGUE ATÉ O BANCO.

//**** VALIDAÇÃO DE DADOS***
    const clienteSchema = Joi.object({
        cpf: Joi.string().length(11).required(),
        nome: Joi.string().required(),
        endereco: Joi.string().required(),
        bairro: Joi.string().required(),
        complemento: Joi.string().required(),
        cep: Joi.string().required(),
        telefone: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(6).required(),
    
    });

    // *** LISTAR TODOS OS CLIENTES
    // *** QUERY ACESSA OBJETO DE QUERYSTRING DA REQUISIÇÃO

    exports.listarClientes = (req, res) => {
        db.query('SELECT * FROM cliente', (err, result) => {
            if (err) {
                console.error('Erro ao Buscar Clientes:', err);
                res.status(500).json({error: 'Erro interno do Servidor'});
                return;
            }
            res.json(result);
        });
    };

    //**** BUSCAR UM ÚNICO CLIENTE POR CPF ****

    exports.buscarClientes = (req, res) =>{
        const { cpf } = req.params; // req.params acessa os parametros

    db.query('SELECT * FROM cliente WHERE cpf = ?', cpf,(err, result) => {
        if (err) {
            console.error('Erro ao buscar Cliente:', err);
            res.status(500).json({error: 'Erro Interno do Servidor'});
            return;
        }
        if (result.length === 0) {
            res.status(404).json({ error: 'Cliente Não Encontrado'});
            return;
        }
        res.json(result[0]); //*** retorna o Primeiro Cliente encontrado (deve ser o único)
    });
    };

    //ADICIONAR UM NOVO CLIENTE

    exports.adicionarCliente = (req,res)=> {
        const{cpf, nome,endereco, bairro, complemento, cep, telefone, email, senha} = req.body; //

const { error }= clienteSchema.validate({ cpf, nome, endereco, bairro, complemento, cep,telefone, email, senha});

if (error) {
    res.status(400).json({error:'Dados do Cliente Invalidos'});
    return;
};
const novoCliente = {
    cpf,
    nome,
    endereco,
    bairro,
    complemento,
    cep,
    telefone,
    email,
    senha
};

db.query('INSERT INTO cliente set ?', novoCliente, (err, result) =>{
    if (err) {
        console.error('Erro ao adicionar cliente', err);
    }
    res.json({message: 'Cliente adicinado com sucesso'});
});

    };

    //ATUALIZAR UM CLIENTE

    exports.atualizarCliente = (re,res) => {
        const { cpf } = req.params;
        const { nome, endereco, bairro, complemento, cep, telefone,
             email,senha} = req.body;

        const { error } = clienteSchema.validate({cpf, nome, endereco,bairro, complemento, cep, telefone,email,senha});

        if (error) {
            res.status(400).json({ error: 'Dados de Cliente Invalidos'});
            return;
        }

        const clienteAtualizado = {
            nome,
            endereco,
            bairro,
            complemento,
            cep,
            telefone,
            email
        };

        db.query('UPDATE cliente SET ? where cpf = ?',[clienteAtualizado, cpf], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar Cliente:', err);
                res.status(500).json({error: 'Erro Interno do Servidor'});
                return;
                
            }
            res.json({message: 'cliente atualizado com sucesso'});
        });

    };

    // DELETAR UM CLIENTE

    exports.deletarCliente = (req, res) => {
        const { cpf } = req.params;

        db.query('DELET FROM cliente WHERE cpf = ?', cpf, (err, result)=>{
            if (err) {
               console.error('Erro ao deletar cliente:',err);
               res.status(500).json({error: 'Erro interno do Servidor'});
               return; 
            };
        });
    };