import express from 'express'
import path from 'path'
import url from 'url'
import songList from './songs.js'

const server = express()

server.get('/songs', (_req, res) => {
    const songIdList = songList.map(({ id, title }) => ({ id, title }))
    res.send(songIdList)
})

server.get('/songs/:id', (req, res) => {
    const id = Number(req.params.id)
    const song = songList.find(song => song.id === id)
    if (!song) return res.status(404).send()
    res.send(song)
})

// Absolute directory is required for the sendFile method
const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url))
const distDirectory = path.resolve(currentDirectory, '../dist/')

server.use('/', express.static(distDirectory))

// Redirect all other requests to React Router
server.get('*', (req, res) => {
    res.sendFile('index.html', { root: distDirectory })
})

server.listen(3000, () => {
    console.log('Songbook Server v5 listening port 3000')
})