import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import RoutesWithTransitions from "./components/RoutesWithTransitions.jsx";
import { NavigationProvider } from './utils/NavigationContext';

const App = () => (
    <NavigationProvider>
        <Router>
            <div className="App">
                <RoutesWithTransitions />
            </div>
        </Router>
    </NavigationProvider>
);

export default App;
