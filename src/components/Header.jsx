import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from '../utils/NavigationContext';
import ContactModal from './ContactModal';

export default function Header({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { navigate: customNavigate } = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleNavigation = (path) => {
        if (location.pathname !== path) {
            customNavigate(path, navigate);
        }
    };

    return (
        <header className="header">
            <nav className="header--nav">
                <div>
                    <a
                        href="#!"
                        onClick={() => handleNavigation('/')}
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        atypica
                    </a>
                </div>
                <div>
                    digital studio
                </div>
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
                <div>bayonne, fr</div>
            </nav>
            {children}
            <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </header>
    );
}
