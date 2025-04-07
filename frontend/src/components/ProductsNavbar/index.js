import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
} from './ProductNavbarElements';

const ProductNavbar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="/charismaticlogo.webp" alt="Logo" />
            CE
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default ProductNavbar;
