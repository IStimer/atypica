// App.jsx
import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Banner from './sections/Banner.jsx';

function App() {
    return (
            <Wrapper>
                <Header>
                    <Banner />
                </Header>

            </Wrapper>
    );
}

export default App;
