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

const ToroidalCoilsHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Toroidal Coils</HeroH1>
          <HeroP>
          Toroidal coils are known for their closed-loop core design that minimizes electromagnetic interference (EMI) and leakage flux. They provide high inductance in a compact form, ideal for power conditioning, filtering, and signal processing in audio and medical equipment. Models include:<br /><br />

    
          <strong><Link to="/products/toroidalcoil/t9" style={{ color: 'blue', textDecoration: 'underline' }}>T9:</Link></strong> Ultra-compact coil for small electronics and signal filtering.<br />
            <strong><Link to="/products/toroidalcoil/t10" style={{ color: 'blue', textDecoration: 'underline' }}>T10:</Link></strong> Compact toroid ideal for power filtering in low-power circuits.<br />
            <strong><Link to="/products/toroidalcoil/t11" style={{ color: 'blue', textDecoration: 'underline' }}>T11:</Link></strong> Balanced size for EMI suppression and signal stability.<br />
            <strong><Link to="/products/toroidalcoil/t12" style={{ color: 'blue', textDecoration: 'underline' }}>T12:</Link></strong> Great for noise reduction and compact power applications.<br />
            <strong><Link to="/products/toroidalcoil/t12.5" style={{ color: 'blue', textDecoration: 'underline' }}>T12.5:</Link></strong> Slightly larger version offering improved inductance for filtering.<br />
            <strong><Link to="/products/toroidalcoil/t13" style={{ color: 'blue', textDecoration: 'underline' }}>T13:</Link></strong> For stable power delivery and EMI mitigation in mid-size circuits.<br />
            <strong><Link to="/products/toroidalcoil/t16" style={{ color: 'blue', textDecoration: 'underline' }}>T16:</Link></strong> Ideal for power regulation in industrial and consumer applications.<br />
            <strong><Link to="/products/toroidalcoil/t18" style={{ color: 'blue', textDecoration: 'underline' }}>T18:</Link></strong> Balanced coil for moderate current handling with compact footprint.<br />
            <strong><Link to="/products/toroidalcoil/t20" style={{ color: 'blue', textDecoration: 'underline' }}>T20:</Link></strong> Suitable for power conditioning and energy-efficient circuits.<br />
            <strong><Link to="/products/toroidalcoil/t23" style={{ color: 'blue', textDecoration: 'underline' }}>T23:</Link></strong> Offers higher inductance, perfect for filtered power supplies.<br />
            <strong><Link to="/products/toroidalcoil/t25" style={{ color: 'blue', textDecoration: 'underline' }}>T25:</Link></strong> High-performance coil used in automation and energy systems.<br />
            <strong><Link to="/products/toroidalcoil/t27" style={{ color: 'blue', textDecoration: 'underline' }}>T27:</Link></strong> Supports higher current flows with efficient magnetic retention.<br />
            <strong><Link to="/products/toroidalcoil/t30" style={{ color: 'blue', textDecoration: 'underline' }}>T30:</Link></strong> Large toroid for heavy-duty power systems and energy conversion.<br />
            <strong><Link to="/products/toroidalcoil/t36" style={{ color: 'blue', textDecoration: 'underline' }}>T36:</Link></strong> Industrial-grade coil designed for high-current and precision filtering.<br /><br />
            


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

export default ToroidalCoilsHeroSection;