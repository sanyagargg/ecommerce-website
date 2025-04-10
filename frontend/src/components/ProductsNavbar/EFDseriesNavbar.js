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

const EFDSeriesNavbar = () => {
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
    navigate(`/products/ferritetransformer/efdseries/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('efd10')}>EFD 10</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd12')}>EFD 12</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd15')}>EFD 15</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd20')}>EFD 20</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd21')}>EFD 21</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd25')}>EFD 25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd30')}>EFD 30</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd31')}>EFD 31</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd34')}>EFD 34</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efd40')}>EFD 40</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default EFDSeriesNavbar;