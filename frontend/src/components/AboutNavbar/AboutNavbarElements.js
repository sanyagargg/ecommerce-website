import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Outer nav bar
export const Nav = styled.nav`
  background: rgb(1, 5, 41);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

// Container to hold hamburger + logo in a row (aligned left)
export const NavLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Hamburger icon on far left
export const NavIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
  margin-right: 16px;
`;

// Logo with image and text
export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  gap: 10px;

  img {
    width: 40px;
    height: auto;
  }
`;

export const LogoImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Sidebar styling
export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 60px;
  transition: 0.3s ease-in-out;
  z-index: 999;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SidebarItem = styled.li`
  padding: 16px 24px;
  width: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #F39540;
    color: #000;
  }
`;
