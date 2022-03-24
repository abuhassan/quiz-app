const express = require('express')
const {
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require('../controllers/quizController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').get(protect, getQuizzes).post(protect, createQuiz)
router.route('/:id').delete(protect, deleteQuiz).put(protect, updateQuiz)

module.exports = router
