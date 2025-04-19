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

import pq2012 from '../../images/pqseriesimages/pq2012.jpg';
import pq2016 from '../../images/pqseriesimages/pq2016.jpg';
import pq2620 from '../../images/pqseriesimages/pq2620.jpg';
import pq2625 from '../../images/pqseriesimages/pq2625.jpg';
import pq3220 from '../../images/pqseriesimages/pq3220.jpg';
import pq3230 from '../../images/pqseriesimages/pq3230.jpg';

import pq2012PDF from '../../pdfs/pqseriespdfs/pq2012.pdf';
import pq2016PDF from '../../pdfs/pqseriespdfs/pq2016.pdf';
import pq2620PDF from '../../pdfs/pqseriespdfs/pq2620.pdf';
import pq2625PDF from '../../pdfs/pqseriespdfs/pq2625.pdf';
import pq3220PDF from '../../pdfs/pqseriespdfs/pq3220.pdf';
import pq3230PDF from '../../pdfs/pqseriespdfs/pq3230.pdf';

import GetQuote from './GetQuote';  // Import GetQuote component

const products = [
  { id: 1, title: 'PQ2012', img: pq2012, pdf: pq2012PDF },
  { id: 2, title: 'PQ2016', img: pq2016, pdf: pq2016PDF },
  { id: 3, title: 'PQ2620', img: pq2620, pdf: pq2620PDF },
  { id: 4, title: 'PQ2625', img: pq2625, pdf: pq2625PDF },
  { id: 5, title: 'PQ3220', img: pq3220, pdf: pq3220PDF },
  { id: 6, title: 'PQ3230', img: pq3230, pdf: pq3230PDF },
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
