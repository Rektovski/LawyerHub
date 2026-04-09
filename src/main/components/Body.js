import '../design/body.css';
import React from 'react';
import BodyHeader from "./bodyParts/BodyHeader";
import BodyAboutUs from "./bodyParts/BodyAboutUs";
import BodyBird from "./bodyParts/BodyBird";
import BodyLatestBlogs from "./bodyParts/BodyLatestBlogs";
import BodyPartners from "./bodyParts/BodyPartners";

export default function Body() {
    return (
        <main className="main-body-wrapper">
            {/* The "Impact" grid overlaps the Hero slightly */}
            <section className="section-overlap">
                <BodyHeader/>
            </section>

            <section className="section-padding">
                <BodyAboutUs/>
            </section>

            <section className="section-dark-alt">
                <BodyBird/>
            </section>

            <section className="section-padding">
                <BodyLatestBlogs/>
            </section>

            <section className="section-partners">
                <BodyPartners/>
            </section>
        </main>
    )
}