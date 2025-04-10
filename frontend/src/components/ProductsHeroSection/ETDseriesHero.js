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

const ETDSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>ETD Series</HeroH1>
          <HeroP>
            The ETD Series transformers are optimized for high power output in compact designs, ideal for switched-mode power supplies, battery chargers, and industrial converters. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/etdseries/etd29" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 29:</Link></strong> Compact transformer for low-profile, efficient power solutions.<br />
            <strong><Link to="/products/ferritetransformer/etdseries/etd34" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 34:</Link></strong> Suitable for medium-power SMPS and compact battery chargers.<br />
            <strong><Link to="/products/ferritetransformer/etdseries/etd35" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 35:</Link></strong> Balanced core for stable performance in converter circuits.<br />
            <strong><Link to="/products/ferritetransformer/etdseries/etd39" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 39:</Link></strong> Offers excellent power handling with minimal EMI.<br />
            <strong><Link to="/products/ferritetransformer/etdseries/etd40" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 40:</Link></strong> Ideal for industrial-grade SMPS and compact inverter systems.<br />
            <strong><Link to="/products/ferritetransformer/etdseries/etd44" style={{ color: 'blue', textDecoration: 'underline' }}>ETD 44:</Link></strong> High-capacity transformer for demanding energy conversion applications.<br /><br />

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

export default ETDSeriesHeroSection;