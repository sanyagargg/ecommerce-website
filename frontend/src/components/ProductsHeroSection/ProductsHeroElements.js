import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

// Container for the Hero Section
export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    width: 100%;
    padding: 0 30px;
`;

// Content container for the Hero Section (left side)
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 50%; /* Make the content area take 50% of the width */
    padding-right: 0px; /* Padding for the right side */
`;

// Hero Heading
export const HeroH1 = styled.h1`
    color: #000;
    font-size: 38px;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 38px;
    }
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

// Hero Paragraph
export const HeroP = styled.p`
    margin-top: 24px;
    color: #000;
    font-size: 22px;
    text-align: left;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

// Button wrapper
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

// Grid layout for buttons (3x5 grid)
export const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
    align-items: center; /* Ensure buttons are vertically aligned */
`;

// Each individual button item
export const ButtonItem = styled.div`
    display: flex;
    justify-content: center; /* Centers the button */
    align-items: center;
    width: 200px; /* Fixed width for uniformity */
    height: 50px; /* Fixed height to keep all buttons consistent */
`;

