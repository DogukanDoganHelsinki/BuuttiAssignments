import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import { logger, notFound } from './middleware.js'
import userRouter from './usersRouter.js'
import bookRouter from './booksRouter.js'

const server = express()
server.use(helmet())
server.use(express.json())
server.use(logger)

server.use(express.static('public'))
server.use('/api/v1/users', userRouter)
server.use('/api/v1/books', bookRouter)

server.use(notFound)

server.listen(3000, () => console.log('Listening to port 3000'))