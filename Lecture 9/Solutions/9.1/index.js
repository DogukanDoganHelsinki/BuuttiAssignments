import http from 'http'

const server = http.createServer((req, res) => {
    res.write('Hello World!')
    res.end()
})

server.listen(3000)
console.log('Listening to port 3000')