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

const ECSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>EC Series</HeroH1>
          <HeroP>
            The EC Series cores offer compact and efficient transformer designs for high-density power conversion. They are well-suited for switch-mode power supplies and applications requiring high performance in limited space. Models include:<br /><br />

            <strong><Link to="/products/ferritetransformer/ecseries/ec28" style={{ color: 'blue', textDecoration: 'underline' }}>EC 28:</Link></strong> Compact core optimized for compact SMPS and converters.<br />
            <strong><Link to="/products/ferritetransformer/ecseries/ec39" style={{ color: 'blue', textDecoration: 'underline' }}>EC 39:</Link></strong> Balanced profile ideal for mid-power applications.<br />
            <strong><Link to="/products/ferritetransformer/ecseries/ec40" style={{ color: 'blue', textDecoration: 'underline' }}>EC 40:</Link></strong> Larger design for higher current capacity and thermal efficiency.<br /><br />

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

export default ECSeriesHeroSection;