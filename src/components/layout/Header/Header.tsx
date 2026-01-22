import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="lux-header">
            <div className="lux-header-inner">
                {/* Logo */}
                <Link to="/" className="lux-logo">
                    LUXE<span>Transfers</span>
                </Link>

                {/* Navigation */}
                <nav className="lux-nav">
                    <Link to="/#vehicle">Vehicle</Link>
                    <Link to="/#booking">Book</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact" className="lux-cta">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
