import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import { logger, notFound } from './middleware.js'
import userRouter from './usersRouter.js'
import bookRouter from './booksRouter.js'
import { authenticateUser } from '../../10.11/src/middleware.js'

const server = express()
server.use(helmet())
server.use(express.json())
server.use(logger)

server.use(express.static('public'))
server.use('/api/v1/users', userRouter)
server.use('/api/v1/books', authenticateUser, bookRouter)

server.use(notFound)

export default server