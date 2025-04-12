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

import etd29 from '../../images/etdseriesimages/etd-29.jpg';
import etd34 from '../../images/etdseriesimages/etd-34.jpg';
import etd35 from '../../images/etdseriesimages/etd-35.jpg';
import etd39 from '../../images/etdseriesimages/etd-39.jpg';
import etd40 from '../../images/etdseriesimages/etd-40.jpg';
import etd44 from '../../images/etdseriesimages/etd-44.jpg';


import etd29PDF from '../../pdfs/etdseriespdfs/etd-29.pdf';
import etd34PDF from '../../pdfs/etdseriespdfs/etd-34.pdf';
import etd35PDF from '../../pdfs/etdseriespdfs/etd-35.pdf';
import etd39PDF from '../../pdfs/etdseriespdfs/etd-39.pdf';
import etd40PDF from '../../pdfs/etdseriespdfs/etd-40.pdf';
import etd44PDF from '../../pdfs/etdseriespdfs/etd-44.pdf';



const products = [
    { id: 1, title: 'ETD-29', img: etd29, pdf: etd29PDF },
  { id: 2, title: 'ETD-34', img: etd34, pdf: etd34PDF },
  { id: 3, title: 'ETD-35', img: etd35, pdf: etd35PDF },
  { id: 4, title: 'ETD-39', img: etd39, pdf: etd39PDF },
  { id: 5, title: 'ETD-40', img: etd40, pdf: etd40PDF },
  { id: 6, title: 'ETD-44', img: etd44, pdf: etd44PDF },
  ];

const ETDseriesProductGrid = () => {
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

export default ETDseriesProductGrid;
