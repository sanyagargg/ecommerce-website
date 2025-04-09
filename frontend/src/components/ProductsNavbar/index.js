import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  SearchIconWrapper,
  DropdownMenu,
  DropdownItem,
  SubDropdownMenu,
  SubDropdownItem
} from './ProductNavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeSeries, setActiveSeries] = useState(null);

  const changeNav = () => setScrollNav(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => scroll.scrollToTop();

  const dropdownData = {
    "Ferrite Transformers": {
      "EE Series": ["EE-10X5X5", "EE-13X6X6", "EE-13X7X4", "EE-16X6X5", "EE-16X8X5", "EE-19X8X5", "EE-20X10X6", "EE-25X9X6", "EE-25X13X7", "EE-28X10X10", "EE-30", "EE-32", "EE-33", "EE-40", "EE-42X15", "EE-42X20", "EE-55", "EE-65"],
      "EFD Series": ["EFD-10", "EFD-12", "EFD-15", "EFD-20", "EFD-21", "EFD-30", "EFD-31", "EFD-34", "EFD-40"],
      "RM Series": ["RM-4", "RM-5", "RM-6", "RM-8", "RM-10", "RM-12"],
      "ETD Series": ["ETD29", "ETD34", "ETD35", "ETD39", "ETD44"],
      "EPC Series": ["EPC13", "EPC17", "EPC20", "EPC25", "EPC27", "EPC30", "EPC39"],
      "PQ Series": ["PQ2012", "PQ2616", "PQ2620", "PQ2625", "PQ2630"],
      "EER Series": ["EER-20", "EER-25", "EER-28", "EER-35", "EER-39"],
      "POT Series": ["POT23/11", "POT25/11", "POT30/19", "POT31/19", "POT33/14", "POT33/19", "POT33/24", "POT40/25", "POT40/27", "POT40/28"],
      "EC Series": ["EC-28", "EC-39", "EC-40"]
    },
    "Line Filters Common Mode Chokes": {
      "UU Series": ["UU9.8", "UU10.5", "UU15", "UU16", "UU21"],
      "UT Series": ["UT20"],
      "ET Series": ["ET24"]
    },
    "Drum Coils": {
      "Drum": ["Drum 6X8", "Drum 8X10", "Drum 10X12", "Drum 10X15", "Drum 12X15", "Drum 15X22"]
    },
    "Toroidal": {
      "T Series": ["T9", "T10", "T11", "T12", "T12.5", "T13", "T14", "T16", "T18", "T20", "T23", "T25", "T27", "T30", "T36"]
    },
    "Bit Rod Coils": {
      "Bit Rod": ["3X10", "3X13", "4X14", "5X15", "6X20", "6.5X25", "8X20", "8X25", "10X30", "10X35"]
    }
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="/charismaticlogo.webp" alt="Logo" />
            CE
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            {Object.entries(dropdownData).map(([category, subItems]) => (
              <NavItem
                key={category}
                onMouseEnter={() => setDropdownOpen(category)}
                onMouseLeave={() => {
                  setDropdownOpen(null);
                  setActiveSeries(null);
                }}
              >
                <NavLinks to={category.toLowerCase().replace(/ /g, '')}>
                  {category}
                </NavLinks>
                {dropdownOpen === category && (
                  <DropdownMenu>
                    {Object.entries(subItems).map(([series, models]) => (
                      <DropdownItem
                        key={series}
                        onMouseEnter={() => setActiveSeries(series)}
                      >
                        {series}
                        {activeSeries === series && (
                          <SubDropdownMenu>
                            {models.map((model, idx) => (
                              <SubDropdownItem key={idx}>
                                {model}
                              </SubDropdownItem>
                            ))}
                          </SubDropdownMenu>
                        )}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </NavItem>
            ))}
          </NavMenu>

          <NavBtn>
            <SearchIconWrapper />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;