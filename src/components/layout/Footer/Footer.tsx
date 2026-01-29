import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
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

                    <p className="lux-footer-phone">
                        +254 700 000 000
                    </p>

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

                        <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
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

                    <form className="lux-newsletter-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            required
                        />
                        <button type="submit">
                            Subscribe
                        </button>
                    </form>
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
