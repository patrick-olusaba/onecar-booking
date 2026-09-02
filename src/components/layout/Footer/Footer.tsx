import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    whatsappLink as buildWhatsappLink,
    mailtoLink,
    PHONE_DISPLAY,
} from "../../../config";

const Footer: React.FC = () => {
    const [subscriber, setSubscriber] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    // ponytail: no mailing-list provider wired up, so this hands the address to
    // the inbox instead of pretending to subscribe. Swap for the ESP's API later.
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = mailtoLink(
            "Newsletter signup",
            `Please add ${subscriber} to the Luxe Transfers newsletter.`
        );
        setSubscribed(true);
        setSubscriber("");
    };


    const whatsappLink = buildWhatsappLink("Hello Luxe Transfers, I would like to make a booking.");

    return (
        <footer className="lux-footer">
            <div className="lux-footer-inner">

                {/* Brand Column */}
                <div className="lux-footer-brand">
                    <div className="lux-footer-logo">
                        LUXE<span>Transfers</span>
                    </div>

                    <p className="lux-footer-tagline">
                        Executive Chauffeur Service · Nairobi
                    </p>

                    <p className="lux-footer-address">
                        Westlands, Nairobi, Kenya
                    </p>

                    {/* Phone -> Opens WhatsApp */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="lux-footer-phone"
                    >
                        {PHONE_DISPLAY}
                    </a>

                    {/* Social Links */}
                    <div className="lux-footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>

                        <a href={whatsappLink} target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>

                        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="lux-footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/vehicle">Vehicle</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Newsletter */}
                <div className="lux-footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Subscribe for luxury travel insights & offers</p>

                    <form
                        className="lux-newsletter-form"
                        onSubmit={handleSubscribe}
                    >
                        <label className="sr-only" htmlFor="newsletter-email">
                            Your email address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Your email address"
                            value={subscriber}
                            onChange={(e) => setSubscriber(e.target.value)}
                            required
                        />
                        <button type="submit">
                            Subscribe
                        </button>
                    </form>

                    {subscribed && (
                        <p className="lux-newsletter-note" role="status">
                            Check your mail app to confirm — we'll add you by hand.
                        </p>
                    )}
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="lux-footer-bottom">
                <span>© {new Date().getFullYear()} Luxe Transfers</span>
                <span>Private bookings only</span>
            </div>
        </footer>
    );
};

export default Footer;
