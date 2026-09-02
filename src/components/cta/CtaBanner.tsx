import React from "react";
import { useNavigate } from "react-router-dom";
import { whatsappLink } from "../../config";

const CtaBanner: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="cta-banner">
            <div className="cta-banner-inner">
                <span className="cta-eyebrow">Booking</span>
                <h2>Tell us the flight. We handle the rest.</h2>
                <p>Pick your route, see the fare, confirm on WhatsApp. No account, no deposit.</p>
                <div className="cta-banner-actions">
                    <button className="cta-banner-btn primary" onClick={() => navigate("/booking")}>
                        Price a transfer
                    </button>
                    <a
                        href={whatsappLink("Hello Luxe Transfers, I would like to make a booking.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-banner-btn secondary"
                    >
                        Message us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
