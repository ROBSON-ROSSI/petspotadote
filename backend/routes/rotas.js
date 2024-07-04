const express = require('express');
const rotas = express.Router();
const cors = require('cors');


rotas.use(cors({
    origin: "*"
}));
rotas.get('/',(req,res) => {
   res.sendFile('C:\\Users\\755179\\OneDrive\\petspot\\index.html');
   console.log(__dirname);
});

module.exports = rotas;