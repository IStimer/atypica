import React from 'react'
import sideLogo from '../assets/svgs/side-logo-atypica.svg'

export default function Footer({ children }) {
    return (
        <footer className="footer flex">
            <div className="main-side">
            <img className="footer__logo" src={ sideLogo } alt="logo Atypica footer"/>
            </div>
            <div className="footer__nav">
                <div className="flex footer__col">
                    <a className="footer__item" href="/studio">studio</a>
                    <a className="footer__item" href="/contact">contact</a>
                </div>
                <div className="flex footer__col">
                    <a className="footer__item" href="https://twitter.com">twitter</a>
                    <a className="footer__item" href="https://instagram.com">instagram</a>
                </div>
            </div>
            {children}
        </footer>
    )
}
