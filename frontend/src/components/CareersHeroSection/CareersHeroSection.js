import React from "react";
import {
  CareersHeroContainer,
  ImageWrapper,
  CareersImage,
  ContentWrapper,
  Title,
  Description,
} from "./CareersHeroElements";

import careersImg from "../../images/careers-hero.jpg";

const CareersHeroSection = () => {
  return (
    <CareersHeroContainer>
      <ImageWrapper>
        <CareersImage src={careersImg} alt="Careers" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>Join Our Team</Title>
        <Description>
          At our company, we’re not just offering jobs — we’re building careers.
          We believe in creating a workplace where innovation, passion, and
          personal growth are at the heart of everything we do.<br></br>
          Whether you’re a seasoned expert or just starting out, you’ll find
          opportunities to learn, grow, and truly make a difference. We value
          curiosity, collaboration, and a drive to make things better.<br></br>
          Join a team that listens to your ideas, supports your ambitions, and
          empowers you to shape a better future. <br></br>
          Explore our open roles and become part of something meaningful.
          <br></br>
          <br></br>
          Email us at : charismaticelectronics@gmail.com
        </Description>
      </ContentWrapper>
    </CareersHeroContainer>
  );
};

export default CareersHeroSection;
