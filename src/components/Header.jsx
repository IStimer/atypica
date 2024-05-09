import React from 'react';

export default function Header({ children }) {
    return (
        <header className="header">
            <nav className="header--nav">
                <div>
                    atypica
                </div>
                <div>
                    digital studio
                </div>
                <div className="header--nav__col flex">
                    <a href="/studio">studio</a>
                    <a href="/contact">contact</a>
                </div>
                <div className="header--nav__col flex">
                    <a href="https://twitter.com">twitter</a>
                    <a href="https://instagram.com">instagram</a>
                </div>
                <div>bayonne, fr</div>
            </nav>
                {children}
        </header>
    );
}
