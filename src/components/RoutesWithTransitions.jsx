import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from '@react-spring/web'
import Home from '../Home.jsx'
import StudioPage from '../Studio.jsx'
import Project from '../Project.jsx'
import PageTransition from '../components/PageTransition.jsx'

const RoutesWithTransitions = () => {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(0px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(0px)' },
        config: { duration: 500 },
        keys: location.pathname
    })

    return transitions((props, item) => (
        <animated.div style={props} key={item.pathname}>
            <Routes location={item}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/studio" element={<PageTransition><StudioPage /></PageTransition>} />
                <Route path="/project" element={<PageTransition><Project /></PageTransition>} />
            </Routes>
        </animated.div>
    ))
}

export default RoutesWithTransitions
