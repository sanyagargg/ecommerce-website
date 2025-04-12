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

import epc13 from '../../images/epcseriesimages/epc-13.jpg';
import epc14 from '../../images/epcseriesimages/epc-14.jpg';
import epc17 from '../../images/epcseriesimages/epc-17.jpg';
import epc19 from '../../images/epcseriesimages/epc-19.jpg';
import epc25 from '../../images/epcseriesimages/epc-25.jpg';
import epc27 from '../../images/epcseriesimages/epc-27.jpg';
import epc30 from '../../images/epcseriesimages/epc-30.jpg';
import epc39 from '../../images/epcseriesimages/epc-39.jpg';

import epc13PDF from '../../pdfs/epcseriespdfs/epc-13.pdf';
import epc14PDF from '../../pdfs/epcseriespdfs/epc-14.pdf';
import epc17PDF from '../../pdfs/epcseriespdfs/epc-17.pdf';
import epc19PDF from '../../pdfs/epcseriespdfs/epc-19.pdf';
import epc25PDF from '../../pdfs/epcseriespdfs/epc-25.pdf';
import epc27PDF from '../../pdfs/epcseriespdfs/epc-27.pdf';
import epc30PDF from '../../pdfs/epcseriespdfs/epc-30.pdf';
import epc39PDF from '../../pdfs/epcseriespdfs/epc-39.pdf';

const products = [
  { id: 1, title: 'EPC-13', img: epc13, pdf: epc13PDF },
  { id: 2, title: 'EPC-14', img: epc14, pdf: epc14PDF },
  { id: 3, title: 'EPC-17', img: epc17, pdf: epc17PDF },
  { id: 4, title: 'EPC-19', img: epc19, pdf: epc19PDF },
  { id: 5, title: 'EPC-25', img: epc25, pdf: epc25PDF },
  { id: 6, title: 'EPC-27', img: epc27, pdf: epc27PDF },
  { id: 7, title: 'EPC-30', img: epc30, pdf: epc30PDF },
  { id: 8, title: 'EPC-39', img: epc39, pdf: epc39PDF },
];

const EPCseriesProductGrid = () => {
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

export default EPCseriesProductGrid;
