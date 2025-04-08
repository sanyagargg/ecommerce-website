import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0,0,0,0.1) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
        z-index: 2;
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
  z-index: 2;
  padding: 40px 0 40px 20px;  /* Removed right padding to shift left */
  max-width: 60%; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0;  /* No centering, aligned to left */
  background: none;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 20px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 12px;
  margin-bottom: 16px;
  color: #ddd;
  font-size: 20px;
  line-height: 1.6;
  text-align: left;
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
  color: #ddd;
  margin-bottom: 6px;
`;

export const HeroSubHeading = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 16px;
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
