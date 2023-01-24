import 'dotenv/config'
import server from './server.js'

const PORT = process.env.PORT
server.listen(PORT, () => console.log('Listening to port', PORT))