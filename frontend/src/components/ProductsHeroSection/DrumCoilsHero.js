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

const DrumCoilsHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Drum Coils</HeroH1>
          <HeroP>
          Drum Coils are compact, cylindrical inductors with an open magnetic path, making them well-suited for applications like energy storage, filtering, and DC-DC conversion. Their simple structure and efficient performance make them ideal for power supplies and switching regulators.Models include:<br /><br />

            <strong><Link to="/products/drumcoil/drum6x8" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 6X8:</Link></strong> Ultra-compact coil for space-constrained applications like portable electronics. <br />
            <strong><Link to="/products/drumcoil/drum8x10" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 8X10:</Link></strong> Small footprint inductor with slightly higher current capacity for compact DC-DC converters. <br />
            <strong><Link to="/products/drumcoil/drum10x12" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 10X12:</Link></strong> Balanced size for mid-range power supplies and efficient energy storage. <br />
            <strong><Link to="/products/drumcoil/drum10x15" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 10X15:</Link></strong> Offers greater inductance with minimal added footprint—suitable for switching regulators.<br />
            
            <strong><Link to="/products/drumcoil/drum12x15" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 12X15:</Link></strong> Enhanced thermal performance and current handling for industrial power modules.<br />

            <strong><Link to="/products/drumcoil/drum15x22" style={{ color: 'blue', textDecoration: 'underline' }}>Drum 15X22:</Link></strong> High-capacity inductor for power-hungry circuits needing strong magnetic coupling. <br />

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

export default DrumCoilsHeroSection;