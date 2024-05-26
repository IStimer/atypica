import React from 'react';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './sections/home/Banner.jsx'
import ContainerCanvasSea from './sections/home/ContainerCanvasSea.jsx'
import Concept from './sections/home/Concept.jsx'
import Work from './sections/home/Work.jsx'
import Studio from './sections/home/Studio.jsx'
import './styles/main.scss'

function Home() {
    return (
        <>
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
        </>
    );
}

export default Home;