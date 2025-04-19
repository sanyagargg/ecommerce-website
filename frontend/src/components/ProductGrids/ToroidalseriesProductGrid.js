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

import T9 from '../../images/toroidalseriesimages/t9.jpg';
import T10 from '../../images/toroidalseriesimages/t10.jpg';
import T11 from '../../images/toroidalseriesimages/t11.jpg';
import T12 from '../../images/toroidalseriesimages/t12.jpg';
import T12_5 from '../../images/toroidalseriesimages/t12.5.jpg';
import T13 from '../../images/toroidalseriesimages/t13.jpg';
import T16 from '../../images/toroidalseriesimages/t16.jpg';
import T18 from '../../images/toroidalseriesimages/t18.jpg';
import T20 from '../../images/toroidalseriesimages/t20.jpg';
import T23 from '../../images/toroidalseriesimages/t23.jpg';
import T27 from '../../images/toroidalseriesimages/t27.jpg';
import T30 from '../../images/toroidalseriesimages/t30.jpg';
import T36 from '../../images/toroidalseriesimages/t36.jpg';

import T9PDF from '../../pdfs/toroidalseriespdfs/t9.pdf';
import T10PDF from '../../pdfs/toroidalseriespdfs/t10.pdf';
import T11PDF from '../../pdfs/toroidalseriespdfs/t11.pdf';
import T12PDF from '../../pdfs/toroidalseriespdfs/t12.pdf';
import T12_5PDF from '../../pdfs/toroidalseriespdfs/t12.5.pdf';
import T13PDF from '../../pdfs/toroidalseriespdfs/t13.pdf';
import T16PDF from '../../pdfs/toroidalseriespdfs/t16.pdf';
import T18PDF from '../../pdfs/toroidalseriespdfs/t18.pdf';
import T20PDF from '../../pdfs/toroidalseriespdfs/t20.pdf';
import T23PDF from '../../pdfs/toroidalseriespdfs/t23.pdf';
import T27PDF from '../../pdfs/toroidalseriespdfs/t27.pdf';
import T30PDF from '../../pdfs/toroidalseriespdfs/t30.pdf';
import T36PDF from '../../pdfs/toroidalseriespdfs/t36.pdf';

const products = [
  { id: 1, title: 'T9', img: T9, pdf: T9PDF },
  { id: 2, title: 'T10', img: T10, pdf: T10PDF },
  { id: 3, title: 'T11', img: T11, pdf: T11PDF },
  { id: 4, title: 'T12', img: T12, pdf: T12PDF },
  { id: 5, title: 'T12.5', img: T12_5, pdf: T12_5PDF },
  { id: 6, title: 'T13', img: T13, pdf: T13PDF },
  { id: 7, title: 'T16', img: T16, pdf: T16PDF },
  { id: 8, title: 'T18', img: T18, pdf: T18PDF },
  { id: 9, title: 'T20', img: T20, pdf: T20PDF },
  { id: 10, title: 'T23', img: T23, pdf: T23PDF },
  { id: 11, title: 'T27', img: T27, pdf: T27PDF },
  { id: 12, title: 'T30', img: T30, pdf: T30PDF },
  { id: 13, title: 'T36', img: T36, pdf: T36PDF },
];

const EEseriesProductGrid = () => {
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
                Bobbin Drawing
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
          <div className="ModalContent">
  <img className="ModalImage" src={selectedProduct.img} alt={selectedProduct.title} />
  <div className="ModalFormWrapper">
    <GetQuote productTitle={selectedProduct.title} />
  </div>
  <button className="CloseButton" onClick={handleCloseModal}>×</button>
</div>


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

export default EEseriesProductGrid;
