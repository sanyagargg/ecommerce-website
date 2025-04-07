import React, { useState } from 'react';
import {
  Nav,
  NavIcon,
  NavLogo,
  Sidebar,
  SidebarMenu,
  SidebarItem,
  CloseIcon,
  LogoImageWrapper,
  NavLeftContainer
} from './AboutNavbarElements';
import { FaBars } from 'react-icons/fa';

const AboutNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Nav>
        <NavLeftContainer>
          <NavIcon onClick={toggleSidebar}>
            <FaBars />
          </NavIcon>
          <NavLogo to="/">
            <LogoImageWrapper>
              <img src="/charismaticlogo.webp" alt="Logo" />
            </LogoImageWrapper>
            CE
          </NavLogo>
        </NavLeftContainer>
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
