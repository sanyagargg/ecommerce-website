import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'rgb(1,5,41)' : 'rgb(1,5,41)')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: 0.4s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MobileIcon = styled.div`
  display: block;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px;
    width: auto;
  }
`;

export const NavCE = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Sidebar = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 250px;
  height: 100%;
  background: #000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  top: 0;
  left: 0;
  padding-top: 60px;
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.div`
  padding: 16px 24px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: orange;
    color: #000;
  }
`;


