import aboutImage from '../../images/aboutus.png';
import productimage from '../../images/products.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'At Charismatic Electronics',
    description: 'We aspire to be the trusted partner for businesses worldwide, providing advanced solutions such as SMPS Transformers, Toroidal Coils, Drum Coil Inductors, Power Inductors, and Return Line Filters. Through our commitment to innovation, sustainability, and unmatched craftsmanship, we aim to drive progress across industries, from renewable energy to advanced manufacturing and beyond.',
    buttonLabel: 'Know More',
    buttonLink: '/about', //  This is the route it will go to /about
    imgStart: false,
    img: aboutImage,
    alt: 'Aboutus',
    dark: true,
    primary: true,
    darkText: false
};

 export const homeObjTwo = {
    id: 'products',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Products',
    headline: 'Our Products',
    description: 'Driven by a pursuit of excellence, our product range reflects the perfect synergy of innovation, quality, and precision. From design to delivery, we uphold the highest standards in material selection, manufacturing, and testing. Our components are trusted by professionals across industries for their consistency, durability, and seamless integration into complex electronic systems.',
    buttonLabel: 'View Products',
    imgStart: true,
    img: productimage,
    alt: 'products',
    dark: false,
    primary: false,
    darkText: true,
    buttonLink: '/products',
    isCircular: true
}; 

export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: 'Get in Touch with Us',
    description: '', // No extra description, as contact details will be handled in Index.js
    buttonLabel: '', // Removed the button
    imgStart: false,
    img: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393749937!2d77.0688979029539!3d28.527582006376057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1db6ac5a0f2d%3A0x3d8b9b5b3a0e6e0!2sNew+Delhi%2C+Delhi%2C+India!5e0!3m2!1sen!2sus!4v1617768073401!5m2!1sen!2sus',
    alt: 'Google Map',
    dark: false,
    primary: false,
    darkText: true,
    isMap: true // This ensures that it renders as a Google Map iframe
};



export const homeObjFour = {
    id: 'quote',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Get a Quote',
    headline: 'Have something specific in mind?',
    description: 'Thank you for visiting Charismatic Electronics online. Please use the form to get in touch with us. If you have a specific design need, please mention that in your submission and our representative will reach out to you soon.',
    imgStart: false,
    alt: 'Aboutus',
    dark: true,
    primary: true,
    darkText: false
};