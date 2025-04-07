import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './InfoElements';

const AboutInfoSection = ({ 
    id, 
    lightBg,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    bgImage // Optional for background image
}) => {
    return (
        <InfoContainer lightBg={lightBg} bgImage={bgImage} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    {/* Left Column: TopLine + Heading */}
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                        </TextWrapper>
                    </Column1>

                    {/* Right Column: Description */}
                    <Column2>
                        <TextWrapper>
                        {Array.isArray(description) ? (
                        <ul>
                            {description.map((point, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>
                                <Subtitle darkText={darkText}>{point}</Subtitle>
                            </li>
                            ))}
                        </ul>
                        ) : (
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        )}

                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default AboutInfoSection;
