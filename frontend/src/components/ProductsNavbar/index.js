import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  SearchIconWrapper
} from './ProductNavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="/charismaticlogo.webp" alt="Logo" />
            CE
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="ferritetransformer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Ferrite Transformers
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="linefilters"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Line Filters Common Mode Chokes
              </NavLinks>
            </NavItem>
            

            <NavItem>
              <NavLinks
                to="drumcoils"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Drum Coils    
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="toroid"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Toroid
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="bitrodcoils"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Bit Rod Coils
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <SearchIconWrapper>
              {/* <FaSearch /> */}
            </SearchIconWrapper>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
