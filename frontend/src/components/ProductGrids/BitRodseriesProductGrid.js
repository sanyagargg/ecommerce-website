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

import GetQuote from './GetQuote';  // Import the new form component

import B3X10 from '../../images/bitrodseriesimages/3X10.jpg';
import B3X13 from '../../images/bitrodseriesimages/3X13.jpg';
import B4X14 from '../../images/bitrodseriesimages/4X14.jpg';
import B5X15 from '../../images/bitrodseriesimages/5X15.jpg';
import B6X20 from '../../images/bitrodseriesimages/6X20.jpg';
import B8X20 from '../../images/bitrodseriesimages/8X20.jpg';
import B8X25 from '../../images/bitrodseriesimages/8X25.jpg';
import B10X30 from '../../images/bitrodseriesimages/10X30.jpg';
import B10X35 from '../../images/bitrodseriesimages/10X35.jpg';

import B3X10PDF from '../../pdfs/bitrodseriespdfs/3X10.pdf';
import B3X13PDF from '../../pdfs/bitrodseriespdfs/3X13.pdf';
import B4X14PDF from '../../pdfs/bitrodseriespdfs/4X14.pdf';
import B5X15PDF from '../../pdfs/bitrodseriespdfs/5X15.pdf';
import B6X20PDF from '../../pdfs/bitrodseriespdfs/6X20.pdf';
import B8X20PDF from '../../pdfs/bitrodseriespdfs/8X20.pdf';
import B8X25PDF from '../../pdfs/bitrodseriespdfs/8X25.pdf';
import B10X30PDF from '../../pdfs/bitrodseriespdfs/10X30.pdf';
import B10X35PDF from '../../pdfs/bitrodseriespdfs/10X35.pdf';

const products = [
  { id: 1, title: '3X10', img: B3X10, pdf: B3X10PDF },
  { id: 2, title: '3X13', img: B3X13, pdf: B3X13PDF },
  { id: 3, title: '4X14', img: B4X14, pdf: B4X14PDF },
  { id: 4, title: '5X15', img: B5X15, pdf: B5X15PDF },
  { id: 5, title: '6X20', img: B6X20, pdf: B6X20PDF },
  { id: 6, title: '8X20', img: B8X20, pdf: B8X20PDF },
  { id: 7, title: '8X25', img: B8X25, pdf: B8X25PDF },
  { id: 8, title: '10X30', img: B10X30, pdf: B10X30PDF },
  { id: 9, title: '10X35', img: B10X35, pdf: B10X35PDF },
];

const BitRodseriesProductGrid = () => {
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
              <GetQuote productTitle={selectedProduct.title} /> {/* Use the new form component */}
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

export default BitRodseriesProductGrid;
