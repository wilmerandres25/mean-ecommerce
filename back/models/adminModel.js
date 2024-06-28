'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telefono: {type: String, required: false},
    dni: {type: String, required: false},
    rol: {type: String, required: true}
})

module.exports = mongoose.model('admins', AdminSchema)