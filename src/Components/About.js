import React from 'react';
import "./Styling/About.css";

export default function About() {
    return (
        <article className='about'>
            <section className='text-section'>
                <h1 className='display-title'>Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu elementum, consequat magna vel, pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non libero eros.</p>
            </section>
            <section className='image-section'>
                <img src='./Images/Bread.jpg' alt='Little Lemon' className='about-image' />
            </section>
        </article>
    );
}
