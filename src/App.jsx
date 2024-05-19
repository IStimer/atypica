import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import StudioPage from './Studio.jsx';
import './styles/main.scss';
import Preloader from "./components/Preloader.jsx";

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
                <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
                <div className={`content ${isLoading ? 'hidden' : 'visible'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/studio" element={<StudioPage />} />
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
