import React from 'react';
import sideLogo from '../assets/svgs/side-logo-atypica.svg';

export default function Footer({ children }) {
    return (
        <footer className="footer">
            <img className="footer__logo" src={ sideLogo } alt="logo Atypica footer"/>
                <div>
                    <a href="/studio">studio</a>
                    <a href="/contact">contact</a>
                </div>
                <div>
                    <a href="https://twitter.com">twitter</a>
                    <a href="https://instagram.com">instagram</a>
                </div>
            {children}
        </footer>
    );
}
