import express from 'express'
import noticeRouter from './noticeRouter.js'
import secureNoticeRouter from './secureNoticeRouter.js'
import { authenticate } from './middleware.js'

const server = express()
server.use(express.json())

server.use('/notices', noticeRouter)
server.use('/secret', authenticate, secureNoticeRouter)

const { PORT } = process.env
server.listen(PORT, () => console.log('Note server listening to port', PORT))