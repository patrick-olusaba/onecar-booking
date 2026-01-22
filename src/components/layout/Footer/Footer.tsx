import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="lux-footer">
            <div className="lux-footer-inner">
                <div className="lux-footer-brand">
                    <div className="lux-footer-logo">
                        LUXE<span>Transfers</span>
                    </div>
                    <p>Executive Chauffeur Service · Nairobi</p>
                </div>

                <div className="lux-footer-meta">
                    <span>© {new Date().getFullYear()} Luxe Transfers</span>
                    <span>Private bookings only</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
