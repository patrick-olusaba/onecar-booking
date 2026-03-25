import React from "react";
import { useNavigate } from "react-router-dom";

const CtaBanner: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="cta-banner">
            <div className="cta-banner-inner">
                <span className="cta-eyebrow">Ready to Ride?</span>
                <h2>Book Your Transfer in Under 2 Minutes</h2>
                <p>Fixed pricing. Chauffeur-driven. Available 24/7.</p>
                <div className="cta-banner-actions">
                    <button className="cta-banner-btn primary" onClick={() => navigate("/booking")}>
                        Book Now
                    </button>
                    <a
                        href="https://wa.me/254700000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-banner-btn secondary"
                    >
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
