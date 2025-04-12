import React from 'react';
import Navbar from '../components/ProductsNavbar';
import HeroSection from '../components/ProductsHeroSection';
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';

const Product = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Product;
