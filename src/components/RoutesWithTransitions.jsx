import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Home from '../Home.jsx';
import StudioPage from '../Studio.jsx';
import PageTransition from '../components/PageTransition.jsx';

const RoutesWithTransitions = () => {
    const location = useLocation();

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={500}
            >
                <Routes location={location}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/studio" element={<PageTransition><StudioPage /></PageTransition>} />
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default RoutesWithTransitions;
