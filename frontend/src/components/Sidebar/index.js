import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRouteLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarRouteLink to="/about" onClick={toggle}>About</SidebarRouteLink>
                <SidebarRouteLink to="/products" onClick={toggle}>Products</SidebarRouteLink>
                <SidebarRouteLink to="/gallery" onClick={toggle}>Gallery</SidebarRouteLink>
                <SidebarLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                >
                    Contact
                </SidebarLink>
                <SidebarLink
                    to="quote"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                >
                    Get a Quote
                </SidebarLink>
                <SidebarRouteLink to="/careers" onClick={toggle}>Careers</SidebarRouteLink>
            </SidebarMenu>
            <SideBtnWrap>
                {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar