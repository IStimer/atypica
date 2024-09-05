import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './sections/home/Banner.jsx'
import ContainerCanvasSea from './sections/home/ContainerCanvasSea.jsx'
import Concept from './sections/home/Concept.jsx'
import Work from './sections/home/Work.jsx'
import Studio from './sections/home/Studio.jsx'
import ContactUs from './sections/home/ContactUs.jsx'
import './styles/main.scss'

const Home = () => {
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
                    <ContactUs />
                    <Footer />
                </Wrapper>
        </>
    )
}

export default Home