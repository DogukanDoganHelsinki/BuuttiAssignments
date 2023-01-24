import express from 'express'
import { createProductTable } from './db/db.js'

createProductTable()

const server = express()

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})