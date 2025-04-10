import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeroContainer,
  HeroContentWrapper,
  VideoWrapper,
  StyledVideo,
  HeroContent,
  HeroH1,
  HeroP
} from './ProductsHeroElements';
import Video from '../../videos/productsvid.mp4';

const LineFilterHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Line Filters/ Common Mode Chokes</HeroH1>
          <HeroP>
          Our line filters are engineered for effective EMI suppression and smooth power delivery in sensitive electronic environments. Available in the following series:<br /><br />

            <strong><Link to="/products/linefilter/uu9.8series" style={{ color: 'blue', textDecoration: 'underline' }}>UU9.8 Series:</Link></strong> Offers compact size and high inductance, perfect for applications with space constraints and moderate EMI filtering needs. <br />
            <strong><Link to="/products/linefilter/uu10.5series" style={{ color: 'blue', textDecoration: 'underline' }}>UU10.5 Series:</Link></strong> Suitable for compact designs requiring improved current handling and moderate EMI suppression. <br />
            <strong><Link to="/products/linefilter/uu15series" style={{ color: 'blue', textDecoration: 'underline' }}>UU15 Series:</Link></strong> Balanced compact design providing reliable EMI suppression and efficient current handling in small to mid-power electronic devices. <br />
            <strong><Link to="/products/linefilter/uu16series" style={{ color: 'blue', textDecoration: 'underline' }}>UU16 Series:</Link></strong> Ideal for mid-range current filtering in industrial and consumer devices.<br />
            
            <strong><Link to="/products/linefilter/uu21series" style={{ color: 'blue', textDecoration: 'underline' }}>UU21 Series:</Link></strong> Optimized for high inductance and excellent EMI filtering performance in power electronics. <br />
            <strong><Link to="/products/linefilter/ut20series" style={{ color: 'blue', textDecoration: 'underline' }}>UT20 Series:</Link></strong> Cylindrical build with high inductance characteristics, ideal for applications with space and orientation flexibility. <br />
            <strong><Link to="/products/linefilter/et24series" style={{ color: 'blue', textDecoration: 'underline' }}>ET24 Series:</Link></strong> Combines efficient winding space and magnetic performance, suitable for EMI-critical environments.<br />
            <strong>Need something specific?</strong> We offer customized products designed to meet your exact requirements. Contact us today to discuss your unique needs and let us help you find the perfect solution.<br /><br />
            <Link to="/#quote" style={{ display: 'inline-block', marginTop: '10px' }}>
              <button style={{
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
              >
                Get a Custom Design Quote
              </button>
            </Link>
          </HeroP>
        </HeroContent>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default LineFilterHeroSection;