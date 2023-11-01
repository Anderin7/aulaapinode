// **** CONFIGURÇÃO DO BANCO DE DADOS MySQL ****

const mysql = require('mysql');// Importando o MySQL

// configurando uma conecção com banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "root",
    database:'pizzaria',
}); // Preencher de Acordo com o seu Banco de Dados

//Testar a conecção com o MySQL

db.connect((err)=> {
    if (err) {
        console.error('Erro ao Conectar ao MYsql', err);

    } else {
        console.log('Conectado ao MySQL');
    }
});
module.exports = db;

//Aqui declaramos que esta construção será um Modulo e que iremos exportar para ser usado. SEQUIR INDEX
