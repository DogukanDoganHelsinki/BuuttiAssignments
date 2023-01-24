import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('Service 1: OK')
})

server.listen(3001)