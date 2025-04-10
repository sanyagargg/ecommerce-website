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

const PQSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>PQ Series</HeroH1>
          <HeroP>
            The PQ Series transformers combine compact dimensions with high power output, offering minimal leakage inductance and ideal for energy-efficient SMPS and converters. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/pqseries/pq2012" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 2012:</Link></strong> Small-sized core ideal for ultra-compact, low-power converters.<br />
            <strong><Link to="/products/ferritetransformer/pqseries/pq2016" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 2016:</Link></strong> Compact transformer for space-constrained applications.<br />
            <strong><Link to="/products/ferritetransformer/pqseries/pq2620" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 2620:</Link></strong> Balanced size for efficient energy handling and low EMI.<br />
            <strong><Link to="/products/ferritetransformer/pqseries/pq2625" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 2625:</Link></strong> Suitable for medium-power SMPS and DC-DC converters.<br />
            <strong><Link to="/products/ferritetransformer/pqseries/pq3220" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 3220:</Link></strong> Larger core for high-efficiency designs with minimal losses.<br />
            <strong><Link to="/products/ferritetransformer/pqseries/pq3230" style={{ color: 'blue', textDecoration: 'underline' }}>PQ 3230:</Link></strong> High-capacity transformer for industrial-grade power circuits.<br /><br />

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

export default PQSeriesHeroSection;