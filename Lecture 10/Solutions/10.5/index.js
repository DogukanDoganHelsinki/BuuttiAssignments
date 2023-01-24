import 'dotenv/config'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET
const options = { expiresIn: '15m'}

const generateToken = (payload) => jwt.sign(payload, secret, options)

const token = generateToken({ data: process.argv[2] })
console.log(token)