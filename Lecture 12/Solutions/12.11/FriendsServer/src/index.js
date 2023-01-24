import express from 'express'

const server = express()
server.use(express.json())

let friends = []

server.get('/friends', (req, res) => {
    res.send(friends)
})

server.post('/friends', (req, res) => {
    const { username, name, email } = req.body
    friends = friends.concat({ username, name, email })
    res.send()
})

server.use(express.static('public'))

const { PORT } = process.env
server.listen(PORT, () => console.log('Friends Server listening to port', PORT))