const Quiz = require('../models/quizModel')
exports.getAllQuizes = async (req,res) => {
    try {
        const quizs = await Quiz.find()
        res.status(200).json({
            status : 'success',
            quizs
        })
    } catch (err) {
        res.status(400).json({
            status : 'error',
            message : err.message
        })
    }
}
exports.getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({
                status: 'error',
                message: 'Quiz not found'
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};
// const formatQuestions = (questions) => {
//     return questions.map(question => ({
//         questionText: question.questionText,
//         options: question.options
//     }));
// };
// const getAnswers = (questions) => {
//     let answers = [];
//     for (let i = 0; i < questions.length; i++) {
//         let question = questions[i];
//         let answer = question.options.find(option => option.isCorrect)?.optionText || '';
//         answers.push({ questionText: question.questionText, answer: answer });
//     }
//     return answers;
// };
const formatQuestions = (questions) => {
    return questions.map(question => {
        const answer = question.options.find(option => option.isCorrect)?.optionText || '';
        return {
            questionText: question.questionText,
            options: question.options,
            answer: answer
        };
    });
};

exports.getQuestionsAndItsAnswer = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        const formattedQuestions = formatQuestions(quiz.questions);
        res.status(200).json({
            status: 'success',
            questions: formattedQuestions,
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

