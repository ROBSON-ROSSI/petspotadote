const mysql = require('mysql2');

function conexao(){
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dtiestoque'
  })
}

module.exports = conexao;