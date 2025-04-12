import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
  ISOStrip,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <ISOStrip>
        <img src="/iso.png" alt="ISO Certified" />
        An ISO 9001:2015 certified manufacturer and supplier of customized Transformer.
      </ISOStrip>

      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>COMPANY</FooterLinkTitle>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/#quote">Get Custom Quote</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>FERRITE TRANSFORMER</FooterLinkTitle>
              <FooterLink to="/products/ferritetransformer/eeseries">EE Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/efdseries">EFD Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/rmseries">RM Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/epcseries">EPC Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/pqseries">PQ Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/eerseries">EER Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/potseries">POT Series</FooterLink>
              <FooterLink to="/products/ferritetransformer/ecseries">EC Series</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle to>LINE FILTERS COMMON MODE CHOKES</FooterLinkTitle>
              <FooterLink to="/products/linefilter">View All</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>COILS</FooterLinkTitle>
              <FooterLink to="/products/drumcoils">DRUM</FooterLink>
              <FooterLink to="/products/toroidal">TOROID</FooterLink>
              <FooterLink to="/products/bitrodcoil">BIT ROD</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Charismatic Electronics
            </SocialLogo>
            <WebsiteRights>
              Charismatic Electronics © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;