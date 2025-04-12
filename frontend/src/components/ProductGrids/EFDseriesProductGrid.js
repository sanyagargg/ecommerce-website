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
} from './ProductGridElements'; 

// Import images for EFD series
import efd10 from '../../images/efdseriesimages/efd10.jpg';
import efd12 from '../../images/efdseriesimages/efd12.jpg';
import efd15 from '../../images/efdseriesimages/efd15.jpg';
import efd20 from '../../images/efdseriesimages/efd20.jpg';
import efd21 from '../../images/efdseriesimages/efd21.jpg';
import efd25 from '../../images/efdseriesimages/efd25.jpg';
import efd30 from '../../images/efdseriesimages/efd30.jpg';
import efd31 from '../../images/efdseriesimages/efd31.jpg';
import efd34 from '../../images/efdseriesimages/efd34.jpg';
import efd40 from '../../images/efdseriesimages/efd40.jpg';

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

const EFDseriesProductsGridSection = () => {
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

export default EFDseriesProductsGridSection;
