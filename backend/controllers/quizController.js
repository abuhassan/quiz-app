// @desc Get Quizzes
// @route GET /api/quizzes
// @access Private
const getQuizzes = async (req, res) => {
  res.status(200).json({ message: 'Get quizzes' })
}

// @desc Create Quiz
// @route POST /api/quizzes
// @access Private
const createQuiz = async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Create quiz' })
}

// @desc Get Goals
// @route GET /api/quizzes
// @access Private
const updateQuiz = async (req, res) => {
  res.status(200).json({ message: `Update quiz ${req.params.id}` })
}

// @desc Get Goals
// @route GET /api/quizzes
// @access Private
const deleteQuiz = async (req, res) => {
  res.status(200).json({ message: `Delete quiz ${req.params.id}` })
}

module.exports = {
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
}
