//API routes for handling form submissions
//Defines the API route that the frontend form will POST to.

const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const handleNewDesign = require('../controllers/NewDesignController');

router.post('/', upload.single('file'), handleNewDesign);

module.exports = router;

