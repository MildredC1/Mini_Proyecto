import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/usuarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usuarios.html'))
})


app.post('/create', (req, res) => {
    res.json({""})
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor inciado en http://${HOST}:${PORT}`)
})