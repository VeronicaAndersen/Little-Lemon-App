import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'
import HeroSection from './HeroSection'

export default function HomePage() {
    return (
        <>
            <main>
                <HeroSection />
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    )
}
