'use strict'

const adminModel = require('../models/adminModel')
const validacionAdmins = require('../helpers/validacionAdmins')
const bcrypt = require('bcrypt-nodejs')

const registroAdmin = async (req, res) => {
    const nuevoAdmin = req.body
    const mensaje = validacionAdmins.validarRegistroAdmin(nuevoAdmin)

    if (mensaje === 'valido') {
        const admins = await adminModel.find({email: nuevoAdmin.email})
        if (admins.length === 0) {
            bcrypt.hash(nuevoAdmin.password, null, null, async (err, hash) => {
                if (hash) {
                    nuevoAdmin.password = hash
                    await adminModel.create(nuevoAdmin)
                    res.status(200).send({message: 'Administrador registrado'})
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
    registroAdmin
}