/**
 * Atividade Avaliativa 2-B2 – Desenvolvimento de Web Service
 * ALUNOS:
 *     Manoel Matheus Correia dos Anjos - 2122130045
 *     Riheldo de Melo Tavares dos Santos - 2412130149
 */

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000

app.get('/sugestao-categorias', (req, res) => {
    console.log('[GET] on /sugestao-categorias');
    res.setHeader("Access-Control-Allow-Origin", "*");
    const data = [
        {id: 1, nome: 'Sugestão'}, {id: 2, nome: 'Reclamação'}, {id: 3, nome: 'Alerta'}
    ];
    res.send(JSON.stringify(data));
});

app.post('/sugestao', async (req, res) => {
    console.log('[POST] on /sugestao');
    res.setHeader("Access-Control-Allow-Origin", "*");
    const body = req.body;
    console.log('Sugestão para guardar no BD: ', body);
    res.status(200).send();
});

app.listen(port, () => {
    console.log(`Node.js Server Listening on Port ${port}`);
});
