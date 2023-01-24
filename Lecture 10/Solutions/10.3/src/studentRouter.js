import express from 'express'

const router = express.Router()

let students = []

router.get('/', (req, res) => {
    res.send(students.map(student => student.id))
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const student = students.find(student => student.id === id)
    if (student === null) {
        res.status(404).send()
    }
    res.send(student)
})

router.post('/', (req, res) => {
    const { id, name, email } = req.body
    if (!id || !name || !email) {
        return res.status(400).send('Invalid student information')
    }

    students = students.concat({ id, name, email })
    res.status(201).send()
})

router.put('/:id', (req, res) => {
    const { name, email } = req.body
    if (!name && !email) {
        return res.status(400).send('Invalid student information')
    }

    const id = Number(req.params.id)
    const student = students.find(student => student.id === id)
    if (student === null) {
        return res.status(404).send()
    }

    const updatedStudent = {
        ...student,
        name: name ?? student.name,
        email: email ?? student.email
    }

    students = students.map(student => student.id === id ? updatedStudent : student)
    res.status(204).send()
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const newStudents = students.filter(student => student.id !== id)

    if (newStudents.length === students.length) {
        return res.status(404).send()
    }
    students = newStudents
    res.status(204).send()
})

export default router