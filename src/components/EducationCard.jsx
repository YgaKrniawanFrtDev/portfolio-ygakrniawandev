import '../styles/EducationCard.css'
function EducationCard({title, desc}) {
    return (
        <>
            <div class="card-education">
                <div class="container-card bg-yellow-box">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 120 120"
                        height="80"
                        width="80"
                    >
                        <rect
                            stroke-width="2"
                            stroke="url(#paint1_radial_1366_4557)"
                            fill-opacity="0.15"
                            fill="url(#paint0_linear_1366_4557)"
                            rx="24"
                            height="118"
                            width="118"
                            y="1"
                            x="1"
                        ></rect>
                        <path
                            fill="#FFEE24"
                            d="M60 30L20 50L60 70L100 50L60 30ZM60 72L36 60V78C36 83 47 90 60 90C73 90 84 83 84 78V60L60 72Z"
                        />

                        <defs>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                y2="119.817"
                                x2="119.899"
                                y1="-0.102528"
                                x1="-0.0208152"
                                id="paint0_linear_1366_4557"
                            >
                                <stop stop-opacity="0.7" stop-color="#FFE34B"></stop>
                                <stop stop-opacity="0" stop-color="#FFE34B" offset="0.510417"></stop>
                                <stop stop-opacity="0.7" stop-color="#FFE34B" offset="1"></stop>
                            </linearGradient>
                            <radialGradient
                                gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)"
                                gradientUnits="userSpaceOnUse"
                                r="1"
                                cy="0"
                                cx="0"
                                id="paint1_radial_1366_4557"
                            >
                                <stop stop-color="#FFEE24"></stop>
                                <stop stop-opacity="0.2" stop-color="#302A1A" offset="1"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                    <p class="card-title text-light mt-3">{title}</p>
                    {/* <hr className='text-warning' /> */}
                    <p class="card-description">
                        {desc}
                    </p>
                    <hr className='text-warning' />
                </div>
            </div>
        </>
    )
}

export default EducationCard