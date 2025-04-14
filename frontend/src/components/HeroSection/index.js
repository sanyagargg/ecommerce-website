import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Video from '../../videos/Untitled1.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBgWrapper,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBgWrapper>
                    <VideoBg
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        controls={false}
                        src={Video}
                        type='video/mp4'
                    />
                </VideoBgWrapper>
            </HeroBg>
            <HeroContent>
                <HeroH1 className='text-3xl'>Charismatic Electronics</HeroH1>
                <HeroP>"Wired for Excellence."</HeroP>
                <HeroBtnWrapper>
                    <RouterLink to="/products" style={{ textDecoration: 'none' }}>
                        <Button
                            as="span"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                        >
                            View Our Products {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </RouterLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection