import React, { useState } from 'react';
import { ModalForm } from './ProductGridElements';

const GetQuote = ({ productTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // Ensure the form fields are validated before submission
    if (!form.checkValidity()) {
      form.reportValidity(); // This triggers the browser validation error messages
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getQuote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          companyAddress: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          description: ''
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong');
    }
  };

  return (
    <ModalForm onSubmit={handleSubmit} style={{ overflowY: 'scroll', height: '80vh' }}>
      <h2>Get a Quote for {productTitle}</h2>

      {isSubmitted && <p style={{ color: 'green', textAlign: 'center' }}>Form Successfully Submitted!</p>}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        placeholder="Your Company Name"
        required
      />
      <input
        type="text"
        name="companyAddress"
        value={formData.companyAddress}
        onChange={handleInputChange}
        placeholder="Your Company Address"
        required
      />

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
         
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State"
          
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="ZIP Code"
        />
      </div>

      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
        placeholder="Country"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Your Requirements"
        rows={4}
      ></textarea>

      <button type="submit">Submit</button>
    </ModalForm>
  );
};

export default GetQuote;
