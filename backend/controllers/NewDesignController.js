//Handles form logic (saving data, sending emails/SMS)
//Handles the logic of saving data to the database

const NewDesignForm = require('../models/NewDesignForm');

const handleNewDesign = async (req, res) => {
  try {
    const filePath = req.file ? req.file.path : null;

    const newForm = new NewDesignForm({
      ...req.body,
      filePath
    });

    await newForm.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Submission Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = handleNewDesign;
