'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 4200

const app = express()

const clienteRoutes = require('./routes/clienteRoutes')
const adminRoutes = require('./routes/adminRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/onlineStore').then(
    () => { 
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`)
        }) 
    },
    err => { console.log(err) }
)

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json({limit: '50mb', extended: true}))

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', clienteRoutes)
app.use('/api', adminRoutes)

module.exports = app