
import { useRef } from "react"
import Navbar from "../components/Navbar"
import ImageProfile from "../components/ImageProfile"
import TextHero from "../components/TextHero"
import TextScroll from '../components/TextScroll'
import Card from "../components/Card"
import { DataCard } from "../data/CardData"
import ImageAbout from "../components/imageAbout"
import TextAbout from "../components/TextAbout"
import ButtonScroll from "../components/ButtonScroll"
import EducationCard from "../components/EducationCard"
import { EducationData } from "../data/EducationData"

function Home() {
    const containerRef = useRef(null);
    return (
        <>
            <section className="navbar">
                <Navbar />
            </section>
            <section className="hero-section">
                <div className="hero-content d-flex gap-2">
                    <div className="image mt-5 ">
                        <ImageProfile />
                    </div>
                    <div className="hero-text mt-5 p-2">
                        <TextHero />
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="about-content">
                    <TextScroll
                        texts={['FrontEnd Developer', 'Ui UX Design']}
                        velocity={100}
                        className="Text-scroll"
                    />
                </div>
                <div className="card-about p-5 d-flex mx-auto gap-3 justify-content-center">
                    {DataCard.map((item) => (
                        <Card key={item.id} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </section>
            <section className="about-text-content">
                <div className="about-me">
                    <div className="about-me-content d-flex gap-3 justify-content-around mt-5">
                        <div className="about-me-text p-5">
                            <TextAbout />
                            <span>
                                <ButtonScroll />
                            </span>
                        </div>
                        <div className="about ` -me-image p-5">
                            <ImageAbout />
                        </div>
                    </div>
                </div>
            </section>
            <section className="education-section">
                <div className="education-content p-5">
                    <h3 className='text-light edu ms-3'>Pendidikan.</h3>
                    <hr className="text-light hr"/>
                    <div className="education-item d-flex gap-1 p-5 mt-5">
                        {EducationData.map((item) => (
                            <EducationCard key={item.id} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home