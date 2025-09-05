import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer-section">
            <hr className="hr-full" />
            <h3 className="footer-logo p-2 text-center">Hubungi Saya</h3>
            <hr className="hr-full" />

            <div className="footer-below d-flex mt-3 gap-5 p-4 justify-content-evenly flex-wrap">
                <div className="footer-text-quote">
                    <p className="footer-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dignissimos perferendis soluta magni facere a est officia id 
                        voluptates commodi beatae maiores exercitationem assumenda ex, 
                        vero repellendus vel necessitatibus veniam quo!
                    </p>
                    <hr className="hr-contact" />
                </div>

                <div className="contact">
                    <h3>Kontak</h3>
                    <hr className="hr-mini" />
                    <p>Yogakurniawan@gmail.com</p>
                    <hr className="hr-contact" />
                    <p>+62-838-4708-0510</p>
                    <hr className="hr-contact" />
                    <p>LinkedIn</p>
                    <hr className="hr-contact" />
                </div>

                <div className="sosmed">
                    <h3>Media</h3>
                    <hr className="hr-mini" />
                    <p>Instagram</p>
                    <hr className="hr-contact" />
                    <p>TikTok</p>
                    <hr className="hr-contact" />
                    <p>Github</p>
                    <hr className="hr-contact" />
                </div>

                <div className="sosmed">
                    <h3>Favorit</h3>
                    <hr className="hr-mini" />
                    <p>Laravel</p>
                    <hr className="hr-contact" />
                    <p>MySQL</p>
                    <hr className="hr-contact" />
                    <p>React</p>
                    <hr className="hr-contact" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
