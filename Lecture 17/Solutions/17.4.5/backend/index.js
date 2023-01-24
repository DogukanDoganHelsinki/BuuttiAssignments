import express from 'express'
import url from 'url'
import path from 'path'

const server = express()

const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url))
const distDirectory = path.resolve(currentDirectory, './dist/')

server.use('/', express.static(distDirectory))

// server.get('*', (req, res) => {
//     res.sendFile('index.html', { root: distDirectory })
// })
server.use((req, res) => {
    res.sendFile('index.html', { root: distDirectory })
})

server.listen(3000)