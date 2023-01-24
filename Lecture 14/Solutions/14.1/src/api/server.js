import express from 'express'
import productRouter from './productRouter.js'

const server = express()
server.use(express.json())
server.use('/products', productRouter)

export default server