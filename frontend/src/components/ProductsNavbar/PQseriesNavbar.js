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

const PQSeriesNavbar = () => {
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
    navigate(`/products/ferritetransformer/pqseries/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('pq2012')}>PQ 2012</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pq2016')}>PQ 2016</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pq2620')}>PQ 2620</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pq2625')}>PQ 2625</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pq3220')}>PQ 3220</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pq3230')}>PQ 3230</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default PQSeriesNavbar;