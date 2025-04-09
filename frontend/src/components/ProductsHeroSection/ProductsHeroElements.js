import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: 0;
    }
`;


export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 40px;
  border-radius: 12px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 150px;
`;


export const HeroH1 = styled.h1`
  color: #000;
  font-size: 32px;
  margin-top: 12px;
  text-align: left;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 12px;
  margin-bottom: 8px;
  color: #333;
  font-size: 15px;
  text-align: left;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroList = styled.ul`
  margin-top: 4px;
  margin-bottom: 12px;
  list-style-type: none;
  padding-left: 0;
`;

export const HeroListItem = styled.li`
  font-size: 18px;
  color: #333;
  margin-bottom: 6px;
`;

export const HeroSubHeading = styled.h3`
  color: #000;
  font-size: 24px;
  margin-bottom: 4px;
  margin-top: 12px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;