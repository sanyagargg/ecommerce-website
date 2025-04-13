const express = require('express');
const router = express.Router();
const { handleGetQuoteSubmission } = require('../controllers/GetQuoteController');

// Handle POST request for GetQuote form submission
router.post('/', handleGetQuoteSubmission);

module.exports = router;
