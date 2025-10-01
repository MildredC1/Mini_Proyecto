const path = require('path')
const express = require('express')

const app = express()

<<<<<<< Updated upstream
const PORT = 3000
const HOST = "localhost"
=======
import { mysql } from 'mysql2';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';
>>>>>>> Stashed changes

// Configurar Conexion Mysql:
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "01234",
    database: "formulario"
})

conexion.connect((err) => {
    if (err) {
        console.log("Error al conectar con la Base de Datos", err.message)
    }
    else {
        console.log("Conectado a la Base de Datos exitosamente")
    }
})

// Configurar Middleware's:
<<<<<<< Updated upstream
=======
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Logger: [${new Date().toISOString()}] - Method: ${req.method} - Desde: ${req.url}`)
    next()
})
>>>>>>> Stashed changes

// Configurar las peticiones:

app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`)
})