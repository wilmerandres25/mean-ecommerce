'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    pais: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    perfil: {type: String, default: 'perfil.png', required: true},
    telefono: {type: String, required: false},
    genero: {type: String, required: false},
    fechNacimiento: {type: String, required: false},
    dni: {type: String, required: false},
})

module.exports = mongoose.model('clientes', ClienteSchema)