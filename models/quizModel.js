const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    questions: [{
            questionText : { 
                type: String,
                required : true
            },
            options : [{
                alternative: {
                    type: String,
                    required: true,
                    enum: ['a', 'b', 'c', 'd']
                },
                optionText :{
                    type : String,
                    required : true
                },
                isCorrect : {
                    type : Boolean,
                    required : true
                }
            }]
        }]
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;