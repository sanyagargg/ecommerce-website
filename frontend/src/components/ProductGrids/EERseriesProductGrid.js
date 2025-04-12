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

import GetQuote from './GetQuote';  // Import the GetQuote component

import EER20 from '../../images/eerseriesimages/eer20.jpg';
import EER25 from '../../images/eerseriesimages/eer25.jpg';
import EER28 from '../../images/eerseriesimages/eer28.jpg';
import EER35 from '../../images/eerseriesimages/eer35.jpg';
import EER39 from '../../images/eerseriesimages/eer39.jpg';


import EER20PDF from '../../pdfs/eerseriespdfs/eer20.pdf';
import EER25PDF from '../../pdfs/eerseriespdfs/eer25.pdf';
import EER28PDF from '../../pdfs/eerseriespdfs/eer28.pdf';
import EER35PDF from '../../pdfs/eerseriespdfs/eer35.pdf';
import EER39PDF from '../../pdfs/eerseriespdfs/eer39.pdf';


const products = [
  { id: 1, title: 'EER20', img: EER20, pdf: EER20PDF },
  { id: 2, title: 'EER25', img: EER25, pdf: EER25PDF },
  { id: 3, title: 'EER28', img: EER28, pdf: EER28PDF },
  { id: 4, title: 'EER35', img: EER35, pdf: EER35PDF },
  { id: 5, title: 'EER39', img: EER39, pdf: EER39PDF },
];

const EERseriesProductGrid = () => {
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
              <GetQuote productTitle={selectedProduct.title} /> {/* Use the GetQuote component */}
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

export default EERseriesProductGrid;
