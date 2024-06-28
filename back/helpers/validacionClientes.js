'use strict'

const validarRegistroCliente = datos => {
    if (datos.nombres.length === 0) return '¡Atención: Campo nombres vacio!'

    if (datos.apellidos.length === 0) return '¡Atención: Campo apellidos vacio!'

    if (datos.email.length === 0) return '¡Atención: Campo correo electrónico vacio!'

    if (datos.password.length === 0) return '¡Atención: Campo contraseña vacia!'

    return 'valido'
}

module.exports = {
    validarRegistroCliente
}