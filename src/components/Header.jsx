import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Header({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const location = useLocation();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleLinkClick = (event, path) => {
        if (location.pathname === path) {
            event.preventDefault(); // Prevents animation if the link is already the current page
        }
    };

    return (
        <header className="header">
            <nav className="header--nav">
                <div>
                    <Link to="/" onClick={(event) => handleLinkClick(event, '/')}>
                        atypica
                    </Link>
                </div>
                <div>
                    digital studio
                </div>
                <div className="header--nav__col flex">
                    <Link to="/studio" onClick={(event) => handleLinkClick(event, '/studio')}>
                        <span className={location.pathname === '/studio' ? 'active-link' : ''}>studio</span>
                    </Link>
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
