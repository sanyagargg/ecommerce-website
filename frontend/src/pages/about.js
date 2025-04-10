import React, { useState } from 'react'
import AboutNavbar from '../components/AboutNavbar';
import AboutInfoSection from '../components/InfoSection/AboutInfoSection';

import Sidebar from '../components/Sidebar'
import {
  aboutObj1,
  aboutObj2,
  aboutObj3,
  aboutObj4,
  aboutObj5,
  aboutObj6,
  aboutObj7,
  aboutObj8,
  aboutObj9,
  aboutObj10
} from '../components/InfoSection/AboutData';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <AboutNavbar />
      <ScrollToTop />
      <AboutInfoSection {...aboutObj1}/>
      <AboutInfoSection {...aboutObj2}/>
      <AboutInfoSection {...aboutObj3}/>  
      <AboutInfoSection {...aboutObj4}/>
      <AboutInfoSection {...aboutObj5}/>
      <AboutInfoSection {...aboutObj6}/>
      <AboutInfoSection {...aboutObj7}/>
      <Footer />
    </>
  );
};

export default About;
