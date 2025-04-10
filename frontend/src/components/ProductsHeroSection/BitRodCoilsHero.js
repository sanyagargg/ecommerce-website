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

const BitRodCoilsHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Bit-Rod Coils</HeroH1>
          <HeroP>
          Bit-Rod coils are compact inductors designed for high-frequency signal filtering and energy storage in space-constrained applications. They are commonly used in LED drivers, DC-DC converters, and power modules due to their durability and efficiency. Models include:<br /><br />

            <strong><Link to="/products/bitrodcoil/3x10" style={{ color: 'blue', textDecoration: 'underline' }}>3×10:</Link></strong> Ultra-small coil ideal for compact circuits and signal integrity.<br />
            <strong><Link to="/products/bitrodcoil/3x13" style={{ color: 'blue', textDecoration: 'underline' }}>3×13:</Link></strong> Slightly larger variant offering improved inductance in tight spaces.<br />
            <strong><Link to="/products/bitrodcoil/4x14" style={{ color: 'blue', textDecoration: 'underline' }}>4×14:</Link></strong> Balanced option for filtering in mid-power applications.<br />
            <strong><Link to="/products/bitrodcoil/5x15" style={{ color: 'blue', textDecoration: 'underline' }}>5×15:</Link></strong> Popular model for general-purpose DC filtering.<br />
            <strong><Link to="/products/bitrodcoil/6x20" style={{ color: 'blue', textDecoration: 'underline' }}>6×20:</Link></strong> Medium-sized coil supporting moderate current flows.<br />
            <strong><Link to="/products/bitrodcoil/6x25" style={{ color: 'blue', textDecoration: 'underline' }}>6×25:</Link></strong> Offers extended core for greater inductance and performance.<br />
            <strong><Link to="/products/bitrodcoil/8x20" style={{ color: 'blue', textDecoration: 'underline' }}>8×20:</Link></strong> Robust choice for stable operation under load.<br />
            <strong><Link to="/products/bitrodcoil/8x25" style={{ color: 'blue', textDecoration: 'underline' }}>8×25:</Link></strong> Higher energy storage capacity for demanding power modules.<br />
            <strong><Link to="/products/bitrodcoil/10x30" style={{ color: 'blue', textDecoration: 'underline' }}>10×30:</Link></strong> Large coil for industrial-grade energy regulation.<br />
            <strong><Link to="/products/bitrodcoil/10x35" style={{ color: 'blue', textDecoration: 'underline' }}>10×35:</Link></strong> Heavy-duty option suited for high-current, low-loss scenarios.<br /><br />



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

export default BitRodCoilsHeroSection;