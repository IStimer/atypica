import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Presentation from './sections/studio/Presentation.jsx'

const StudioPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Presentation />
                <div>
                    toto
                </div>
                <Footer />
            </Wrapper>
        </>
    )
}

export default StudioPage
