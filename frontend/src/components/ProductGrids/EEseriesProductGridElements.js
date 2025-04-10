import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 60px;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  position: relative;
  width: 220px;
  text-align: center;
`;

export const GridImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;

  ${GridItem}:hover & {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(154, 154, 154, 0.78);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: opacity 0.3s ease;

  ${GridItem}:hover & {
    opacity: 1;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const QuoteButton = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'sans-serif';

  &:hover {
    background-color: #001f4d;
  }
`;

export const DrawingButton = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'sans-serif';

  &:hover {
    background-color: #001f4d;
  }
`;


export const GridTitle = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
`;