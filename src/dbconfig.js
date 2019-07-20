//Configuraçao da conexao com SQL SERVER
/*
Criar arquivo .env com o seguinte layout.

# Banco de dados
DB_HOST=localhost
DB_NAME=NomeDoBanco
DB_USER=UsuarioDoBanco
DB_PASS=SenhaDoBanco
*/
require('dotenv').config()


var dbConfig = {
    server: process.env.DB_HOST, //ip servidor
    database: process.env.DB_NAME, //nome do banco
    user:  process.env.DB_USER, //usuario
    password: process.env.DB_PASS //senha
};

module.exports = dbConfig; 
