const express = require('express')
const {
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require('../controllers/quizController')
const router = express.Router()

router.route('/').get(getQuizzes).post(createQuiz)
router.route('/:id').delete(deleteQuiz).put(updateQuiz)

module.exports = router
