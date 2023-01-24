import express from 'express'

const server = express()

const randomInt = (min, max) => {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

const randomFloat = (min, max) => {
    return Math.random() * (max - min) + min
}

server.get('/random', (req, res) => {
    let min = Number(req.query.min)
    let max = Number(req.query.max)
    const allowFloat = req.query.float === 'true'

    if (Number.isNaN(min)) min = 0
    if (Number.isNaN(max)) max = 101

    const random = allowFloat ? randomFloat(min, max) : randomInt(min, max)

    res.send({ min, max, allowFloat, random })

})

server.use('/', express.static('public'))

const PORT = process.env.PORT
server.listen(PORT, () => console.log('Random API server listening to port', PORT))