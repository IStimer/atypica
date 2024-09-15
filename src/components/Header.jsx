import React, { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useNavigation } from '../utils/NavigationContext'
import ContactModal from './ContactModal'
import cross from '../assets/svgs/cross.svg'

const Header = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { navigate: customNavigate } = useNavigation()
    const navigate = useNavigate()
    const location = useLocation()
    const mobileMenuRef = useRef(null)

    const openModal = () => {
        setModalIsOpen(true)
        setMobileMenuOpen(false)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleNavigation = (path) => {
        if (location.pathname !== path) {
            customNavigate(path, navigate)
        }
        setMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const renderNavItems = () => (
        <>
            <div>
                <a
                    href="#!"
                    onClick={() => handleNavigation('/')}
                    className={`home ${location.pathname === '/' ? 'active' : ''}`}
                >
                    atypica
                </a>
            </div>
            {!mobileMenuOpen && (
                <div>
                    digital studio
                </div>
            )}
            <div className="header--nav__col flex">
                <a
                    href="#!"
                    onClick={() => handleNavigation('/studio')}
                    className={location.pathname === '/studio' ? 'active' : ''}
                >
                    studio
                </a>
                <a href="#!" onClick={openModal}>contact</a>
            </div>
            <div className="header--nav__col flex">
                <a href="https://x.com/Atypica_d">twitter</a>
                <a href="https://www.instagram.com/atypica_d">instagram</a>
            </div>
            {!mobileMenuOpen && (
                <div>bayonne, fr</div>
            )}
        </>
    )

    return (
        <header className="header">
            <nav className="header--nav">
                {renderNavItems()}
            </nav>
            <div className="header--mobile-nav">
                <button onClick={toggleMobileMenu} className="mobile-menu-button">
                    {mobileMenuOpen ? 'Fermer' : 'Menu'}
                </button>
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef} style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                    {renderNavItems()}
                    <button onClick={() => setMobileMenuOpen(false)} className="close-menu-button">
                        <img src={cross} alt="croix de fermeture"/>
                    </button>
                </div>
            </div>
            {children}
            <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
        </header>
    )
}

export default Header
