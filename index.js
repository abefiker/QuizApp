const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const quizRouter = require('./routes/quizRoute')

dotenv.config({ path: './config.env' });
const db = process.env.DATABASE

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
  autoReconnect: true, // Enable auto-reconnection
  reconnectInterval: 1000, // Retry every 1 second
})
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})

app.use('/api/v1/quiz', quizRouter)
app.get('/', (req, res) => {
    res.send('Quiz app')
})

app.listen({ port: 3000 }, () => {
    console.log('quiz app is running on port 3000')
})