import React from 'react'

export default function HeroSection() {
    return (
        <article className='hero'>
            <section>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu elementum, consequat magna vel, pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non libero eros.</p>
                <button>Reserve a table</button>
            </section>
            <section>
                <img src='./Images/Bread.jpg' alt='Little Lemon' width={"200px"}/>
            </section>
        </article>
    )
}
