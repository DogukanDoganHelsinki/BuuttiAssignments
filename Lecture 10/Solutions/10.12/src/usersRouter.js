import express from 'express'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'

const router = express.Router()

let users = [
    { username: 'admin', hash: process.env.ADMIN_HASH }
]

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send('Missing username or password')
    }
    const existingUser = users.find(user => user.username === username)
    if (existingUser !== undefined) {
        return res.status(400).send('Username already taken')
    }

    try {
        const hash = await argon2.hash(password)
        users = users.concat({ username, hash })
        const token = jwt.sign({ username }, process.env.SECRET, { expiresIn: '1h' })
        res.send(token)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send('Missing username or password')
    }

    const user = users.find(user => user.username === username)
    if (user === undefined) {
        return res.status(401).send('Invalid username or password')
    }
    const isValidPassword = await argon2.verify(user.hash, password)
    if (!isValidPassword) {
        return res.status(401).send('Invalid username or password')
    }

    const token = jwt.sign({ username, isAdmin: username === 'admin' }, process.env.SECRET, { expiresIn: '1h' })
    res.send(token)
})

export default router