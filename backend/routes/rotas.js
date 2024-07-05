const express = require('express');
const rotas = express.Router();
const cors = require('cors');
var conexao = require('../database/BancoDados');
<<<<<<< HEAD
const body = require('body-parser');

rotas.use(body.urlencoded({extended: false}));
rotas.use(body.json());
=======
>>>>>>> 82e2176af387abb42aa2aa9d7b16f4491ef7fe9e


rotas.use(cors({
    origin: "*"
}));

<<<<<<< HEAD
rotas.use('/:usuario/:senha',(req,res,next) => {
    if(req.params.usuario == 'admin' && req.params.senha == '1234'){
      next();
    } else {
      res.send('<h1>Acesso Negado</h1>');
      console.log(__dirname);
    }
})


rotas.get('/:usuario/:senha',(req,res) => {
  res.sendFile('C:\\Users\\755179\\OneDrive\\petspot\\index.html');
//   conexao.query('SELECT * FROM contatos_info', (err,rows) => {
//     if(err){
//        throw err
//    } else {
//        res.send(JSON.stringify(rows));
//    }
// })
});

=======
rotas.use('/home/:usuario/:senha', (req,res, next) => {
  if(req.params.usuario == 'admin' && req.params.senha == '1234'){
    next();
  } else {
    res.send('<h1>Acesso negado</h1>');
  }
});

rotas.get('/home/:usuario/:senha',(req,res) => {
  res.sendFile('C:\\Users\\robson.rleite\\OneDrive\\petspot\\index.html');
//   conexao.query('SELECT * FROM contatos_info', (err,rows) => {
//     if(err){
//        throw err
//    } else {
//        res.send(JSON.stringify(rows));
//    }
// })
});

>>>>>>> 82e2176af387abb42aa2aa9d7b16f4491ef7fe9e
// rotas.get('/:id',(req,res) => {
//     // res.sendFile('C:\\Users\\755179\\OneDrive\\petspot\\index.html');
//     conexao.query(`SELECT * FROM contatos_info where id= ${req.params.id}`, (err,rows) => {
//       if(err){
//          throw err
//      } else {
//          res.send(JSON.stringify(rows));
//      }
//   })
//   });

module.exports = rotas;