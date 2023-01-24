import express from 'express'
import axios from 'axios'

const server = express()

server.get('/', async (req, res) => {
    const result = await axios.get('http://service1:3001')
    res.send('Service 2: ' + result.data)

})

server.listen(3002)