import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';

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
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use((req, res, next) => { // Middleware global para el 'Logger' 
    console.log(`Logger: [${new Date().toISOString()}] - Method: ${req.method} - Desde: ${req.url}`)
    next()
})

// Configurar las peticiones:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/usuarios', (req, res) => {
    const query = "SELECT * FROM aprendiendo_sql.usuarios;"
    conexion.query(query, (err, resultado) => {
        if (err) {
            res.status(500).send("Error al obtener los usuarios desde Base de Datos")
        }
        else {
            res.json(resultado)
        }
    })
})

app.get('/empresas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'empresa.html'))
})

app.get('/crear_usuario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'crear_usuario.html'))
})

app.post('/create', (req, res) => {
    console.log("req.body", req.body)
    const {nombre, edad, altura, correo, empresa_id} = req.body
    console.log("{nombre, edad, altura, correo, empresa_id}:", {nombre, edad, altura, correo, empresa_id})
    const query = "INSERT INTO aprendiendo_sql.usuarios (nombre, edad, altura, correo, empresa_id) VALUES (?,?,?,?,?)"
    console.log("query", query)

    conexion.query(query, [nombre, edad, altura, correo, empresa_id], (err, resultado) => {
        if (err) {
            console.log("Error: ", err)
            res.status(500).send("Error al insertar datos del usuario")
        }
        else {
            res.send("Usuarios agregado correctamente")
        }
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor inciado en http://${HOST}:${PORT}`)
})