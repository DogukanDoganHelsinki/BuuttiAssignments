import express from 'express'
import argon2 from 'argon2'

const router = express.Router()

let users = []

router.post('/register', async (req, res) => {
    const { username, password } = req.body

    const hash = await argon2.hash(password)
    const user = { username, hash}

    users = users.concat(user)
    console.log(user)

    res.status(201).send()
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const existingUser = users.find(user => user.username === username)
    if (existingUser === null) {
        res.status(401).send('Invalid username or password')
    }

    const isValidPassword = await argon2.verify(existingUser.hash, password)
    if (!isValidPassword) {
        return res.status(401).send('Invalid username or password')
    }

    res.status(204).send()

})

export default router