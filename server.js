const path = require('path')
const express = require('express')

const app = express()

const PORT = 3000
const HOST = "localhost"

// Configurar Conexion Mysql:

// Configurar Middleware's:

// Configurar las peticiones:

app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`)
})