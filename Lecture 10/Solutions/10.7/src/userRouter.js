import express from 'express'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'

const router = express.Router()

let users = []

router.post('/register', async (req, res) => {
    const { username, password } = req.body

    const hash = await argon2.hash(password)
    const user = { username, hash }

    users = users.concat(user)

    const token = jwt.sign({ username }, process.env.SECRET)
    res.status(200).send(token)
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const existingUser = users.find(user => user.username === username)
    if (existingUser === undefined) {
        res.status(401).send('Invalid username or password')
    }

    const isValidPassword = await argon2.verify(existingUser.hash, password)
    if (!isValidPassword) {
        return res.status(401).send('Invalid username or password')
    }

    const token = jwt.sign({ username }, process.env.SECRET)
    res.status(200).send(token)
})

router.post('/admin', async (req, res) => {
    const { username, password } = req.body

    const isAdminUsername = username === process.env.ADMIN_USERNAME
    const isAdminPassword = await argon2.verify(process.env.ADMIN_PASSWORD_HASH, password)

    if (!isAdminUsername || !isAdminPassword) {
        return res.status(401).send('Invalid username or password')
    }

    const token = jwt.sign({ username: 'admin', isAdmin: true }, process.env.SECRET)

    res.status(200).send(token)

})

export default router