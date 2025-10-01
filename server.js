import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';

// Configurar Conexion Mysql:

// Configurar Middleware's:
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

// Configurar las peticiones:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/usuarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usuarios.html'))
})

app.post('/create', (req, res) => {
    res.send("Usuarios agregado correctamente")
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor inciado en http://${HOST}:${PORT}`)
})