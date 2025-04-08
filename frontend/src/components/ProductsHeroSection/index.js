import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from './ProductsHeroElements';
import Video from '../../videos/productsvid.mp4';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Our Product Range</HeroH1>
        <HeroP>
          We specialize in designing and manufacturing premium electronic components that meet the highest industry standards. Our offerings include SPMS transformers, line filters, drum coils, toroidal coils, and bit-rod coils—each built for exceptional performance, reliability, and efficiency.
          <br /><br />
          <strong>Ferrite Transformers:</strong> Available in EE, EFD, RM, ETD, EPC, PQ, EER, and POT series, these transformers are optimized for high efficiency and a wide range of applications.
          <br />
          <strong>Line Filters / Common Mode Chokes:</strong> Offered in UU9.8, UU10.5, UU16, UU21, UU20, ET24, and UT20 variants, they ensure effective EMI suppression and clean power delivery.
          <br />
          <strong>Drum Coils:</strong> Manufactured in sizes like 6x8, 10x12, 10x15, 12x15, and 15x22, they are suitable for diverse industrial and commercial needs.
          <br />
          <strong>Toroidal Coils:</strong> Ranging from models T9 to T36, with sizes including 3x10, 4x14, 5x15, 6x20, 8x20, 10x30, and 10x35, these coils offer compact, efficient, and low-loss solutions.
          <br />
          <strong>Bit-Rod Coils:</strong> Available in sizes 3x10, 4x14, 5x15, 6x20, 8x20, 10x30, and 10x35, these components are designed for robust performance in demanding environments.
          <br /><br />
          <strong>Need something specific? </strong> We offer customized products designed to meet your exact requirements. Contact us today to discuss your unique needs and let us help you find the perfect solution.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;