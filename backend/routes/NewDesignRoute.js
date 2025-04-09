//API routes for handling form submissions
//Defines the API route that the frontend form will POST to.

const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // middleware name is correct
const { handleNewDesignSubmission } = require('../controllers/NewDesignController');

// Use the actual function
router.post('/newDesign', upload.single('file'), handleNewDesignSubmission);

module.exports = router;

