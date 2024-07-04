const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const rotas = require('../routes/rotas');

const app = express();
app.use(express.json());
app.use(express.static('C:\\Users\\755179\\OneDrive\\petspot\\css'));
app.use(rotas);
app.listen(PORT, () => {
    console.log('Servidor Web rodando na porta:'+PORT);
})