import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  height: 800px;
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
    padding-top: 80px;
    padding-bottom: 100px;
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
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  height: 800px;
 
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const HeroH1 = styled.h1`
  font-size: 32px;
  color: #000;
  margin-bottom: 16px;
`;

export const HeroP = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Optional: Keep any other previously declared styles if reused elsewhere
