const express = require('express');
const cors = require('cors');
// Importando o 'express'
const { errors } = require('celebrate');

const routes = require('./routes');
// importa as rotas

const app = express();
// Declarando o app com a função express
app.use(cors());
app.use(express.json());
// antes das requisições, converterá o json em entendível
app.use(routes);
// Usa as rotas
app.use(errors());

module.exports = app;
