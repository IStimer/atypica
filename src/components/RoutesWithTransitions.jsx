import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from '../Home.jsx';
import StudioPage from '../Studio.jsx';
import Project from '../Project.jsx';
import PageTransition from './PageTransition.jsx';
import { useNavigation } from '../utils/NavigationContext';

const RoutesWithTransitions = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isTransitioning, nextPath, navigate: customNavigate } = useNavigation();
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

    const handleTransitionComplete = () => {
        navigate(nextPath, { replace: true });
    };

    return (
        <>
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/studio" element={<StudioPage />} />
                <Route path="/project" element={<Project />} />
            </Routes>
            {isLoading && (
                <PageTransition
                    setIsLoading={setIsLoading}
                    setIsContentVisible={setIsContentVisible}
                    onTransitionComplete={handleTransitionComplete}
                />
            )}
        </>
    );
}

export default RoutesWithTransitions;
