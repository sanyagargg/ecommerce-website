
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

import ContactNavbar from '../components/ContactNavbar';

import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap
} from '../components/InfoSection/InfoElements';

function Contact() {
  return (
    <>
      <ContactNavbar />

      {/* ➕ Custom Description + Map Section */}
      <InfoContainer lightBg={true} id="map-section">
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <Heading lightText={false}>Contact Us</Heading>
                <Subtitle darkText={true}>
                  Contact us at :
                  <br /><br />
                  <strong>Email</strong>: charismaticelectronics@gmail.com
                  <br></br>
                  <strong>Phone</strong> : +91 9818170585
                  <br></br>
                  <strong>Address:</strong> Plot No. 42, Sector 6, Industrial Area, Gurugram, Haryana, India
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393749937!2d77.0688979029539!3d28.527582006376057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1db6ac5a0f2d%3A0x3d8b9b5b3a0e6e0!2sNew+Delhi%2C+Delhi%2C+India!5e0!3m2!1sen!2sus!4v1617768073401!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: "0", borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <Footer />
    </>
  );
}

export default Contact;
