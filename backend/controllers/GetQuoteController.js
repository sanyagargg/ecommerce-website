// Handles form logic (saving data, sending emails/SMS)
// Handles the logic of saving data to the database

const GetQuoteForm = require('../models/GetQuoteForm');
const sendEmail = require('../utils/email');

const handleGetQuoteSubmission = async (req, res) => {
  try {
    console.log('Received submission:', req.body); // <== Add this
    const {
      name, email, phone, companyName,
      companyAddress, city, state, postalCode,
      country, description
    } = req.body;

    const filePath = req.file ? req.file.path : null;

    const newEntry = new GetQuoteForm({
      name,
      email,
      phone,
      companyName,
      companyAddress,
      city,
      state,
      postalCode,
      country,
      description,
      filePath
    });

    await newEntry.save();

    // Send email notification
    await sendEmail({ ...req.body, file: filePath });

    res.status(200).json({ message: 'Form submitted and email sent successfully.' });
  } catch (error) {
    console.error('Error in form submission:', error);
    res.status(500).json({ message: 'Something went wrong while processing your request.' });
  }
};

module.exports = { handleGetQuoteSubmission };
