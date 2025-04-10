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

const EERSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>EER Series</HeroH1>
          <HeroP>
            The EER Series transformers offer a high winding area and compact form, making them suitable for high-frequency and high-power applications like SMPS, chargers, and LED drivers. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/eerseries/eer20" style={{ color: 'blue', textDecoration: 'underline' }}>EER 20:</Link></strong> Compact, efficient core for general power conversion and chargers.<br />
            <strong><Link to="/products/ferritetransformer/eerseries/eer25" style={{ color: 'blue', textDecoration: 'underline' }}>EER 25:</Link></strong> Mid-size transformer for medium-power SMPS and lighting.<br />
            <strong><Link to="/products/ferritetransformer/eerseries/eer28" style={{ color: 'blue', textDecoration: 'underline' }}>EER 28:</Link></strong> Versatile design for power conversion in industrial circuits.<br />
            <strong><Link to="/products/ferritetransformer/eerseries/eer35" style={{ color: 'blue', textDecoration: 'underline' }}>EER 35:</Link></strong> Suitable for high-power devices with higher efficiency needs.<br />
            <strong><Link to="/products/ferritetransformer/eerseries/eer39" style={{ color: 'blue', textDecoration: 'underline' }}>EER 39:</Link></strong> Large-sized transformer optimized for high-frequency industrial use.<br /><br />

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

export default EERSeriesHeroSection;