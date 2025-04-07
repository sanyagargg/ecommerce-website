import aboutImage from '../../images/aboutus.jpg';
import meetCEO from '../../images/ceo.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Us',
    headline: 'At Charismatic Electronics',
    description: 'We aspire to be the trusted partner for businesses worldwide, providing advanced solutions such as SMPS Transformers, Toroidal Coils, Drum Coil Inductors, Power Inductors, and Return Line Filters. Through our commitment to innovation, sustainability, and unmatched craftsmanship, we aim to drive progress across industries, from renewable energy to advanced manufacturing and beyond.',
    buttonLabel: 'Know More',
    buttonLink: '/about', // 🆕 This is the route it will go to
    imgStart: false,
    img: aboutImage,
    alt: 'Aboutus',
    dark: false,
    primary: false,
    darkText: true
};

{/* export const homeObjTwo = {
    id: 'ceo',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Meet the CEO',
    headline: 'Parveen Garg',
    description: 'Over 27+ years of extensive experience in Manufacturing facility set up & Management, Profit Optimization, Production Planning, Cost Reductions, Quality Assurance, Product Development, TPM, TQM etc. Currently working with Charismatic Electronics as CEO. A keen strategist and planner with skills in conceptualizing and effecting process initiatives to enhance plant efficiency and productivity. Demonstrated abilities in working on initiatives, thereby bringing down equipment breakdown & achieving annual costs savings. Deft in handling the complete product development operations entailing planning, testing, inspection & and ensuring of quality assurance. Possess in depth knowledge of quality systems ISO 9001, IATF 16949, Kaizen, TPM, TQM etc .Excellent communicator with an analytical bent of mind and ability to lead a team under extreme conditions as well.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: meetCEO,
    alt: 'CEO of Charismatic Electronics',
    dark: false,
    primary: false,
    darkText: true,
    externalLink: 'https://www.linkedin.com/in/parveen-garg-9285885/',
    isCircular: true
}; */}

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
    description: 'We aspire to be the trusted partner for businesses worldwide, providing advanced solutions such as SMPS Transformers, Toroidal Coils, Drum Coil Inductors, Power Inductors, and Return Line Filters. Through our commitment to innovation, sustainability, and unmatched craftsmanship, we aim to drive progress across industries, from renewable energy to advanced manufacturing and beyond.',
    buttonLabel: 'Know More',
    imgStart: false,
    img: aboutImage,
    alt: 'Aboutus',
    dark: true,
    primary: true,
    darkText: false
};