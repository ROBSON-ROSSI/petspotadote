const mysql = require('mysql2');


var cone =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
<<<<<<< HEAD
    database: 'dtiestoque'
=======
    database: 'contatos'
>>>>>>> 82e2176af387abb42aa2aa9d7b16f4491ef7fe9e
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