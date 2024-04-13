const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' });
const db = process.env.DATABASE

mongoose.connect(db, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
})
mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})


app.get('/', (req, res) => {
    res.send('Quiz app')
})

app.listen({port: 3000},()=>{
    console.log('quiz app is running on port 3000')
})