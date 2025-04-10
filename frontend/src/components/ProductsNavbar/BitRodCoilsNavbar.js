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

const BitRodCoilsNavbar = () => {
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
    navigate(`/products/bitrod/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('3x10')}>3×10</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('3x13')}>3×13</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('4x14')}>4×14</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('5x15')}>5×15</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('6x20')}>6×20</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('6x25')}>6×25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('8x20')}>8×20</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('8x25')}>8×25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('10x30')}>10×30</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('10x35')}>10×35</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default BitRodCoilsNavbar;