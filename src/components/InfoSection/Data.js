import aboutImage from '../../images/aboutus.jpg';
import meetCEO from '../../images/ceo.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Us',
    headline: 'At Charismatic Electronics',
    description: 'We aspire to be the trusted partner for businesses worldwide, providing advanced solutions such as SMPS Transformers, Toroidal Coils, Drum Coil Inductors, Power Inductors, and Return Line Filters. Through our commitment to innovation, sustainability, and unmatched craftsmanship, we aim to drive progress across industries, from renewable energy to advanced manufacturing and beyond.',
    buttonLabel: 'Know More',
    imgStart: false,
    img: aboutImage,
    alt: 'Aboutus',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
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
};

export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact Us',
    headline: 'Want to Get in Touch with Us?',
    description: "Reach out to us at : charismaticelectronics@gmail.com",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'GugaSignUp',
    dark: false,
    primary: false,
    darkText: true
};
