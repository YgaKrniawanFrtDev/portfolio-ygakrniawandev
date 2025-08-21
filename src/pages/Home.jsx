import Navbar from "../components/Navbar"
import SplitText from "../components/SplitText"
import '../styles/SplitText.css'
import ButtonShiny from "../components/ButtonShiny"
import DotGrid from "../components/DotGrid"
import SplashCursor from "../components/SplashCursor"

function Home() {
    const handleAnimationComplete = () => {
        console.log("Mantap")
    }

    return (
        <>
            <Navbar />
            <SplashCursor />
            <section className="hero-section min-vh-100 d-flex align-items-center">
                <div className="text-header text-center w-100">
                    <h5 className="mx-auto mb-2">
                        <SplitText
                            text="Hi, I'Am Yoga Kurniawan A Junior FrontEnd Developer & Ui UX Design"
                            className="text-light split-text"
                            delay={50}
                            duration={5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </h5>
                    <ButtonShiny
                        text="Scroll Down"
                        disabled={false}
                        speed={3}
                        className="btn-shiny btn btn-outline-light text-light rounded-3 mx-auto mt-5"
                    />
                </div>
            </section>
        </>
    )
}

export default Home
