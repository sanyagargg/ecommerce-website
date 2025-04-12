import React from 'react';
import { ModalForm } from './ProductGridElements';

const GetQuote = ({ productTitle }) => {
  return (
    <ModalForm>
      <h2>Get a Quote for {productTitle}</h2>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="tel" placeholder="Phone" />
      <input type="text" placeholder="Your Company Name" />
      <input type="text" placeholder="Your Company Address" />
      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="text" placeholder="City" name="city" required />
        <input type="text" name="state" placeholder="State" required />
        <input type="text" name="postalCode" placeholder="ZIP Code" required />
      </div>
      <input type="text" placeholder="Country" />
      <textarea placeholder="Your Requirements" rows={4}></textarea>
      <button type="submit">Submit</button>
    </ModalForm>
  );
};

export default GetQuote;
