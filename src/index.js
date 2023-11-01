//Criando o Index.js
//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS

const express = require('express');// IMPORTANDO EXPRESS
const req = require('express/lib/request');

const path = require('path');// IMPORTANDO PATH
//O Path Retorna o Caminho de Forma Dinamica

//**** CONFIGURAÇÃO DO BANCO DE DADOS */
const db = require('./db');


const app = express();
// O APP IRÁ RECEBER O EXPRESS E TODAS SUAS DEPENDENCIA





// AQUI DEFINIMOS NOSSA ROTA PARA O ARQUIVO HTML USANDO O PATH PARA SEMPRE RETORNAR DINAMICAMENTE O  QUE VEM ANTES DA "/PAGES/HOME.HTML"
//  TUDO QUE SE ENCONTRA DEPOIS DA BARRA "/" SERÃO NOSSAS ROTAS.


// APOS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA O NOSSO APP USAR ELAS COMO REFERENCIA

    app.listen(3333, ()=>{
        console.log('SERVIDOR RODANDO')
    })
  

    // ****CONFIGURAÇÃO DAS ROTAS****

    const routes = require('./routes'); //Chamando o módulo das Rotas


    //****INCLUIR NOVO****

    app.use(express.json()); //AQUI TRANSFORMAMOS OS DADOS QUE CHEGAM COMO BINARIO EM JSON


    app.use('/', routes);
    // APOS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO APP USAR ELAS COMO REFERENCIA
 