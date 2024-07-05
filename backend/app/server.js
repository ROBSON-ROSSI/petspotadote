const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const rotas = require('../routes/rotas');
const sessao = require('express-session');


const app = express();
<<<<<<< HEAD
app.use(sessao({secret: '123456teste',
    saveUninitialized: false,
    resave: false
}));

app.use(rotas);
app.use(express.json());
app.use(express.static(__dirname +'..\assets'));
console.log(__dirname)
=======
app.use(rotas);
app.use(express.json());
app.use(express.static('C:\\Users\\robson.rleite\\OneDrive\\petspot\\assets'));
>>>>>>> 82e2176af387abb42aa2aa9d7b16f4491ef7fe9e

app.listen(PORT, () => {
    console.log('Servidor Web rodando na porta:'+PORT);
})