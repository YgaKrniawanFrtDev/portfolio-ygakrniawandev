import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="custom-navbar shadow-lg rounded-pill mx-auto mt-3 px-4 py-2">
            <div className="d-flex align-items-center justify-content-center gap-4">
                <a className="nav-link active text-light fw-semibold" href="#">Home</a>
                <a className="nav-link text-light fw-semibold" href="#">About Me</a>
                <a className="nav-link text-light fw-semibold" href="#">Project</a>
                <a className="nav-link text-light fw-semibold">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;
