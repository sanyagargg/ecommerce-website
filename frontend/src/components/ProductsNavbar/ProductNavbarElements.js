import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: rgb(1, 5, 41);
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  text-decoration: none;

  img {
    width: 40px;
    height: auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-left: 150px; /*  gap between CE and first link */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  position: relative;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  width: 220px; /* fixed width for consistent spacing */

  &.active {
    border-bottom: 3px solid #F39540;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchIconWrapper = styled.div`
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #F39540;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: rgb(1, 5, 41);
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  z-index: 99;
`;

export const DropdownItem = styled.li`
  color: #fff;
  padding: 10px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &:hover {
    background-color: #111c4e;
  }
`;

export const SubDropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  background-color: rgb(1, 5, 41);
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 180px;

  max-height: 250px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #F39540 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #F39540;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const SubDropdownItem = styled.li`
  color: #fff;
  padding: 8px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #111c4e;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(1, 5, 41);
  color: white;
  padding: 20px;
  z-index: 999;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const MobileMenuItem = styled.div`
  font-size: 18px;

  strong {
    color: #f39540;
    display: block;
    margin-bottom: 6px;
  }

  em {
    color: #ccc;
    font-style: normal;
  }

  ul {
    margin-left: 10px;
    padding-left: 10px;
    list-style: circle;
  }

  li {
    padding: 4px 0;
  }
`;

export const MobileSubMenu = styled.div`
  margin-left: 10px;
`;
