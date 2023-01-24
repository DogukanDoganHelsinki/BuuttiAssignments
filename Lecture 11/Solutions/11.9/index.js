import express from 'express'

const server = express()
server.use(express.json())

let notices = []

server.get('/', (_req, res) => {
    res.send(notices)
})

server.post('/', (req, res) => {
    const notice = req.body?.notice ?? ''
    notices = notices.concat(notice)
    res.send()
})

server.delete('/:index', (req, res) => {
    const index = Number(req.params.index)
    notices = notices.filter((_notice, i) => i !== index)
    res.send()
})

server.listen(3000, () => console.log('Note server listening to port 3000'))