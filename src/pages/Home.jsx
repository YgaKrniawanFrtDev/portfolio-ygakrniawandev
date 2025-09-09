import { useRef } from "react"
import Navbar from "../components/Navbar"
import ImageProfile from "../components/ImageProfile"
import TextHero from "../components/TextHero"
import TextScroll from "../components/TextScroll"
import Card from "../components/Card"
import { DataCard } from "../data/CardData"
import ImageAbout from "../components/ImageAbout"
import TextAbout from "../components/TextAbout"
import ButtonScroll from "../components/ButtonScroll"
import EducationCard from "../components/EducationCard"
import { EducationData } from "../data/EducationData"
import CardSkills from "../components/CardSkills"
import { DataSkills } from "../data/DataSkills"
import ProjectCard from "../components/ProjectCard"
import { ProjectData } from "../data/ProjectData"
import Footer from "../components/Footer"

function Home() {
    const containerRef = useRef(null);
    return (
        <>f
            {/* Navbar */}
            <section className="navbar">
                <Navbar />
            </section>

            {/* Hero Section */}
            <section className="hero-section" id="hero-section">
                <div className="hero-content">
                    <div className="image" data-aos="zoom-out">
                        <ImageProfile />
                    </div>
                    <div className="hero-text" data-aos="zoom-in">
                        <TextHero />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about-section">
                <TextScroll
                    texts={['FrontEnd Developer', 'Ui UX Design']}
                    velocity={100}
                    className="Text-scroll"
                />
                <div
                    className="card-about"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    {DataCard.map((item) => (
                        <Card key={item.id} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </section>

            {/* About Me Text + Image */}
            <section
                className="about-text-content"
                id="about-text-content"
                data-aos="fade-up"
            >
                <div
                    className="about-me-content"
                    data-aos="zoom-out"
                >
                    <div className="about-me-text">
                        <TextAbout />
                        <ButtonScroll />
                    </div>
                    <div className="about-me-image" data-aos="fade-up">
                        <ImageAbout />
                    </div>
                </div>
            </section>

            {/* Education */}
            <section
                className="education-section"
                id="education-section"
                data-aos="fade-down"
                data-aos-duration="2000"
            >
                <h3 className="edu" data-aos="fade-right">Pendidikan.</h3>
                <hr className="text-light hr" />
                <div
                    className="education-item d-flex justity-content-center flex-wrap"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                >
                    {EducationData.map((item) => (
                        <EducationCard key={item.id} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section
                className="skill-section"
                id="skill-section"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
            >
                <h3 className="skill-text text-center">Skills Experience.</h3>
                <div
                    className="skill-content-card"
                    data-aos="flip-down"
                    data-aos-duration="3000"
                >
                    {DataSkills.map((item) => (
                        <CardSkills
                            key={item.id}
                            icon={item.icon}
                            text={item.text}
                            miniText={item.miniText}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="project-section" id="project-section">
                <h3 className="text-light text-center">Project.</h3>
                <div className="project-card-content">
                    {ProjectData.map((item) => (
                        <ProjectCard
                            key={item.id}
                            image={item.image}
                            textHeader={item.textHeader}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="footer-section">
                <Footer />
            </section>
        </>
    )
}

export default Home
