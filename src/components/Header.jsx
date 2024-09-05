import React, {useState, useRef} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useNavigation} from '../utils/NavigationContext';
import ContactModal from './ContactModal';
import useOutsideClick from '../hooks/useOutsideClick';

const Header = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {navigate: customNavigate} = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();
    const mobileMenuRef = useRef(null);
    useOutsideClick(mobileMenuRef, () => setMobileMenuOpen(false));

    const openModal = () => {
        setModalIsOpen(true);
        setMobileMenuOpen(false);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleNavigation = (path) => {
        if (location.pathname !== path) {
            customNavigate(path, navigate);
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

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
                <a href="https://twitter.com">twitter</a>
                <a href="https://instagram.com">instagram</a>
            </div>
            {!mobileMenuOpen && (
                <div>bayonne, fr</div>
            )}
        </>
    );

    return (
        <header className="header">
            <nav className="header--nav">
                {renderNavItems()}
            </nav>
            <div className="header--mobile-nav">
                <button onClick={toggleMobileMenu} className="mobile-menu-button">
                    {mobileMenuOpen ? 'Fermer' : 'Menu'}
                </button>
                {mobileMenuOpen && (
                    <div className="mobile-menu" ref={mobileMenuRef}>
                        {renderNavItems()}
                        <button onClick={() => setMobileMenuOpen(false)} className="close-menu-button">Fermer</button>
                    </div>
                )}
            </div>
            {children}
            <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
        </header>
    );
}

export default Header