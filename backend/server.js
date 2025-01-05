import  http from 'http'
import app from './app.js'

const server = http.createServer(app)

server.listen(process.env.PORT || 4000, () => {
    console.log("Server is running...")
})

