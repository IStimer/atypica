import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Studio from './sections/Studio.jsx';
import './styles/main.scss';

function StudioPage() {
    return (
        <div className="StudioPage">
            <Wrapper>
                <Header />
                <Studio />
                <Footer />
            </Wrapper>
        </div>
    );
}

export default StudioPage;
