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

import uu98 from '../../images/uuseriesimages/uu9.8.jpg';
import uu105 from '../../images/uuseriesimages/uu10.5.jpg';
import uu15 from '../../images/uuseriesimages/uu15.jpg';
import uu16 from '../../images/uuseriesimages/uu16.jpg';
import uu21 from '../../images/uuseriesimages/uu21.jpg';
import ut20 from '../../images/uuseriesimages/ut20.jpg';
import et24 from '../../images/uuseriesimages/et24.jpg';

import uu98PDF from '../../pdfs/uuseriespdfs/uu9.8.pdf';
import uu105PDF from '../../pdfs/uuseriespdfs/uu10.5.pdf';
import uu15PDF from '../../pdfs/uuseriespdfs/uu15.pdf';
import uu16PDF from '../../pdfs/uuseriespdfs/uu16.pdf';
import uu21PDF from '../../pdfs/uuseriespdfs/uu21.pdf';
import ut20PDF from '../../pdfs/uuseriespdfs/ut20.pdf';
import et24PDF from '../../pdfs/uuseriespdfs/et24.pdf';

const products = [
  { id: 1, title: 'UU9.8', img: uu98, pdf: uu98PDF },
  { id: 2, title: 'UU10.5', img: uu105, pdf: uu105PDF },
  { id: 3, title: 'UU15', img: uu15, pdf: uu15PDF },
  { id: 4, title: 'UU16', img: uu16, pdf: uu16PDF },
  { id: 5, title: 'UU21', img: uu21, pdf: uu21PDF },
  { id: 6, title: 'UT20', img: ut20, pdf: ut20PDF },
  { id: 7, title: 'ET24', img: et24, pdf: et24PDF },
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
