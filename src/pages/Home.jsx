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
import CardSkills from "../components/CardSkills"
import { DataSkills } from "../data/DataSkills"
import ProjectCard from "../components/ProjectCard"
import { ProjectData } from "../data/ProjectData"
function Home() {
    const containerRef = useRef(null);
    return (
        <>
            <section className="navbar">
                <Navbar />
            </section>
            <section className="hero-section">
                <div className="hero-content d-flex gap-2">
                    <div className="image mt-5" data-aos="zoom-out">
                        <ImageProfile />
                    </div>
                    <div className="hero-text mt-5 p-2" data-aos="zoom-in">
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
                <div className="card-about p-5 d-flex mx-auto gap-3 justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    {DataCard.map((item) => (
                        <Card key={item.id} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </section>
            <section className="about-text-content" data-aos="fade-up">
                <div className="about-me">
                    <div className="about-me-content d-flex gap-3 justify-content-around mt-5" data-aos="zoom-out">
                        <div className="about-me-text p-5">
                            <TextAbout />
                            <span>
                                <ButtonScroll />
                            </span>
                        </div>
                        <div className="about ` -me-image p-5" data-aos="fade-up">
                            <ImageAbout />
                        </div>
                    </div>
                </div>
            </section>
            <section className="education-section" data-aos="fade-down" data-aos-duration="2000">
                <div className="education-content p-5">
                    <h3 className='text-light edu ms-3' data-oas="fade-right">Pendidikan.</h3>
                    <hr className="text-light hr" />
                    <div className="education-item d-flex gap-1 p-5 mt-5" data-aos="zoom-in" data-aos-duration="3000">
                        {EducationData.map((item) => (
                            <EducationCard key={item.id} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="skill-section" data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="skill-section-content p-5 mx-auto">
                    <h3 className="text-dark text-center mx-auto skill-text w-100">
                        Skills Experience.
                    </h3>
                    <div className="skill-content-card d-flex gap-5 mx-auto justify-content-center flex-wrap p-5" data-aos="flip-down" data-aos-duration="3000">
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
                </div>
            </section>
            <section className="project-section">
                <div className="project-content p-5 mx-auto ">
                    <h3 className="text-light text-center mx-auto skill-text w-100">
                        Project.
                    </h3>
                    <div className="project-card-content mt-5 p-5 d-flex flex-wrap gap-4 mx-auto justify-content-center">
                        {ProjectData.map((item) => (
                            <ProjectCard
                                key={item.id}
                                image={item.image}
                                textHeader={item.textHeader}
                                desc={item.desc}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home