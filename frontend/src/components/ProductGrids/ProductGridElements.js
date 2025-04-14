import styled from 'styled-components';

// Grid Layout
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  // Default: 4 items per row (desktop)
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  // For mobile (up to 768px), 2 items per row
  }
`;

export const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

export const GridImage = styled.img`
  width: 100%;
  height: auto;
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
  background: rgba(0, 0, 50, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${GridItem}:hover & {
    opacity: 1;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const QuoteButton = styled.button`
  font-family: sans-serif;
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #00244d;
  }
`;

export const DrawingButton = styled.button`
  font-family: sans-serif;
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #00244d;
  }
`;

export const GridTitle = styled.h3`
  font-family: sans-serif;
  text-align: center;
  margin-top: 10px;
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  height: 80%;
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ModalImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const ModalForm = styled.form`
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100%;
  gap: 0.2px;

  h2 {
    margin-bottom: 20px;
  }

  input,
  textarea {
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: sans-serif;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 12px;
    background-color: #003366;
    color: white;
    border: none;
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

// PDF Modal (for product drawing)
export const PDFModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  height: 80%;
  display: flex;
  position: relative;
`;

export const PDFModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const PDFIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;