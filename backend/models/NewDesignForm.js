//MongoDB schema for storing quote requests
//This defines the structure of the form data that we want to save.


const mongoose = require('mongoose');

const NewDesignFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  companyName: String,
  companyAddress: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  description: String,
  filePath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NewDesignForm', NewDesignFormSchema);

