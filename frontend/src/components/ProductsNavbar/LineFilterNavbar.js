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

const LineFilterNavbar = () => {
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

  const handleNavigate = (series) => {
    navigate(`/products/linefilter/${series}`);
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
          <SidebarItem onClick={() => handleNavigate('uu9.8series')}>UU9.8 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('uu10.5series')}>UU10.5 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('uu15series')}>UU15 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('uu16series')}>UU16 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('uu21series')}>UU21 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('ut20series')}>UT20 Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('et24series')}>ET24 Series</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default LineFilterNavbar;