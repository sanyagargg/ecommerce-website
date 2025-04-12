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
} from './AboutNavbarElements';

const AboutNavbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // <-- useNavigate from React Router

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleSidebar();
    }
  };

  const goToHome = () => {
    navigate('/'); // <-- Go to homepage
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
              <img src="/charismaticlogo.png" alt="Logo" />
            </NavLogo>
            <NavCE onClick={goToHome}>CE</NavCE>
          </NavLeft>
        </NavbarContainer>
      </Nav>

      <Sidebar isOpen={isOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarMenu>
          <SidebarItem onClick={() => handleScroll('aboutObj1')}>Why Us</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj2')}>Our Vision</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj3')}>Core Values</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj4')}>Quality Policy</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj5')}>Manufacturing Capabilities</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj6')}>Technical Capabilities</SidebarItem>
          <SidebarItem onClick={() => handleScroll('aboutObj7')}>Industries Served</SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default AboutNavbar;