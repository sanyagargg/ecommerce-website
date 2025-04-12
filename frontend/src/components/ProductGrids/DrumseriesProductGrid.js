import React, { useState } from 'react';
import {
  GridContainer,
  GridItem,
  GridImage,
  Overlay,
  QuoteButton,
  DrawingButton,
  GridTitle,
  ButtonsWrapper,
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalImage,
  CloseButton,
  PDFModalWrapper,
  PDFModalContent,
  PDFIframe,
} from './ProductGridElements';

import GetQuote from './GetQuote';  // Import GetQuote component

import drum6x8 from '../../images/drumseriesimages/drum6x8.jpg';
import drum8x10 from '../../images/drumseriesimages/drum8x10.jpg';
import drum10x12 from '../../images/drumseriesimages/drum10x12.jpg';
import drum12x15 from '../../images/drumseriesimages/drum12x15.jpg';
import drum15x22 from '../../images/drumseriesimages/drum15x22.jpg';

import drum6x8PDF from '../../pdfs/drumseriespdfs/drum6x8.pdf';
import drum8x10PDF from '../../pdfs/drumseriespdfs/drum8x10.pdf';
import drum10x12PDF from '../../pdfs/drumseriespdfs/drum10x12.pdf';
import drum12x15PDF from '../../pdfs/drumseriespdfs/drum12x15.pdf';
import drum15x22PDF from '../../pdfs/drumseriespdfs/drum15x22.pdf';

const products = [
  { id: 1, title: 'Drum 6X8', img: drum6x8, pdf: drum6x8PDF },
  { id: 2, title: 'Drum 8X10', img: drum8x10, pdf: drum8x10PDF },
  { id: 3, title: 'Drum 10X12', img: drum10x12, pdf: drum10x12PDF },
  { id: 4, title: 'Drum 12X15', img: drum12x15, pdf: drum12x15PDF },
  { id: 5, title: 'Drum 15X22', img: drum15x22, pdf: drum15x22PDF },
];

const DrumseriesProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleDrawingClick = (product) => {
    setPdfSrc(product.pdf);
    setShowPDF(true);
  };

  const handleClosePDFModal = () => {
    setShowPDF(false);
  };

  return (
    <>
      <GridContainer>
        {products.map((product) => (
          <GridItem key={product.id}>
            <GridImage src={product.img} alt={product.title} />
            <Overlay>
              <ButtonsWrapper>
                <QuoteButton onClick={() => handleQuoteClick(product)}>
                  Get a Quote
                </QuoteButton>
                <DrawingButton onClick={() => handleDrawingClick(product)}>
                  Product Drawing
                </DrawingButton>
              </ButtonsWrapper>
            </Overlay>
            <GridTitle>{product.title}</GridTitle>
          </GridItem>
        ))}
      </GridContainer>

      {selectedProduct && (
        <ModalOverlay>
          <ModalWrapper>
            <ModalContent>
              <ModalImage src={selectedProduct.img} alt={selectedProduct.title} />
              <GetQuote productTitle={selectedProduct.title} /> {/* Use GetQuote here */}
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      )}

      {showPDF && (
        <ModalOverlay>
          <PDFModalWrapper>
            <PDFModalContent>
              <PDFIframe src={pdfSrc} />
            </PDFModalContent>
            <CloseButton onClick={handleClosePDFModal}>×</CloseButton>
          </PDFModalWrapper>
        </ModalOverlay>
      )}
    </>
  );
};

export default DrumseriesProductGrid;
