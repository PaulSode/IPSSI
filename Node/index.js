import http from 'http';
import express from 'express'
import dotenv from 'dotenv'
import { date, monPath } from './middleware.js'
import dbConnect from './dbConnect.js'
import router from './Routes/filmRoutes.js'

dotenv.config()
dbConnect()
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(monPath)
app.use(router)

/*
app.get('/:id/:nom', date, monPath, (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/plain')
    res.send(`Hello ${req.params.nom} ${req.params.id}`)
})

app.get('/', (req, res) => {res.send('Hello World')})
*/

const server = http.createServer(app)


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})