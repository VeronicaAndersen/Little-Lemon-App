import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
            <Link to="/"><img src={'/Images/Logo.jpg'} alt='logo' width={100}></img></Link>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/reservations">RESERVATIONS</Link></li>
                <li><Link to="/orderOnline">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    )
}
