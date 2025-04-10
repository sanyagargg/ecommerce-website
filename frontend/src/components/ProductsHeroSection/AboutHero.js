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

const AboutHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoWrapper>
        <HeroContent>
          <HeroH1>Our Product Range</HeroH1>
          <HeroP>
            We specialize in designing and manufacturing premium electronic components that meet the highest industry standards. Our offerings include SPMS transformers, line filters, drum coils, toroidal coils, and bit-rod coils—each built for exceptional performance, reliability, and efficiency.
            <br /><br />
            <strong>
              <Link to="/products/ferritetransformer" style={{ color: 'blue', textDecoration: 'underline' }}>
                Ferrite Transformers:
              </Link>
            </strong> Available in EE, EFD, RM, ETD, EPC, PQ, EER, and POT series, these transformers are optimized for high efficiency and a wide range of applications.
            <br />
            <strong>
              <Link to="/products/linefilter" style={{ color: 'blue', textDecoration: 'underline' }}>
                Line Filters / Common Mode Chokes:
              </Link>
            </strong> Offered in UU9.8, UU10.5, UU16, UU21, UU20, ET24, and UT20 variants, they ensure effective EMI suppression and clean power delivery.
            <br />
            <strong>
              <Link to="/products/drumcoil" style={{ color: 'blue', textDecoration: 'underline' }}>
                Drum Coils:
              </Link>
            </strong> Manufactured in sizes like 6x8, 10x12, 10x15, 12x15, and 15x22, they are suitable for diverse industrial and commercial needs.
            <br />
            <strong>
              <Link to="/products/toroidalcoil" style={{ color: 'blue', textDecoration: 'underline' }}>
                Toroidal Coils:
              </Link>
            </strong> Ranging from models T9 to T36, with sizes including 3x10, 4x14, 5x15, 6x20, 8x20, 10x30, and 10x35, these coils offer compact, efficient, and low-loss solutions.
            <br />
            <strong>
              <Link to="/products/bitrodcoil" style={{ color: 'blue', textDecoration: 'underline' }}>
                Bit-Rod Coils:
              </Link>
            </strong> Available in sizes 3x10, 4x14, 5x15, 6x20, 8x20, 10x30, and 10x35, these components are designed for robust performance in demanding environments.
            <br /><br />
            <strong>Need something specific?</strong> We offer customized products designed to meet your exact requirements. Contact us today to discuss your unique needs and let us help you find the perfect solution.
            <br /><br />
          </HeroP>
        </HeroContent>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default AboutHeroSection;
