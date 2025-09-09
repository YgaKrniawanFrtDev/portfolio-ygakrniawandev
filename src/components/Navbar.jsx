import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg shadow-lg fixed-top ${scrolled ? "navbar-scrolled" : "bg-body-transparent"
                }`}
        >
            <div className="container">
                <a className="navbar-brand" href="#">Portfolio</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#hero-section">
                                Beranda
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-text-content">
                                Tentang saya
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education-section">
                                Pendidikan
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill-section">
                                Skill
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project-section">
                                Proyek
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Kontak
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
