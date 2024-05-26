import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ children }) {
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
    )
}
