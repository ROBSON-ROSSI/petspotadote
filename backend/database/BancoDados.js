const mysql = require('mysql2');


var cone =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dtiestoque'
});

  function conexao(){
     cone.connect((err) =>{
         if(err){
           console.log('Erro ao conectar ao banco de dados');
         } else {
          return  cone, conexao;
          console.log('Conexão com banco de dados realizado com sucesso');
         }
     });

  }
   
 module.exports = cone;