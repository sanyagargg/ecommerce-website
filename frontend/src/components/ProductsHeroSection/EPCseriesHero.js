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

const EPCSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>EPC Series</HeroH1>
          <HeroP>
            The EPC Series transformers feature a planar, flat-profile design ideal for compact power supplies and high-frequency applications with excellent thermal performance. Common in SMPS, automotive, and industrial converters. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/epcseries/epc13" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 13:</Link></strong> Slim core for compact converters in low-power SMPS.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc14" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 14:</Link></strong> Low-profile transformer suited for efficient space-saving designs.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc17" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 17:</Link></strong> Moderate size for medium power applications in confined spaces.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc19" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 19:</Link></strong> Good thermal performance for automotive or SMPS use.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc25" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 25:</Link></strong> Larger core for enhanced power transfer and cooling.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc27" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 27:</Link></strong> Suitable for high-density power supply designs.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc30" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 30:</Link></strong> Optimized for energy-efficient industrial-grade applications.<br />
            <strong><Link to="/products/ferritetransformer/epcseries/epc39" style={{ color: 'blue', textDecoration: 'underline' }}>EPC 39:</Link></strong> High-capacity transformer for powerful converters and modules.<br /><br />

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

export default EPCSeriesHeroSection;