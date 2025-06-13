const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { validateFeedback } = require('../middleware/validation');

router.post('/', validateFeedback, feedbackController.submitFeedback);

module.exports = router;