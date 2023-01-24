import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.get('/foobar', (req, res) => {
    res.send('foobar')
})

server.listen(3000, () => {
    console.log('Listening to port 3000')
})