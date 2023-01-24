import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('OK')
})

server.listen(3000)