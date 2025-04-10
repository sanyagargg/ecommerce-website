import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLeft,
  MobileIcon,
  NavLogo,
  NavCE,
  Sidebar,
  CloseIcon,
  SidebarMenu,
  SidebarItem
} from './ProductNavbarElements';

const DrumCoilsNavbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (model) => {
    navigate(`/products/drumcoils/${model}`);
    toggleSidebar();
  };

  const goToHome = () => {
    navigate('/products');
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLeft>
            <MobileIcon onClick={toggleSidebar}>
              <FaBars />
            </MobileIcon>
            <NavLogo onClick={goToHome}>
              <img src="/charismaticlogo.webp" alt="Logo" />
            </NavLogo>
            <NavCE onClick={goToHome}>CE</NavCE>
          </NavLeft>
        </NavbarContainer>
      </Nav>

      <Sidebar isOpen={isOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarMenu>
          <SidebarItem onClick={() => handleNavigate('drum6x8')}>Drum 6×8</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('drum8x10')}>Drum 8×10</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('drum10x12')}>Drum 10×12</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('drum10x15')}>Drum 10×15</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('drum12x15')}>Drum 12×15</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('drum15x22')}>Drum 15×22</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default DrumCoilsNavbar;