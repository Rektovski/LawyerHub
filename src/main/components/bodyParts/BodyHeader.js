import '../../design/bodyHeader.css';
import React from 'react';

export default function BodyHeader() {
    const cards = [
        { title: "Membership", desc: "Join our elite community of tech-forward legal professionals." },
        { title: "Co-Working", desc: "Premium suites designed for collaboration and focus." }
    ];

    return (
        <div className="container header-cards-grid">
            {cards.map((card, i) => (
                <div key={i} className="glass-card">
                    <div className="glass-card-content">
                        <span className="card-number">0{i+1}</span>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                        <button className="card-link">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}