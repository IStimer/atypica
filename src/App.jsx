import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import PageTransition from "./components/PageTransition.jsx";
import RoutesWithTransitions from './components/RoutesWithTransitions.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <RoutesWithTransitions />
            </div>
        </Router>
    )
}

export default App;
