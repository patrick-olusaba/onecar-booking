import { useState } from "react";

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);

        setTimeout(() => {
            setSent(false);
        }, 4000);
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
                                <a href="mailto:bookings@luxetransfers.co.ke">
                                    bookings@luxetransfers.co.ke
                                </a>
                            </div>

                            <div>
                                <span>Phone</span>
                                <a href="tel:+254700000000">
                                    +254 700 000 000
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
                            <label>Name</label>
                            <input type="text" required />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" required />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows={5} required />
                        </div>

                        <button type="submit">
                            Send Message
                        </button>

                        {sent && (
                            <div className="form-success animate-success">
                                ✓ Message sent successfully
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
