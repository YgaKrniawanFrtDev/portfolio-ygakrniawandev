import { useState } from "react";
import "../styles/ProjectCard.css"
function ProjectCard({ image, textHeader, desc }) {
    const [showModal, setShowModal] = useState(false);

    // Handler klik span
    const handleClick = () => {
        setShowModal(true);
    };
    return (
        <>
            <div class="card-project">
                <div class="card-image">
                    <img src={image} alt="" />
                </div>
                <p class="card-title">{textHeader}</p>
                <p class="card-body">
                    {desc}
                </p>
                <p class="footer">©2025 <span class="by-name">Yoga Kurniawan</span></p>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="custom-modal">
                    <div className="custom-modal-content">
                        <p className="modal-text">Fitur tersebut akan ada di dalam web versi update⚡</p>
                        <button
                            className="btn-gradient mt-3 ms-end"
                            onClick={() => setShowModal(false)}>
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard