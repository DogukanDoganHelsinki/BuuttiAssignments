import express from 'express'
import { logger, notFound } from './middleware.js'

const server = express()
server.use(express.json())
server.use(logger)

server.get('/students', (req, res) => {
    res.send([])
})

server.use(notFound)

const PORT = 3000
server.listen(PORT, () => console.log('Listening to port', PORT))