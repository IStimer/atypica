import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home.jsx';
import StudioPage from '../Studio.jsx';
import Project from '../Project.jsx';
import PageTransition from './PageTransition.jsx';
import { useNavigation } from '../utils/NavigationContext';

const RoutesWithTransitions = () => {
    const location = useLocation();
    const { isTransitioning, handleTransitionComplete } = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (initialLoad) {
            setIsLoading(true);
            setIsContentVisible(false);
        } else if (isTransitioning) {
            setIsLoading(true);
            setIsContentVisible(true); // Keep content visible during transitions
        }
    }, [isTransitioning, initialLoad]);

    useEffect(() => {
        setInitialLoad(false);
    }, []);

    return (
        <>
            <Routes location={location}>
                <Route path="/" element={isContentVisible ? <Home /> : null} />
                <Route path="/studio" element={isContentVisible ? <StudioPage /> : null} />
                <Route path="/project/:id" element={isContentVisible ? <Project /> : null} />
            </Routes>
            {isLoading && (
                <PageTransition
                    setIsLoading={setIsLoading}
                    setIsContentVisible={setIsContentVisible}
                    onTransitionComplete={handleTransitionComplete}
                    initialLoad={initialLoad}
                />
            )}
        </>
    );
};

export default RoutesWithTransitions;
