require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const route  = require('./router/router')

const app = express()
const port = process.env.PORT || 2000

app.use(express.json())

mongoose.set('strictQuery' , false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        if(conn) console.log(`MongoDB , Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

connectDB()

app.use('/api' , route)

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`)
})