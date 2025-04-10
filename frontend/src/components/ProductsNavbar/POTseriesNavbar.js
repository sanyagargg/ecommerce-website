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

const POTSeriesNavbar = () => {
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
    navigate(`/products/ferritetransformer/potseries/${model}`);
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
          <SidebarItem onClick={() => handleNavigate('pot2311')}>POT 23/11</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot2511')}>POT 25/11</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot3019')}>POT 30/19</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot3119')}>POT 31/19</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot3314')}>POT 33/14</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot3319')}>POT 33/19</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot3324')}>POT 33/24</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot4025')}>POT 40/25</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot4027')}>POT 40/27</SidebarItem>
          <SidebarItem onClick={() => handleNavigate('pot4028')}>POT 40/28</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default POTSeriesNavbar;