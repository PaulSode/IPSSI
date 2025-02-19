import http from 'http';
import dotenv from 'dotenv'

const server = http.createServer()

dotenv.config()
const port = process.dotenv.port


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})