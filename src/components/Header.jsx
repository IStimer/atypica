import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Header({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <header className="header">
            <nav className="header--nav">
                <div>
                    <Link to="/">atypica</Link>
                </div>
                <div>
                    digital studio
                </div>
                <div className="header--nav__col flex">
                    <Link to="/studio">studio</Link>
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
