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

const POTSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>POT Series</HeroH1>
          <HeroP>
            The POT Series cores are designed for exceptional magnetic shielding and are commonly used in applications demanding low electromagnetic interference. They are ideal for audio transformers, telecom systems, and precision power electronics. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/potseries/pot2311" style={{ color: 'blue', textDecoration: 'underline' }}>POT 23/11:</Link></strong> Compact core with minimal EMI for signal isolation.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot2511" style={{ color: 'blue', textDecoration: 'underline' }}>POT 25/11:</Link></strong> Efficient for noise-sensitive low-power electronics.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot3019" style={{ color: 'blue', textDecoration: 'underline' }}>POT 30/19:</Link></strong> Balanced size ideal for power conversion and filtering.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot3119" style={{ color: 'blue', textDecoration: 'underline' }}>POT 31/19:</Link></strong> Compact with good shielding for telecom use.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot3314" style={{ color: 'blue', textDecoration: 'underline' }}>POT 33/14:</Link></strong> Slim profile, effective for compact circuits.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot3319" style={{ color: 'blue', textDecoration: 'underline' }}>POT 33/19:</Link></strong> General purpose size with enhanced EMI control.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot3324" style={{ color: 'blue', textDecoration: 'underline' }}>POT 33/24:</Link></strong> Wide body core for higher power designs.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot4025" style={{ color: 'blue', textDecoration: 'underline' }}>POT 40/25:</Link></strong> Mid-large transformer core for audio and filtering.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot4027" style={{ color: 'blue', textDecoration: 'underline' }}>POT 40/27:</Link></strong> Robust for signal processing and industrial electronics.<br />
            <strong><Link to="/products/ferritetransformer/potseries/pot4028" style={{ color: 'blue', textDecoration: 'underline' }}>POT 40/28:</Link></strong> High-performance shielding for critical systems.<br /><br />

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

export default POTSeriesHeroSection;