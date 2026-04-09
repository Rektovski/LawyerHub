import '../../design/bodyPartners.css';
import React from 'react';
import ibm from "../../assets/body/bodyPartner/ibm.png"
import kenya from "../../assets/body/bodyPartner/kenya.png"
import morga from "../../assets/body/bodyPartner/morga.png"
import ntweek from "../../assets/body/bodyPartner/ntweek.png"

export default function BodyPartners() {
    return (
        <div className="container">
            <h4 className="partners-label">TRUSTED BY INDUSTRY LEADERS</h4>
            <div className="partners-flex">
                {/* Replace src with your actual partner images */}
                <img src={ibm} alt="Partner" className="partner-logo" />
                <img src={kenya} alt="Partner" className="partner-logo" />
                <img src={morga} alt="Partner" className="partner-logo" />
                <img src={ntweek} alt="Partner" className="partner-logo" />
            </div>
        </div>
    );
}