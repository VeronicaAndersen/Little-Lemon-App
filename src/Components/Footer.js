import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Link to="/"><img src={'/Images/Logo.jpg'} alt='images' width={"300px"}></img></Link>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/reservations">RESERVATIONS</Link></li>
                <li><Link to="/orderOnline">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>

            <ul>
                <li>Little Lemon</li>
                <li>155 North Michigan Avenue, Chicago, Illinois 60601, United States</li>
                <li>773-673-8362</li>
                <li>little@lemon.com</li>
            </ul>

            <ul>
                <li><Link to="/menu">Fake link</Link></li>
                <li><Link to="/menu">Fake link</Link></li>
            </ul>
        </footer>
    )
}
