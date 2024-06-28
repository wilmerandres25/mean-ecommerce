'use strict'

const express = require('express')
const clienteController = require('../controllers/clienteController')

const api = express.Router()

api.post('/cliente', clienteController.registroCliente)

module.exports = api