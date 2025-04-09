//Handles form logic (saving data, sending emails/SMS)
//Handles the logic of saving data to the database

const NewDesign = require('../models/NewDesignForm');
const sendEmail = require('../utils/email');

const handleNewDesignSubmission = async (req, res) => {
  try {
    const {
      name, email, phone, companyName,
      companyAddress, state, country, description
    } = req.body;

    const file = req.file ? req.file.filename : null;

    const newEntry = new NewDesign({
      name, email, phone, companyName,
      companyAddress, state, country, description, file
    });

    await newEntry.save();

    await sendEmail({ ...req.body, file });

    res.status(200).json({ message: 'Form submitted and email sent successfully.' });
  } catch (error) {
    console.error('Error in form submission:', error);
    res.status(500).json({ message: 'Something went wrong while processing your request.' });
  }
};

module.exports = { handleNewDesignSubmission };
