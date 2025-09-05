import '../styles/SKillCard.css'
function Skillcard({title, icon, desc}) {
    return (
        <>
            <article className="skill-card">
                <section className="skill-hero">
                    <header className="skill-hero-header">
                        <div className="skill-job-icon">
                            <h3> {icon} </h3>
                        </div>
                        <div className="skill-icon">
                            <svg
                                height="20"
                                width="20"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </div>
                    </header>
                    <p className="skill-job-title"> {title} </p>
                </section>

                <footer className="skill-footer">
                    <div className="skill-job-summary">
                        <div className="skill-job mx-auto"> <p className='text-dark text-center mx-auto d-flex justify-content-center'>{desc}</p> </div>
                    </div>
                </footer>
            </article>
        </>
    )
}

export default Skillcard
