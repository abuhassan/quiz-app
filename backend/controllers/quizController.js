const asyncHandler = require('express-async-handler')

// @desc Get Quizzes
// @route GET /api/quizzes
// @access Private
const getQuizzes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get quizzes' })
})

// @desc Create Quiz
// @route POST /api/quizzes
// @access Private
const createQuiz = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Create quiz' })
})

// @desc Get Goals
// @route GET /api/quizzes
// @access Private
const updateQuiz = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update quiz ${req.params.id}` })
})

// @desc Get Goals
// @route GET /api/quizzes
// @access Private
const deleteQuiz = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete quiz ${req.params.id}` })
})

module.exports = {
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
}
