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
} from './NavbarElements';

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
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks
                to="ceo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Meet the CEO
              </NavLinks>
            </NavItem>
            */}

            <NavItem>
              <NavLinks
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Products      
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Contact
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="quote"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Get a Quote
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <SearchIconWrapper>
              <FaSearch />
            </SearchIconWrapper>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
