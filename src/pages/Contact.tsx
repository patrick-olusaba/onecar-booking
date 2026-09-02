import { useState } from "react";
import {
    CONTACT_EMAIL,
    PHONE_DISPLAY,
    PHONE_NUMBER,
    whatsappLink,
} from "../config";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    // ponytail: no backend on this site, so the form hands off to WhatsApp
    // like every other CTA. Swap for a POST when there is somewhere to post to.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const enquiry = `Hello Luxe Transfers,

Name: ${name}
Email: ${email}

${message}`;

        const opened = window.open(whatsappLink(enquiry), "_blank", "noreferrer");
        if (!opened) return; // popup blocked -- do not claim it was sent

        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 6000);
    };

    return (
        <>
            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-content animate-fade">
                    <span className="contact-eyebrow">Get in Touch</span>
                    <h1>Contact Luxe Transfers</h1>
                    <p>
                        Executive chauffeur services tailored to your journey.
                    </p>
                </div>
            </section>

            {/* BODY */}
            <section className="contact-page">
                <div className="contact-container">
                    {/* LEFT */}
                    <div className="contact-info animate-slide">
                        <span className="contact-eyebrow">Contact Us</span>
                        <h2>Let’s Arrange Your Chauffeur</h2>

                        <p>
                            Airport transfers, business travel or private
                            engagements — our team is ready.
                        </p>

                        <div className="contact-details">
                            <div>
                                <span>Email</span>
                                <a href={`mailto:${CONTACT_EMAIL}`}>
                                    {CONTACT_EMAIL}
                                </a>
                            </div>

                            <div>
                                <span>Phone</span>
                                <a href={`tel:${PHONE_NUMBER}`}>
                                    {PHONE_DISPLAY}
                                </a>
                            </div>

                            <div>
                                <span>Location</span>
                                <p>Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <form
                        className="contact-form animate-slide delay-1"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">
                            Send via WhatsApp
                        </button>

                        {sent && (
                            <div className="form-success animate-success" role="status">
                                ✓ Opened in WhatsApp — press send there to reach us
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
