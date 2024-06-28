'use strict'

const clienteModel = require('../models/clientesModel')
const validacionClientes = require('../helpers/validacionClientes')
const bcrypt = require('bcrypt-nodejs')

const registroCliente = async (req, res) => {
    const nuevoCliente = req.body
    const mensaje = validacionClientes.validarRegistroCliente(nuevoCliente)

    if (mensaje === 'valido') {
        const clientes = await clienteModel.find({email: nuevoCliente.email})

        if (clientes.length === 0) {
            bcrypt.hash(nuevoCliente.password, null, null, async (err, hash) => {
                if (hash) {
                    nuevoCliente.password = hash
                    await clienteModel.create(nuevoCliente)
                    res.status(200).send({message: 'Cliente registrado'})
                } else {
                    res.status(200).send({message: 'Error en el servidor'})
                    console.log(err)
                }
            })
        } else {
            res.status(200).send({message: 'El correo ya existe. Indique otro correo.'})
        }
    } else {
        res.status(200).send({message: mensaje})
    }
}

module.exports = {
    registroCliente
}