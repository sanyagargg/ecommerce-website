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

const FerriteTransformerNavbar = () => {
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
    navigate(`/products/ferritetransformer/${series}`);
    toggleSidebar();
  };

  const goToHome = () => {
    navigate('/');
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
          <SidebarItem onClick={() => handleNavigate('eeseries')}>EE Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('efdseries')}>EFD Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('rmseries')}>RM Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('etdseries')}>ETD Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('epcseries')}>EPC Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pqseries')}>PQ Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('eerseries')}>EER Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('potseries')}>POT Series</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('ecseries')}>EC Series</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default FerriteTransformerNavbar;
