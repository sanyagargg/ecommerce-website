import styled from 'styled-components';

export const GalleryContainer = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0; /* Add some padding for spacing, adjust as needed */

    @media screen and (max-width: 768px) {
        padding: 30px 0; /* Slightly adjust for tablet screens */
    }

    @media screen and (max-width: 480px) {
        padding: 20px 0; /* Adjust for smaller mobile screens */
        padding-bottom: 50px;
    }
`;

export const GalleryWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
        gap: 12px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const GalleryCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const GalleryIcon = styled.img`
    width: 100%;
    height: 200px; /* Fix the height to keep all images the same size */
    object-fit: cover; /* Ensures the images don't stretch */
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 180px; /* Adjust size slightly for tablets */
    }

    @media screen and (max-width: 480px) {
        height: 150px; /* Adjust for smaller screens */
    }
`;

export const GalleryH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 104px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 50px;
        margin-bottom: 30px;
    }
`;

export const GalleryH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const GalleryP = styled.p`
    font-size: 1rem;
    text-align: center;
`;