import Navbar from "../components/Navbar"
import ImageProfile from "../components/ImageProfile"
import TextHero from "../components/TextHero"


function Home() {
    return (
        <>
            <section className="navbar">
                <Navbar/>
            </section>
            <section className="hero-section">
                <div className="hero-content d-flex">
                    <div className="image mt-5 ">
                        <ImageProfile/>
                    </div>
                    <div className="hero-text mt-5 p-5 me-5">
                        <TextHero/>
                    </div>
                </div>
            </section>
            <section className="about-section">

            </section>
            
        </>
    )
}

export default Home