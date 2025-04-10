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

const ToroidalCoilsNavbar = () => {
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
    navigate(`/products/toroidal/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('t9')}>T9</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t10')}>T10</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t11')}>T11</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t12')}>T12</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t12.5')}>T12.5</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t13')}>T13</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t16')}>T16</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t18')}>T18</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t20')}>T20</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t23')}>T23</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t25')}>T25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t27')}>T27</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t30')}>T30</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('t36')}>T36</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default ToroidalCoilsNavbar;