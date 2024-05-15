// App.jsx
import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './sections/Banner.jsx'
import ContainerCanvasSea from './sections/ContainerCanvasSea.jsx'
import Concept from './sections/Concept.jsx'
import Work from './sections/Work.jsx'
import Studio from './sections/Studio.jsx'
import Preloader from './components/Preloader'
import './styles/main.scss'

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
            <div className={`content ${isLoading ? 'hidden' : 'visible'}`}>
                <Wrapper>
                    <Header>
                        <Banner />
                    </Header>
                    <ContainerCanvasSea />
                    <Concept />
                    <Work />
                    <Studio />
                    <Footer />
                </Wrapper>
            </div>
        </div>
    );
}

export default App;