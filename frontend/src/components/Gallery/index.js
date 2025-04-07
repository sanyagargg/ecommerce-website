import React from 'react';
import Img1 from '../../images/gallery1.jpeg';
import Img2 from '../../images/gallery2.webp';
import Img3 from '../../images/gallery3.jpg';
import Img4 from '../../images/gallery4.jpg';
import Img5 from '../../images/gallery5.jpg';
import Img6 from '../../images/gallery6.jpeg';

import {
  GalleryContainer,
  GalleryH1,
  GalleryWrapper,
  GalleryCard,
  GalleryIcon
} from './GalleryElements';

const Gallery = () => {
  return (
    <GalleryContainer id='gallery'>
      <GalleryH1>Gallery</GalleryH1>
      <GalleryWrapper>
        <GalleryCard>
          <GalleryIcon src={Img1} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Img2} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Img3} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Img4} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Img5} />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Img6} />
        </GalleryCard>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
