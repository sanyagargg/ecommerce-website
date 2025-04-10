import React from 'react';
import {
  GridContainer,
  GridItem,
  GridImage,
  Overlay,
  QuoteButton,
  DrawingButton,
  GridTitle,
  ButtonsWrapper
} from './EEseriesProductGridElements';

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

const products = [
  { id: 1, title: 'EE 10X5X5', img: ee10X5X5 },
  { id: 2, title: 'EE 13X6X6', img: ee13X6X6 },
  { id: 3, title: 'EE 13X7X4', img: ee13X7X4 },
  { id: 4, title: 'EE 16X6X5', img: ee16X6X5 },
  { id: 5, title: 'EE 16X8X5', img: ee16X8X5 },
  { id: 6, title: 'EE 19X8X5', img: ee19X8X5 },
  { id: 7, title: 'EE 20X10X6', img: ee20X10X6 },
  { id: 8, title: 'EE 25X9X6', img: ee25X9X6 },
  { id: 9, title: 'EE 25X13X17', img: ee25X13X17 },
  { id: 10, title: 'EE 28X10X10', img: ee28X10X10 },
  { id: 11, title: 'EE 30', img: ee30 },
  { id: 12, title: 'EE 32', img: ee32 },
  { id: 13, title: 'EE 33', img: ee33 },
  { id: 14, title: 'EE 40', img: ee40 },
  { id: 15, title: 'EE 42X15', img: ee42X15 },
  { id: 16, title: 'EE 42X20', img: ee42X20 },
  { id: 17, title: 'EE 44', img: ee44 },
  { id: 18, title: 'EE 55', img: ee55 },
  { id: 19, title: 'EE 65', img: ee65 },
];

const EEseriesProductsGridSection = () => {
  return (
    <GridContainer>
      {products.map(product => (
        <GridItem key={product.id}>
          <GridImage src={product.img} alt={product.title} />
          <Overlay>
            <ButtonsWrapper>
              <QuoteButton>Get a Quote</QuoteButton>
              <DrawingButton>Product Drawing</DrawingButton>
            </ButtonsWrapper>
          </Overlay>
          <GridTitle>{product.title}</GridTitle>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default EEseriesProductsGridSection;
