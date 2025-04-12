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

const ContactInfoSection = ({ 
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
                        description.map((line, idx) => (
                            <p
                            key={idx}
                            style={{
                                marginBottom: '10px',
                                fontSize: '1.1rem', // Adjust as needed (e.g., '18px' or '1.2rem')
                                lineHeight: '1.6',
                                color: darkText ? '#010606' : '#fff',
                            }}
                            >
                            {line}
                            </p>
                        ))
                        ) : (
                        <p
                            style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: darkText ? '#010606' : '#fff',
                            }}
                        >
                            {description}
                        </p>
                        )}

                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default ContactInfoSection;
