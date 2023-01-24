import express from 'express'
import { logger, notFound } from './middleware.js'

const server = express()
server.use(express.json())
server.use(logger)

let students = []

server.get('/students', (req, res) => {
    res.send(students.map(student => student.id))
})

server.get('/student/:id', (req, res) => {
    const id = Number(req.params.id)
    const student = students.find(student => student.id === id)
    if (student === null) {
        res.status(404).send()
    }
    res.send(student)
})

server.post('/student', (req, res) => {
    const { id, name, email } = req.body
    if (!id || !name || !email) {
        return res.status(400).send('Invalid student information')
    }

    students = students.concat({ id, name, email })
    res.status(201).send()
})

server.use(notFound)

const PORT = 3000
server.listen(PORT, () => console.log('Listening to port', PORT))