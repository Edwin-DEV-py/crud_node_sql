import express from "express";

const app = express()

//endpoints
app.get('/data',(req,res) => res.send('obtenido'))
app.post('/data',(req,res) => res.send('creando'))
app.put('/data',(req,res) => res.send('actualizando'))
app.delete('/data',(req,res) => res.send('eliminando'))

app.listen(3000)
console.log('server')