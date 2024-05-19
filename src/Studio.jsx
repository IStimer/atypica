import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';

function StudioPage() {
    return (
        <div className="StudioPage">
            <Wrapper>
                <Header />
                <Footer />
            </Wrapper>
        </div>
    );
}

export default StudioPage;
