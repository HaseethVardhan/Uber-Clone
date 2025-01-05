import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/db/db.js'
import userRouter from './src/routes/user.routes.js'

dotenv.config({
    path : './.env'
})

const app = express()

connectDB()


app.use(cors({
    origin: process.env.ORIGIN_CORS,
    credentials: true
}))

app.use(express.json())
app.use(urlencoded({extended: true}))

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("Hello World");
})



export default app