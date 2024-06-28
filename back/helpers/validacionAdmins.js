'use strict'

const validarRegistroAdmin = datos => {
    if (datos.nombres.length === 0) return '¡Atención: Campo nombres vacio!'

    if (datos.apellidos.length === 0) return '¡Atención: Campo apellidos vacio!'

    if (datos.email.length === 0) return '¡Atención: Campo correo electrónico vacio!'

    if (datos.password.length === 0) return '¡Atención: Campo contraseña vacia!'

    if (datos.rol.length === 0) return '¡Atención: Indique su rol!'

    return 'valido'
}

module.exports = {
    validarRegistroAdmin
}