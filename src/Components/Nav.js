import React, { useState } from 'react';
import './Styling/Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <img src={'/Images/Logo.jpg'} alt='logo' width={100} />
                </Link>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/reservations">RESERVATIONS</Link></li>
                <li><Link to="/orderOnline">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}
