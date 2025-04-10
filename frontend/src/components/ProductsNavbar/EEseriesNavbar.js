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

const EESeriesNavbar = () => {
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
    navigate(`/products/ferritetransformer/eeseries/ee${model}`);
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
          <SidebarItem onClick={() => handleNavigate('10x5x5')}>EE 10x5x5</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('13x6x6')}>EE 13x6x6</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('13x7x4')}>EE 13x7x4</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('16x6x5')}>EE 16x6x5</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('16x8x5')}>EE 16x8x5</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('19x8x5')}>EE 19x8x5</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('20x10x6')}>EE 20x10x6</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('25x9x6')}>EE 25x9x6</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('25x13x17')}>EE 25x13x17</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('28x10x10')}>EE 28x10x10</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('30')}>EE 30</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('32')}>EE 32</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('33')}>EE 33</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('40')}>EE 40</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('42x15')}>EE 42x15</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('42x20')}>EE 42x20</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('44')}>EE 44</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('55')}>EE 55</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('65')}>EE 65</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default EESeriesNavbar;