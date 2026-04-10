import "../design/footer.css";
import React, { useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        alert("Thank you for subscribing.");
    };

    return (
        <footer className="footer-wrapper">
            <div className="container footer-content">
                <div className="footer-brand-column">
                    <div className="footer-logo">
                        LAWYER<span>HUB</span>
                    </div>
                    <p className="footer-tagline">
                        Leading the nexus of Law and Technology across the continent.
                        Excellence in every detail.
                    </p>
                    <div className="footer-socials">
                        <FiFacebook className="social-icon" />
                        <FiTwitter className="social-icon" />
                        <FiLinkedin className="social-icon" />
                        <FiInstagram className="social-icon" />
                    </div>
                </div>

                <div className="footer-info-grid">
                    <div className="footer-column">
                        <h4 className="footer-label">Address</h4>
                        <p>Bishop Road First Ngong Ave</p>
                        <p>Nairobi, Kenya</p>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-label">Contact</h4>
                        <p>info@lawyershub.ke</p>
                        <p>+254 784 840 228</p>
                    </div>

                    <div className="footer-column newsletter-col">
                        <h4 className="footer-label">Newsletter</h4>
                        <form className="footer-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-container">
                    <div className="footer-legal-links">
                        <span>&copy; {new Date().getFullYear()} LAWYERHUB. ALL RIGHTS RESERVED.</span>
                    </div>

                    <div className="developer-credit">
                        <a
                            href="https://otarmurmanishvili.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="dev-link"
                        >
                            DESIGNED & DEVELOPED BY OTAR MURMANISHVILI
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}