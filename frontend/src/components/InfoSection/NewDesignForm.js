import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle } from './InfoElements';

const NewDesignForm = ({ lightBg, id, imgStart, topLine, headline, description }) => {
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
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </Column1>

          <Column2>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Name" required style={commonInputStyle} />
                <input type="email" placeholder="Email" required style={commonInputStyle} />
                <input type="tel" placeholder="Phone" required style={commonInputStyle} />
                <input type="text" placeholder="Your Company Name" required style={commonInputStyle} />
                <input type="text" placeholder="Your Company Address" required style={commonInputStyle} />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="City" required style={{ ...commonInputStyle, flex: 1 }} />
                  <input type="text" placeholder="State" required style={{ ...commonInputStyle, flex: 1 }} />
                  <input type="text" placeholder="ZIP / Postal Code" required style={{ ...commonInputStyle, flex: 1 }} />
                </div>
                <input list="country-options" placeholder="Country" required style={commonInputStyle} />
                <datalist id="country-options">
                  {countries.map((country, index) => (
                    <option key={index} value={country} />
                  ))}
                </datalist>
                <textarea placeholder="Describe your request" rows={4} required style={{ ...commonInputStyle, resize: 'vertical' }}></textarea>
                <input type="file" required style={commonInputStyle} />
                <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#888', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', width: 'fit-content' }}>
                  Submit
                </button>
              </form>
            </div>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default NewDesignForm;