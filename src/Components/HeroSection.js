import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Styling/HeroSection.css"

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <article className='hero'>
            <section className="hero-content">
                <h1 className='display-title'>Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <p className='lead-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu elementum, consequat magna vel, pulvinar neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non libero eros.
                </p>
                <button onClick={() => navigate("/reservations")}>Reserve a table</button>
            </section>
            <section className="hero-image">
                <img src='./Images/Bread.jpg' alt='Little Lemon' />
            </section>
        </article>
    );
}
