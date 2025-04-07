import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';
import { Button } from '../ButtonElement';

const InfoSection = ({ 
    id, 
    lightBg,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    buttonLink,
    img, 
    alt,
    primary,
    dark,
    dark2,
    externalLink,
    isCircular,
    isMap,
    bgImage // 🆕 New prop
}) => {
    return (
        <InfoContainer lightBg={lightBg} bgImage={bgImage} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    {/* Text Column */}
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            {id === 'contact' ? (
                                <Subtitle darkText={darkText}>
                                    <strong>Email:</strong> charismaticelectronics@gmail.com<br />
                                    <strong>Phone:</strong> +91 9818170585
                                </Subtitle>
                            ) : (
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            )}

                            {/* Show button unless it's the Contact section */}
                            {id !== 'contact' && buttonLabel && (
                                <BtnWrap>
                                    {externalLink ? (
                                        <a href={externalLink} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                as="span"
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </a>
                                    ) : buttonLink?.startsWith('/') ? (
                                        <RouterLink to={buttonLink}>
                                            <Button
                                                as="span"
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </RouterLink>
                                    ) : (
                                        <ScrollLink
                                            to={buttonLink}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                        >
                                            <Button
                                                as="span"
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </ScrollLink>
                                    )}
                                </BtnWrap>
                            )}
                        </TextWrapper>
                    </Column1>

                    {/* Image Column */}
                    <Column2>
                        <ImgWrap isMap={isMap}>
                            {isMap ? (
                                <iframe 
                                    src={img} 
                                    width="100%" 
                                    height="300px" 
                                    style={{ border: "0", borderRadius: "10px" }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            ) : (
                                <Img src={img} alt={alt} isCircular={isCircular} />
                            )}
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
