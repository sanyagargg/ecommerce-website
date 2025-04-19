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

import pot2311 from '../../images/potseriesimages/pot2311.jpg';
import pot2511 from '../../images/potseriesimages/pot2511.jpg';
import pot3019 from '../../images/potseriesimages/pot3019.jpg';
import pot3119 from '../../images/potseriesimages/pot3119.jpg';
import pot3314 from '../../images/potseriesimages/pot3314.jpg';
import pot3319 from '../../images/potseriesimages/pot3319.jpg';
import pot3324 from '../../images/potseriesimages/pot3324.jpg';
import pot4025 from '../../images/potseriesimages/pot4025.jpg';
import pot4027 from '../../images/potseriesimages/pot4027.jpg';
import pot4028 from '../../images/potseriesimages/pot4028.jpg';

import pot2311PDF from '../../pdfs/potseriespdfs/pot2311.pdf';
import pot2511PDF from '../../pdfs/potseriespdfs/pot2511.pdf';
import pot3019PDF from '../../pdfs/potseriespdfs/pot3019.pdf';
import pot3119PDF from '../../pdfs/potseriespdfs/pot3119.pdf';
import pot3314PDF from '../../pdfs/potseriespdfs/pot3314.pdf';
import pot3319PDF from '../../pdfs/potseriespdfs/pot3319.pdf';
import pot3324PDF from '../../pdfs/potseriespdfs/pot3324.pdf';
import pot4025PDF from '../../pdfs/potseriespdfs/pot4025.pdf';
import pot4027PDF from '../../pdfs/potseriespdfs/pot4027.pdf';
import pot4028PDF from '../../pdfs/potseriespdfs/pot4028.pdf';

import GetQuote from './GetQuote';  // Importing GetQuote component

const products = [
  { id: 1, title: 'POT23/11', img: pot2311, pdf: pot2311PDF },
  { id: 2, title: 'POT25/11', img: pot2511, pdf: pot2511PDF },
  { id: 3, title: 'POT30/19', img: pot3019, pdf: pot3019PDF },
  { id: 4, title: 'POT31/19', img: pot3119, pdf: pot3119PDF },
  { id: 5, title: 'POT33/14', img: pot3314, pdf: pot3314PDF },
  { id: 6, title: 'POT33/19', img: pot3319, pdf: pot3319PDF },
  { id: 7, title: 'POT33/24', img: pot3324, pdf: pot3324PDF },
  { id: 8, title: 'POT40/25', img: pot4025, pdf: pot4025PDF },
  { id: 9, title: 'POT40/27', img: pot4027, pdf: pot4027PDF },
  { id: 10, title: 'POT40/28', img: pot4028, pdf: pot4028PDF },
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
