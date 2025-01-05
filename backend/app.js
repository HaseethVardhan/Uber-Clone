import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({
    path : './.env'
})

const app = express()

app.use(cors({
    origin: process.env.ORIGIN_CORS,
    credentials: true
}))

app.get('/', (req, res) => {
    res.send("Hello World");
})

export default app