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

const EPCSeriesNavbar = () => {
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
    navigate(`/products/ferritetransformer/epcseries/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('epc13')}>EPC 13</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc14')}>EPC 14</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc17')}>EPC 17</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc19')}>EPC 19</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc25')}>EPC 25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc27')}>EPC 27</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc30')}>EPC 30</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epc39')}>EPC 39</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default EPCSeriesNavbar;