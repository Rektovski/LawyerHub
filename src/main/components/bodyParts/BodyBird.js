import '../../design/bodyBird.css';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Minimalist check icon

export default function BodyBird() {
    const points = [
        "Start Up Incubation",
        "Co-Innovation Space for Lawyers",
        "Strategic Mentorship",
        "Policy Support for Innovators",
        "Legal Tech Integration"
    ];

    return (
        <div className="container bird-content">
            <div className="bird-text-side">
                <h2 className="bird-heading">The Nexus of Tech & Law</h2>
                <p className="bird-sub">Advancing the legal frontier through innovation.</p>
            </div>
            <div className="bird-grid">
                {points.map((text, i) => (
                    <div key={i} className="bird-item">
                        <FiCheckCircle className="bird-icon" />
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}