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

const EFDSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>EFD Series</HeroH1>
          <HeroP>
  The EFD Series transformers feature a low-profile, flat core design that makes them perfect for ultra-slim applications. Known for their high efficiency and space-saving structure, these transformers are ideal for LCD TVs, telecom equipment, and compact SMPS circuits. Models include:<br /><br />

  <strong><Link to="/products/ferritetransformer/efdseries/efd10" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 10:</Link></strong> Ultra-slim design ideal for miniature power supplies and wearable electronics. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd12" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 12:</Link></strong> Low-profile transformer optimized for mobile chargers and compact SMPS. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd15" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 15:</Link></strong> Compact and efficient, perfect for telecom and handheld device applications. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd20" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 20:</Link></strong> Balanced size for mid-power SMPS and industrial control systems. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd21" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 21:</Link></strong> Slim yet powerful for LED drivers and communication devices. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd25" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 25:</Link></strong> Enhanced performance for energy-efficient adapters and power modules. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd30" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 30:</Link></strong> Suitable for higher wattage SMPS in space-constrained environments. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd31" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 31:</Link></strong> Offers good thermal performance for flat, high-efficiency converters. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd34" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 34:</Link></strong> High power density core for compact industrial electronics. <br />
<strong><Link to="/products/ferritetransformer/efdseries/efd40" style={{ color: 'blue', textDecoration: 'underline' }}>EFD 40:</Link></strong> Designed for slim-profile high-wattage power supplies and LED drivers. <br />



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

export default EFDSeriesHeroSection;