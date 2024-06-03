import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home.jsx';
import StudioPage from '../Studio.jsx';
import Project from '../Project.jsx';
import PageTransition from './PageTransition.jsx';

const RoutesWithTransitions = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const skipPreloaderRef = useRef(false);

    useEffect(() => {
        if (skipPreloaderRef.current) {
            skipPreloaderRef.current = false;
            return;
        }

        setIsLoading(true);
        setIsContentVisible(false);
    }, [location]);

    return (
        <>
            {isLoading && <PageTransition setIsLoading={setIsLoading} setIsContentVisible={setIsContentVisible} />}
            {isContentVisible && (
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/studio" element={<StudioPage />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            )}
        </>
    );
}

export default RoutesWithTransitions;
