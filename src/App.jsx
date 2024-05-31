import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Preloader from "./components/Preloader.jsx";
import RoutesWithTransitions from './components/RoutesWithTransitions.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="App">
                <Preloader isLoading={isLoading} setIsLoading={setIsLoading}/>
                <div className={`content ${isLoading ? 'hidden' : 'visible'}`}>
                <RoutesWithTransitions />
                </div>
            </div>
        </Router>
    )
}

export default App;
