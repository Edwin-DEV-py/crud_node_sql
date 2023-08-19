import express from "express";
import {pool} from './db/db.js'

const app = express()

//endpoints
app.get('/ping',async (req,res) =>{
    const [rta] = await pool.query('SELECT 1 + 1 AS result')
    res.json(rta)
})
app.get('/data',(req,res) => res.send('obtenido'))
app.post('/data',(req,res) => res.send('creando'))
app.put('/data',(req,res) => res.send('actualizando'))
app.delete('/data',(req,res) => res.send('eliminando'))

app.listen(3000)
console.log('server')