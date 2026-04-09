import '../../design/bodyLatestBlogs.css';
import React from 'react';
import image1 from "../../assets/body/bodyList/1.jpg"
import image2 from "../../assets/body/bodyList/2.jpg"
import image3 from "../../assets/body/bodyList/3.jpg"

export default function BodyLatestBlogs() {
    const images = [image1, image2, image3];

    return (
        <div className="container">
            <div className="blog-header">
                <span className="gold-tag">INSIGHTS</span>
                <h2 className="section-title">Latest LawTech Blogs</h2>
            </div>

            <div className="blog-grid-modern">
                {/* Map your blogList here */}
                {[1, 2, 3].map((item, id) => (
                    <article key={id} className="blog-card-modern">
                        <div className="blog-img-wrap">
                            <img src={images[id]} alt="blog" />
                        </div>
                        <div className="blog-info">
                            <span className="blog-date">APRIL 09, 2026</span>
                            <h3>The Future of Digital Litigation</h3>
                            <button className="blog-read-btn">Read Article</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}