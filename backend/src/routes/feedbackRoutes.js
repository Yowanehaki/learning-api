const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { validateFeedback } = require('../middleware/validation');

router.post('/', validateFeedback, feedbackController.submitFeedback);
router.get('/sessions/:sessionId', feedbackController.getFeedbackBySessionId);
router.get('/summary', feedbackController.getFeedbackSummary);

module.exports = router;