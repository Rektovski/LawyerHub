import '../design/navigation.css';
import React, { useState, useEffect } from 'react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="nav-logo">
                    LAWYER<span>HUB</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#team">The Firm</a></li>
                    <li><a href="#practices">Practice Areas</a></li>
                    <li><a href="#blog">Insights</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button className="nav-cta">
                    MEMBERSHIP
                </button>

                {/* Hamburger */}
                <div
                    className={`nav-burger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                <a href="#home" onClick={handleLinkClick}>Home</a>
                <a href="#team" onClick={handleLinkClick}>The Firm</a>
                <a href="#practices" onClick={handleLinkClick}>Practice Areas</a>
                <a href="#blog" onClick={handleLinkClick}>Insights</a>
                <a href="#contact" onClick={handleLinkClick}>Contact</a>

                <button className="nav-cta mobile-cta">
                    MEMBERSHIP
                </button>
            </div>
        </nav>
    );
}