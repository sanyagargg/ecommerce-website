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

// Import images
import ee10X5X5 from '../../images/eeseriesimages/ee10X5X5.jpg';
import ee13X6X6 from '../../images/eeseriesimages/ee13X6X6.jpg';
import ee13X7X4 from '../../images/eeseriesimages/ee13X7X4.jpg';
import ee16X6X5 from '../../images/eeseriesimages/ee16X6X5.jpg';
import ee16X8X5 from '../../images/eeseriesimages/ee16X8X5.jpg';
import ee19X8X5 from '../../images/eeseriesimages/ee19X8X5.jpg';
import ee20X10X6 from '../../images/eeseriesimages/ee20X10X6.jpg';
import ee25X9X6 from '../../images/eeseriesimages/ee25X9X6.jpg';
import ee25X13X17 from '../../images/eeseriesimages/ee25X13X17.jpg';
import ee28X10X10 from '../../images/eeseriesimages/ee28X10X10.jpg';
import ee30 from '../../images/eeseriesimages/ee30.jpg';
import ee32 from '../../images/eeseriesimages/ee32.jpg';
import ee33 from '../../images/eeseriesimages/ee33.png';
import ee40 from '../../images/eeseriesimages/ee40.png';
import ee42X15 from '../../images/eeseriesimages/ee42X15.jpg';
import ee42X20 from '../../images/eeseriesimages/ee42X20.jpg';
import ee44 from '../../images/eeseriesimages/ee44.png';
import ee55 from '../../images/eeseriesimages/ee55.jpg';
import ee65 from '../../images/eeseriesimages/ee65.jpg';

// Import PDF files
import ee10X5X5PDF from '../../pdfs/eeseriespdf/ee10X5X5.pdf';
import ee13X6X6PDF from '../../pdfs/eeseriespdf/ee13X6X6.pdf';
import ee13X7X4PDF from '../../pdfs/eeseriespdf/ee13X7X4.pdf';
import ee16X6X5PDF from '../../pdfs/eeseriespdf/ee16X6X5.pdf';
import ee16X8X5PDF from '../../pdfs/eeseriespdf/ee16X8X5.pdf';
import ee19X8X5PDF from '../../pdfs/eeseriespdf/ee19X8X5.pdf';
import ee20X10X6PDF from '../../pdfs/eeseriespdf/ee20X10X6.pdf';
import ee25X9X6PDF from '../../pdfs/eeseriespdf/ee25X9X6.pdf';
import ee25X13X17PDF from '../../pdfs/eeseriespdf/ee25X13X17.pdf';
import ee28X10X10PDF from '../../pdfs/eeseriespdf/ee28X10X10.pdf';
import ee30PDF from '../../pdfs/eeseriespdf/ee30.pdf';
import ee32PDF from '../../pdfs/eeseriespdf/ee32.pdf';
import ee33PDF from '../../pdfs/eeseriespdf/ee33.pdf';
import ee40PDF from '../../pdfs/eeseriespdf/ee40.pdf';
import ee42X15PDF from '../../pdfs/eeseriespdf/ee42X15.pdf';
import ee42X20PDF from '../../pdfs/eeseriespdf/ee42X20.pdf';
import ee44PDF from '../../pdfs/eeseriespdf/ee44.pdf';
import ee55PDF from '../../pdfs/eeseriespdf/ee55.pdf';
import ee65PDF from '../../pdfs/eeseriespdf/ee65.pdf';

const products = [
  { id: 1, title: 'EE 10X5X5', img: ee10X5X5, pdf: ee10X5X5PDF },
  { id: 2, title: 'EE 13X6X6', img: ee13X6X6, pdf: ee13X6X6PDF },
  { id: 3, title: 'EE 13X7X4', img: ee13X7X4, pdf: ee13X7X4PDF },
  { id: 4, title: 'EE 16X6X5', img: ee16X6X5, pdf: ee16X6X5PDF },
  { id: 5, title: 'EE 16X8X5', img: ee16X8X5, pdf: ee16X8X5PDF },
  { id: 6, title: 'EE 19X8X5', img: ee19X8X5, pdf: ee19X8X5PDF },
  { id: 7, title: 'EE 20X10X6', img: ee20X10X6, pdf: ee20X10X6PDF },
  { id: 8, title: 'EE 25X9X6', img: ee25X9X6, pdf: ee25X9X6PDF },
  { id: 9, title: 'EE 25X13X17', img: ee25X13X17, pdf: ee25X13X17PDF },
  { id: 10, title: 'EE 28X10X10', img: ee28X10X10, pdf: ee28X10X10PDF },
  { id: 11, title: 'EE 30', img: ee30, pdf: ee30PDF },
  { id: 12, title: 'EE 32', img: ee32, pdf: ee32PDF },
  { id: 13, title: 'EE 33', img: ee33, pdf: ee33PDF },
  { id: 14, title: 'EE 40', img: ee40, pdf: ee40PDF },
  { id: 15, title: 'EE 42X15', img: ee42X15, pdf: ee42X15PDF },
  { id: 16, title: 'EE 42X20', img: ee42X20, pdf: ee42X20PDF },
  { id: 17, title: 'EE 44', img: ee44, pdf: ee44PDF },
  { id: 18, title: 'EE 55', img: ee55, pdf: ee55PDF },
  { id: 19, title: 'EE 65', img: ee65, pdf: ee65PDF },
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

export default EEseriesProductGrid;
