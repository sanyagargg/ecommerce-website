import React, { useState } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
} from './InfoElements';

const NewDesignForm = ({ lightBg, id, imgStart, topLine, headline, description }) => {
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

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFileName('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) {
      data.append('file', file);
    }

    try {
      const res = await fetch('http://localhost:5000/api/newDesign/newDesign', {
        method: 'POST',
        body: data
      });

      if (res.ok) {
        setSubmitted(true);
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
        setFile(null);
        setFileName('');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const commonInputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontFamily: 'inherit',
    fontSize: '14px'
  };

  const countries = [
    "United States", "Canada", "United Kingdom", "India", "Germany", "France",
    "Australia", "Brazil", "Japan", "China", "Russia", "Italy", "Mexico",
    "South Korea", "Netherlands", "Spain", "Sweden", "Switzerland", "South Africa"
  ];

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={!lightBg}>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </Column1>

          <Column2>
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input name="name" type="text" placeholder="Name *" required style={commonInputStyle} value={formData.name} onChange={handleChange} />
                <input name="email" type="email" placeholder="Email *" required style={commonInputStyle} value={formData.email} onChange={handleChange} />
                <input name="phone" type="tel" placeholder="Phone *" required style={commonInputStyle} value={formData.phone} onChange={handleChange} />
                <input name="companyName" type="text" placeholder="Your Company Name *" required style={commonInputStyle} value={formData.companyName} onChange={handleChange} />
                <input name="companyAddress" type="text" placeholder="Your Company Address *" required style={commonInputStyle} value={formData.companyAddress} onChange={handleChange} />

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <input name="city" type="text" placeholder="City *" required style={{ ...commonInputStyle, flex: '1 1 30%', minWidth: '100px' }} value={formData.city} onChange={handleChange} />
                  <input name="state" type="text" placeholder="State *" required style={{ ...commonInputStyle, flex: '1 1 30%', minWidth: '100px' }} value={formData.state} onChange={handleChange} />
                  <input name="postalCode" type="text" placeholder="ZIP / Postal Code *" required style={{ ...commonInputStyle, flex: '1 1 30%', minWidth: '100px' }} value={formData.postalCode} onChange={handleChange} />
                </div>

                <input
                  name="country"
                  list="country-options"
                  placeholder="Country *"
                  required
                  style={commonInputStyle}
                  value={formData.country}
                  onChange={handleChange}
                />
                <datalist id="country-options">
                  {countries.map((country, index) => (
                    <option key={index} value={country} />
                  ))}
                </datalist>

                <textarea
                  name="description"
                  placeholder="Describe your request *"
                  rows={4}
                  required
                  style={{ ...commonInputStyle, resize: 'vertical' }}
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>

                <div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    style={commonInputStyle}
                  />
                  {fileName && (
                    <div style={{ marginTop: '5px', fontSize: '14px', color: '#333' }}>
                      Selected File: <strong>{fileName}</strong>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    alignSelf: 'start'
                  }}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>

                {submitted && <p style={{ color: 'green', marginTop: '10px' }}>Form submitted successfully!</p>}
              </form>
            </div>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default NewDesignForm;
