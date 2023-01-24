import 'dotenv/config'
import express from 'express'
import { logger, notFound, authenticate } from './middleware.js'
import studentRouter from './studentRouter.js'
import userRouter from './userRouter.js'

const server = express()
server.use(express.json())
server.use(logger)

server.use('/student', authenticate, studentRouter)
server.use('/user', userRouter)

server.use(express.static('public'))
server.use(notFound)

export default server