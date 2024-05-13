// App.jsx
import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './sections/Banner.jsx';
import ContainerCanvasSea from './sections/ContainerCanvasSea.jsx';
import Concept from './sections/Concept.jsx';
import Work from './sections/Work.jsx';
import Studio from "./sections/Studio.jsx";
import './styles/main.scss';


function App() {
    return (
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
    );
}

export default App;
