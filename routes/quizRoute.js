const express = require('express')
const router = express.Router()
const quizController = require('../controllers/quizController')
router.get('/', quizController.getAllQuizes)
router.get('/:id', quizController.getQuiz)
router.get('/:id/questions', quizController.getQuestionsAndItsAnswer)
module.exports = router