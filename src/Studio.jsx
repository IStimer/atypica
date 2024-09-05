import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Presentation from './sections/studio/Presentation.jsx'
import './styles/main.scss'

const StudioPage = () => {
    return (
        <>
            <Wrapper>
                <Header/>
                <Presentation/>
                <Footer/>
            </Wrapper>
        </>
    )
}

export default StudioPage
