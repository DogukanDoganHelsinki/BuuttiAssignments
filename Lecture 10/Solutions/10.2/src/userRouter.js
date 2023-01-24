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

export default router