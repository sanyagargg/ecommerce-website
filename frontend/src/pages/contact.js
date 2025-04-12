import React from 'react'

import {
    ContactObjOne
  } from '../components/InfoSection/ContactData';

import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import ContactInfoSection from '../components/InfoSection/ContactInfoSection';
import ContactNavbar from '../components/ContactNavbar';

function Contact() {
  return (
    <>
    <ScrollToTop />
    <ContactNavbar />
    <ContactInfoSection {...ContactObjOne}/>
    <Footer />
    </>
  )
}

export default Contact