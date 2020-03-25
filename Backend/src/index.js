const express = require('express');
const cors = require('cors');
// Importando o 'express'

const routes = require('./routes');
// importa as rotas

const app = express();
// Declarando o app com a função express
app.use(cors());
app.use(express.json());
// antes das requisições, converterá o json em entendível
app.use(routes);
// Usa as rotas

app.listen(3333);
// O app escuta a porta :3333
