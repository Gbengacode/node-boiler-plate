import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import router from './routes/appRouter.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(router)

const  CONNECTION_URL = `mongodb+srv://gbenga:${process.env.PASSWORD}@cluster0.qxgxk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority` 
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const db  = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log("connected to mongoose db")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})
