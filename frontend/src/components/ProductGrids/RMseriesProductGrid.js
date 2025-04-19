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
  ModalFormWrapper,
  ModalContent,
  ModalImage,
  CloseButton,
  PDFModalWrapper,
  PDFModalContent,
  PDFIframe,
} from './ProductGridElements';

import GetQuote from './GetQuote'; 

import rm4 from '../../images/rmseriesimages/rm-4.jpg';
import rm5 from '../../images/rmseriesimages/rm-5.jpg';
import rm6 from '../../images/rmseriesimages/rm-6.jpg';
import rm8 from '../../images/rmseriesimages/rm-8.jpg';
import rm10 from '../../images/rmseriesimages/rm-10.jpg';
import rm12 from '../../images/rmseriesimages/rm-12.jpg';


import rm4PDF from '../../pdfs/rmseriespdfs/rm-4.pdf';
import rm5PDF from '../../pdfs/rmseriespdfs/rm-5.pdf';
import rm6PDF from '../../pdfs/rmseriespdfs/rm-6.pdf';
import rm8PDF from '../../pdfs/rmseriespdfs/rm-8.pdf';
import rm10PDF from '../../pdfs/rmseriespdfs/rm-10.pdf';
import rm12PDF from '../../pdfs/rmseriespdfs/rm-12.pdf';


const products = [
    { id: 1, title: 'RM-4', img: rm4, pdf: rm4PDF },
    { id: 2, title: 'RM-5', img: rm5, pdf: rm5PDF },
    { id: 3, title: 'RM-6', img: rm6, pdf: rm6PDF },
    { id: 4, title: 'RM-8', img: rm8, pdf: rm8PDF },
    { id: 5, title: 'RM-10', img: rm10, pdf: rm10PDF },
    { id: 6, title: 'RM-12', img: rm12, pdf: rm12PDF },
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
  