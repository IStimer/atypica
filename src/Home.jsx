import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './sections/home/Banner.jsx';
import Concept from './sections/home/Concept.jsx';
import Work from './sections/home/Work.jsx';
import Studio from './sections/home/Studio.jsx';
import { Canvas } from '@react-three/fiber';
import ThreeCanvas from './components/ThreeScene.jsx';
import './styles/main.scss';

const Home = () => {
    return (
        <Wrapper>
            <Header>
                <Banner />
            </Header>
            <Canvas style={{ height: '100vh', width: '100%' }}>
                <ThreeCanvas />
            </Canvas>
            <Concept />
            <Work />
            <Studio />
            <Footer />
        </Wrapper>
    );
};

export default Home;
