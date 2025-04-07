import aboutImage from '../../images/aboutus.jpg';
import productimage from '../../images/products.png';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Us',
    headline: 'At Charismatic Electronics',
    description: 'We aspire to be the trusted partner for businesses worldwide, providing advanced solutions such as SMPS Transformers, Toroidal Coils, Drum Coil Inductors, Power Inductors, and Return Line Filters. Through our commitment to innovation, sustainability, and unmatched craftsmanship, we aim to drive progress across industries, from renewable energy to advanced manufacturing and beyond.',
    buttonLabel: 'Know More',
    buttonLink: '/about', //  This is the route it will go to
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
    description: 'Our products are crafted using the highest quality components and the latest technology, adhering to industry standards. They are meticulously engineered to offer exceptional strength and optimal performance. Our quality controllers rigorously test them across various parameters to ensure they meet the highest standards of excellence.',
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
    topLine: 'Contact Us',
    headline: 'Get in Touch with Us',
    description: '', // No extra description, as contact details will be handled in InfoSection
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
    description: 'Thank you for visiting CE online. Please use the form to get in touch with us. If you have a specific design need, please mention that in your submission and our representative will reach out to you soon.',
    imgStart: false,
    alt: 'Aboutus',
    dark: true,
    primary: true,
    darkText: false
};