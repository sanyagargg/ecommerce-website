import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  height: 850px;
  background: rgb(253, 253, 253);
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    margin-top: -70px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 120px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 70px;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Stack video and text */
    padding: 40px 20px;
  }

  position: relative;
  z-index: 2;
`;

export const VideoWrapper = styled.div`
  flex: 1;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: 300px; /* Adjust height for mobile */
    margin-bottom: 20px; /* Space between video and text */
    overflow: hidden; /* Hide overflow */
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 650px;
  object-fit: cover;
  border-radius: 10px; /* Add rounded corners to video */
  
  /* Mobile View - Video as Background */
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 300px; /* Make the video square */
    margin: 0 auto; /* Center the video */
    z-index: 1; /* Keep it above the background */
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding-top: 20px; /* Space between video and text */
  }
`;

export const HeroH1 = styled.h1`
  font-size: 32px;
  color: #000;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;