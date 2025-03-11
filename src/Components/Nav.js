import React from 'react'
import '../App.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <img src={'/Images/Logo.jpg'} alt='logo' width={100}></img>
                <li><a href='TEST'>HOME</a></li>
                <li><a href='TEST'>ABOUT</a></li>
                <li><a href='TEST'>MENU</a></li>
                <li><a href='TEST'>RESERVATIONS</a></li>
                <li><a href='TEST'>ORDER ONLINE</a></li>
                <li><a href='TEST'>LOGIN</a></li>
            </ul>
        </nav>
    )
}
