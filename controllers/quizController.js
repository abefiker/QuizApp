const Quiz = require('../models/quizModel')
exports.getAllQuizes = async (req,res,next) => {
    const quizs = await Quiz.find()
    res.status(200).json({
        status : 'success',
        quizs
    })
}