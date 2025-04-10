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

const FerriteTransformerHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Ferrite Transformers</HeroH1>
          <HeroP>
            Our ferrite transformers are optimized for high-frequency use, offering excellent efficiency, compact size, and low EMI. Built with advanced ferrite materials, they suit SMPS circuits, inverters, and chargers.<br /><br />

            <strong><Link to="/products/ferritetransformer/eeseries" style={{ color: 'blue', textDecoration: 'underline' }}>EE Series:</Link></strong> Available in models: E20, E25, E33, E40, E55, E65, E70, E80, E100. Classic design suitable for general-purpose transformers in power supplies. <br />
            <strong><Link to="/products/ferritetransformer/efdseries" style={{ color: 'blue', textDecoration: 'underline' }}>EFD Series:</Link></strong> Available in models: EFD15, EFD20, EFD25, EFD30. Compact and flat design ideal for space-constrained applications like adapters and chargers. <br />
            <strong><Link to="/products/ferritetransformer/rmseries" style={{ color: 'blue', textDecoration: 'underline' }}>RM Series:</Link></strong> Available in models: RM6, RM8, RM10, RM12. Round modular design providing low leakage and excellent shielding for signal and power use. <br />
            <strong><Link to="/products/ferritetransformer/etdseries" style={{ color: 'blue', textDecoration: 'underline' }}>ETD Series:</Link></strong> Available in models: ETD29, ETD34, ETD39, ETD44, ETD49. Designed for high power and low profile applications, commonly used in switch-mode power supplies. <br />
            <strong><Link to="/products/ferritetransformer/epcseries" style={{ color: 'blue', textDecoration: 'underline' }}>EPC Series:</Link></strong> Available in models: EPC10, EPC13, EPC17, EPC19. Compact and efficient cores ideal for power supplies with limited space. <br />
            <strong><Link to="/products/ferritetransformer/pqseries" style={{ color: 'blue', textDecoration: 'underline' }}>PQ Series:</Link></strong> Available in models: PQ20, PQ26, PQ32, PQ35, PQ40. Designed to reduce winding resistance and core loss, perfect for high-efficiency designs. <br />
            <strong><Link to="/products/ferritetransformer/eerseries" style={{ color: 'blue', textDecoration: 'underline' }}>EER Series:</Link></strong> Available in models: EER25, EER28, EER35, EER39. Efficient and compact, often used in high-frequency SMPS circuits. <br />
            <strong><Link to="/products/ferritetransformer/potseries" style={{ color: 'blue', textDecoration: 'underline' }}>POT Series:</Link></strong> Available in models: POT30, POT40, POT50. Enclosed shape provides low EMI and is ideal for small signal and power transformers. <br />
            <strong><Link to="/products/ferritetransformer/ecseries" style={{ color: 'blue', textDecoration: 'underline' }}>EC Series:</Link></strong> Available in models: EC28, EC35, EC40, EC52. Designed with extended legs for better winding space, commonly used in high-frequency switching power supplies. <br /><br />

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

export default FerriteTransformerHeroSection;