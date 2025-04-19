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

// Import images for EFD series
import efd10 from '../../images/efdseriesimages/efd-10.jpg';
import efd12 from '../../images/efdseriesimages/efd-12.jpg';
import efd15 from '../../images/efdseriesimages/efd-15.jpg';
import efd20 from '../../images/efdseriesimages/efd-20.jpg';
import efd21 from '../../images/efdseriesimages/efd-21.jpg';
import efd25 from '../../images/efdseriesimages/efd-25.jpg';
import efd30 from '../../images/efdseriesimages/efd-30.jpg';
import efd31 from '../../images/efdseriesimages/efd-31.jpg';
import efd34 from '../../images/efdseriesimages/efd-34.jpg';
import efd40 from '../../images/efdseriesimages/efd-40.jpg';

const products = [
  { id: 1, title: 'EFD-10', img: efd10 },
  { id: 2, title: 'EFD-12', img: efd12 },
  { id: 3, title: 'EFD-15', img: efd15 },
  { id: 4, title: 'EFD-20', img: efd20 },
  { id: 5, title: 'EFD-21', img: efd21 },
  { id: 6, title: 'EFD-25', img: efd25 },
  { id: 7, title: 'EFD-30', img: efd30 },
  { id: 8, title: 'EFD-31', img: efd31 },
  { id: 9, title: 'EFD-34', img: efd34 },
  { id: 10, title: 'EFD-40', img: efd40 },
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