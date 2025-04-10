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

const EESeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>EE Series</HeroH1>
          <HeroP>
          The EE Series transformers feature a rectangular core shape and are widely used for their excellent efficiency, compact design, and versatility in power supply applications. These transformers are ideal for switch-mode power supplies (SMPS), LED drivers, and adapters. Models include:<br /><br />

<strong><Link to="/products/ferritetransformer/eeseries/ee10x5x5" style={{ color: 'blue', textDecoration: 'underline' }}>EE 10X5X5:</Link></strong> Compact core ideal for miniature transformers. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee13x6x6" style={{ color: 'blue', textDecoration: 'underline' }}>EE 13X6X6:</Link></strong> Ideal for small switch-mode power supplies with limited space. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee13x7x4" style={{ color: 'blue', textDecoration: 'underline' }}>EE 13X7X4:</Link></strong> Slightly wider for better magnetic efficiency in DC-DC converters. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee16x6x5" style={{ color: 'blue', textDecoration: 'underline' }}>EE 16X6X5:</Link></strong> Balanced core for low-power SMPS and converters. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee16x8x5" style={{ color: 'blue', textDecoration: 'underline' }}>EE 16X8X5:</Link></strong> Wider base improves energy handling for small transformer modules. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee19x8x5" style={{ color: 'blue', textDecoration: 'underline' }}>EE 19X8X5:</Link></strong> Mid-range transformer core used in adapters and compact inverters. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee20x10x6" style={{ color: 'blue', textDecoration: 'underline' }}>EE 20X10X6:</Link></strong> Higher cross-section for better flux distribution in offline converters. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee25x9x6" style={{ color: 'blue', textDecoration: 'underline' }}>EE 25X9X6:</Link></strong> Suitable for isolated flyback converters and auxiliary power. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee25x13x17" style={{ color: 'blue', textDecoration: 'underline' }}>EE 25X13X17:</Link></strong> Larger geometry allows more winding space for higher voltages. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee28x10x10" style={{ color: 'blue', textDecoration: 'underline' }}>EE 28X10X10:</Link></strong> Balanced dimensions for medium-frequency high-efficiency conversion. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee30" style={{ color: 'blue', textDecoration: 'underline' }}>EE 30:</Link></strong> Reliable core size for LED drivers and SMPS designs. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee32" style={{ color: 'blue', textDecoration: 'underline' }}>EE 32:</Link></strong> Slightly larger core for robust industrial and telecom power units. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee33" style={{ color: 'blue', textDecoration: 'underline' }}>EE 33:</Link></strong> Offers higher efficiency with better thermal dissipation for long runtimes. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee40" style={{ color: 'blue', textDecoration: 'underline' }}>EE 40:</Link></strong> Common size for inverter and charger applications with improved inductive capacity. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee42x15" style={{ color: 'blue', textDecoration: 'underline' }}>EE 42X15:</Link></strong> Long vertical design optimized for specific winding strategies. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee42x20" style={{ color: 'blue', textDecoration: 'underline' }}>EE 42X20:</Link></strong> Provides extended surface area for high-current applications. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee44" style={{ color: 'blue', textDecoration: 'underline' }}>EE 44:</Link></strong> Supports higher turns and inductance for heavy-duty power conversion. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee55" style={{ color: 'blue', textDecoration: 'underline' }}>EE 55:</Link></strong> Large and efficient, suitable for bulk power transformers and UPS. <br />
<strong><Link to="/products/ferritetransformer/eeseries/ee65" style={{ color: 'blue', textDecoration: 'underline' }}>EE 65:</Link></strong> High-performance core for high-frequency, high-power SMPS applications. <br />


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

export default EESeriesHeroSection;