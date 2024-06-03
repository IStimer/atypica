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
    const { isTransitioning, nextPath, handleTransitionComplete } = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(true);

    useEffect(() => {
        if (isTransitioning) {
            setIsLoading(true);
            setIsContentVisible(false);
        }
    }, [isTransitioning]);

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
};

export default RoutesWithTransitions;
