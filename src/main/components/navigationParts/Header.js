import React from 'react';
import '../../design/header.css';

export default function Header() {
    return (
        <header className="hero-container">
            {/* 1. The Background Image Layer */}
            <div className="hero-background">
                {/* 2. Moving Blurry Orbs (Inside background for depth) */}
                <div className="ambient-blob blob-gold-top"></div>
                <div className="ambient-blob blob-gold-bottom"></div>
            </div>

            {/* 3. The Protection Layer (Gradient overlays) */}
            <div className="hero-overlay"></div>

            {/* 4. The Content Layer */}
            <div className="container hero-content">
                <div className="hero-text-stack">
                    <span className="hero-establishment">ESTABLISHED 1998</span>

                    <h1 className="hero-main-title">
                        Justice in Every <br />
                        <span className="gold-text">Detail.</span>
                    </h1>

                    <p className="hero-description">
                        Providing world-class legal solutions for corporate and personal
                        litigation with a focus on integrity and results.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-consult">
                            Consult Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}