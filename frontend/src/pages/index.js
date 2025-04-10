//HOME PAGE

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import NewDesignForm from '../components/InfoSection/NewDesignForm';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => {
        let abortController = new AbortController();
        setIsOpen(!isOpen);
        return () => {
            abortController.abort();
        };
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Gallery />
            <InfoSection {...homeObjThree} />
            <NewDesignForm {...homeObjFour} />
            <Footer />
        </>
    );
};

export default Home;
