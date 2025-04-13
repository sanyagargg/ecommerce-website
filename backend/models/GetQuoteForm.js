const mongoose = require('mongoose');

const GetQuoteFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  companyName: String,
  companyAddress: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  description: String, // Requirements text from the form
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GetQuoteForm', GetQuoteFormSchema);
