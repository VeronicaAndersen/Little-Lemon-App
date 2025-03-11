import React from 'react'

export default function HeroSection() {
    return (
        <article className='hero'>
            <section>
                <h1 className='display-title'>Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <p className='lead-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu elementum, consequat magna vel, pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non libero eros.</p>
                <button>Reserve a table</button>
            </section>
            <section>
                <img src='./Images/Bread.jpg' alt='Little Lemon' width={"200px"}/>
            </section>
        </article>
    )
}
