const fs = require('fs');
const mongoose = require('mongoose')
const Quiz = require('../../models/quizModel')


const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        autoReconnect: true, // Enable auto-reconnection
        reconnectInterval: 1000, // Retry every 1 second
    }).then(() => {
        console.log('Connected to MongoDB successfully!')
    })


const quizs = JSON.parse(fs.readFileSync(`${__dirname}/quizs.json`, 'utf-8'))
const importData = async () => {
    try {
        // Import tours
        for (const quiz of quizs) {
            try {
                await Quiz.create(quiz);
                console.log(`Quiz "${quiz.title}" imported successfully! 😃`);
            } catch (error) {
                // Check if the error is due to duplicate key
                if (error.code === 11000) {
                    console.log(`Quiz "${quiz.title}" already exists, skipping...`);
                } else {
                    throw error; // Rethrow other errors
                }
            }
        }
        console.log('All data imported successfully! 😀😃😄😁😆😅😂🙂😉😊😇😍');
        process.exit(0);
    } catch (error) {
        console.log(error);
    }
}



const deleteData = async () => {
    try {
        await Quiz.deleteMany({})
        console.log('Data deleted successfully! 🥲😢😭😿🥹')
        process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

if (process.argv.includes('--import')) {
    importData()
} else if (process.argv.includes('--delete')) {
    deleteData()
}
