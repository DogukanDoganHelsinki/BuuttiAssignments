import express from 'express'

const server = express()

let counter = 0
server.get('/counter', (req, res) => {
    const queryParameterNumber = Number(req.query.number)
    if (Number.isInteger(queryParameterNumber)) {
        counter = queryParameterNumber
    } else {
        counter++
    }
    res.send(`<h1>${counter}</h1>`)
})

const namedCounters = {}
server.get('/counter/:name', (req, res) => {
    const name = req.params.name
    if (namedCounters[name] === undefined) {
        namedCounters[name] = 0
    }

    namedCounters[name] += 1
    res.send(`${name} was here ${namedCounters[name]} times`)
})

server.listen(3000, () => console.log('Listening to port 3000'))