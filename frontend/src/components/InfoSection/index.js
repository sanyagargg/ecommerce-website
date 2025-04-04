import React from 'react';
import { Link } from 'react-router-dom';
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
    img, 
    alt,
    primary,
    dark,
    dark2,
    externalLink,
    isCircular,
    isMap // New prop to check if it's a Google Map
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    {/* Left Side - Text Content */}
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            {/* Display description or contact info */}
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
                                    ) : (
                                        <Button
                                            to="home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                        >
                                            {buttonLabel}
                                        </Button>
                                    )}
                                </BtnWrap>
                            )}
                        </TextWrapper>
                    </Column1>

                    {/* Right Side - Image or Google Map */}
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
