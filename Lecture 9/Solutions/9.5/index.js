import express from 'express'

const server = express()

const logger = (req, _res, next) => {
    console.log(new Date(), req.method, req.url)
    next()
}

server.use(logger)

server.get('/students', (req, res) => {
    res.send([])
})

const PORT = 3000

server.listen(PORT, () => console.log('Listening to port', PORT))