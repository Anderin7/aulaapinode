//Criando o Index.js
//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS

const express = require('express');// IMPORTANDO EXPRESS
const req = require('express/lib/request');

const path = require('path');// IMPORTANDO PATH
//O Path Retorna o Caminho de Forma Dinamica

const app = express();
// O APP IRÁ RECEBER O EXPRESS E TODAS SUAS DEPENDENCIA

const router = express.Router()
//ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTs PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})

// AQUI DEFINIMOS NOSSA ROTA PARA O ARQUIVO HTML USANDO O PATH PARA SEMPRE RETORNAR DINAMICAMENTE O  QUE VEM ANTES DA "/PAGES/HOME.HTML"
//  TUDO QUE SE ENCONTRA DEPOIS DA BARRA "/" SERÃO NOSSAS ROTAS.

app.use(router);
// APOS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA O NOSSO APP USAR ELAS COMO REFERENCIA

    app.listen(3333, ()=>{
        console.log('SERVIDOR RODANDO')
    })
    // AQUI DEFNINMOS QUEM IRÁ ESCUTAR NOSSO CHAMADO E NOS RESPONDER

    app.get('/hello',(req, res)=>{
        console.log('GET FUNCIONANDO');
        res.send({message: 'HELLO WORD'});
    })

    //Dentro do Get ja definimos uma função anonima callback que recebe uma requisição com o request e que retorna uma resposta com o reply

    app.get('/usuario',(req, res)=>{
        console.log('GET USUARIO FUNCIONANDO');
        res.send({usuario: 'Anderson'});
    })