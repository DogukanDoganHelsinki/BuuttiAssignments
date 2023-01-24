import express from 'express'
import { logger, notFound } from './middleware.js'
import studentRouter from './studentRouter.js'

const server = express()
server.use(express.json())
server.use(logger)

server.use('/student', studentRouter)

server.use(express.static('public'))
server.use(notFound)

const PORT = 3000
server.listen(PORT, () => console.log('Listening to port', PORT))