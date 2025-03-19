import React from 'react';
import { Link } from "react-router-dom";
import "./Styling/Footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Link to="/"><img src={'/Images/Logo.jpg'} alt='logo' width="200px" /></Link>
            </div>

            <div className="footer-links">
                <ul className="footer-nav">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/reservations">RESERVATIONS</Link></li>
                    <li><Link to="/orderOnline">ORDER ONLINE</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </ul>

                <ul className="footer-contact">
                    <li>Little Lemon</li>
                    <li>155 North Michigan Avenue, Chicago, Illinois 60601, United States</li>
                    <li>773-673-8362</li>
                    <li>little@lemon.com</li>
                </ul>

                <ul className="footer-fake-links">
                    <li><Link to="/menu">Fake link</Link></li>
                    <li><Link to="/menu">Fake link</Link></li>
                </ul>
            </div>
        </footer>
    )
}