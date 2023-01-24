import express from 'express'
import productRouter from './api/productRouter.js'
import { createProductTable } from './db/db.js'

createProductTable()

const server = express()
server.use(express.json())
server.use('/products', productRouter)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})