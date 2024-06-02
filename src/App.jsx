import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Preloader from "./components/Preloader.jsx";
import RoutesWithTransitions from './components/RoutesWithTransitions.jsx';

function App() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [isContentVisible, setIsContentVisible] = useState(false);

    return (
        <Router>
            <div className="App">
                {/*<Preloader isLoading={isLoading} setIsLoading={setIsLoading} setIsContentVisible={setIsContentVisible} />*/}
                {/*<div className={`content ${isContentVisible ? 'visible' : 'hidden'}`}>*/}
                    <RoutesWithTransitions />
                {/*</div>*/}
            </div>
        </Router>
    )
}

export default App;
