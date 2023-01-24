
import server from '../../../../Lecture 14/Solutions/14.1/src/api/server.js'
import { createProductTable } from './db/db.js'

createProductTable()

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})