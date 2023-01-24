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

server.listen(3000, () => console.log('Listening to port 3000'))