import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ButtonGrid,
    ButtonItem
} from './ProductsHeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const buttonLinks = [
        "/EM", "/EDR", "/EE Horizontal", "/EE Vertical", "/EF",
        "/EFD", "/EP", "/EPC", "/EQ", "/ET,UT",
        "/ETD,ER,EC", "/POT", "/PQ", "/RM", "/UU"
    ]

    return (
        <HeroContainer id="home">
            {/* Left Side: Text and Buttons */}
            <HeroContent>
                <HeroH1>Our Products</HeroH1>
                <HeroP>Explore our range of high-quality electronic components.</HeroP>
                <HeroBtnWrapper>
                    {/* 15 Buttons in a Grid Layout */}
                    <ButtonGrid>
                        {buttonLinks.map((link, index) => (
                            <ButtonItem key={index}>
                                <RouterLink to={link} style={{ textDecoration: 'none' }}>
                                    <Button
                                        as="span"
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                        primary={false}
                                    >
                                        {link.substring(1)} {/* Display the name after '/' */}
                                    </Button>
                                </RouterLink>
                            </ButtonItem>
                        ))}
                    </ButtonGrid>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
