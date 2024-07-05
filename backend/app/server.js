const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const rotas = require('../routes/rotas');
const sessao = require('express-session');
const flash = require('flash');


const app = express();
//Cria a sessão do usuario
app.use(sessao({secret: '123456teste',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());

app.use(rotas);
app.use(express.json());
app.use(express.static(__dirname +'..\assets'));

// Liga o servidor e abre a porta 3000
app.listen(PORT, () => {
    console.log('Servidor Web rodando na porta:'+PORT);
})