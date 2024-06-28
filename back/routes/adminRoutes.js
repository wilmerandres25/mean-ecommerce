'use strict'

const express = require('express')
const adminController = require('../controllers/adminController')

const api = express.Router()

api.post('/admin', adminController.registroAdmin)

module.exports = api