import styled from 'styled-components';

export const CareersHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem; /* Equal padding on top and bottom */
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1rem; /* Still equal top/bottom for mobile */
  }
`;


export const ImageWrapper = styled.div`
  flex: 1.4; /* Slightly more space */
  max-width: 650px; /* Increased from 550px */
`;

export const CareersImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;