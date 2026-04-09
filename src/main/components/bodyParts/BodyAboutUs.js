import React from 'react';
import "../../design/bodyAboutUs.css";
import bodyAboutUsImage from "../../assets/body/bodyAboutUs/bodyAboutUsImage.png";

export default function BodyAboutUs() {
    return (
        <section className="about-editorial-section">
            <div className="light-engine">
                <div className="light-orb gold-main"></div>
                <div className="light-orb white-soft"></div>
                <div className="light-orb gold-secondary"></div>
                <div className="light-orb accent-flare"></div>
            </div>

            <div className="container about-editorial-grid">
                <div className="editorial-text">
                    <div className="accent-tag">EST. 1998 — NAIROBI</div>
                    <h2 className="editorial-title">
                        A Nexus of <br/>
                        <span className="serif-italic">Law & Innovation</span>
                    </h2>
                    <div className="minimal-divider"></div>
                    <p className="editorial-paragraph">
                        The Lawyers Hub exists to provide a bridge between legal systems and
                        frontier technology. We leverage innovation to redefine justice
                        and the business of law across Africa.
                    </p>
                    <div className="editorial-footer">
                        <div className="sig-wrapper">
                            <span className="sig-text">Linda Bonyo</span>
                            <span className="sig-sub">FOUNDER & CEO</span>
                        </div>
                    </div>
                </div>

                <div className="editorial-visual">
                    <div className="image-stage">
                        <div className="glass-backdrop"></div>
                        <img src={bodyAboutUsImage} alt="Founder" className="editorial-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}