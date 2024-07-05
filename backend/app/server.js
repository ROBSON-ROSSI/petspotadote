const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const rotas = require('../routes/rotas');

const app = express();
app.use(rotas);
app.use(express.json());
app.use(express.static('C:\\Users\\robson.rleite\\OneDrive\\petspot\\assets'));

app.listen(PORT, () => {
    console.log('Servidor Web rodando na porta:'+PORT);
})