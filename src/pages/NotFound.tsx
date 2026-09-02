import { Link } from "react-router-dom";

const NotFound = () => (
    <section className="contact-hero">
        <div className="contact-hero-content animate-fade">
            <span className="contact-eyebrow">404</span>
            <h1>This page took a wrong turn</h1>
            <p>The page you were looking for doesn't exist or has moved.</p>
            <Link to="/" className="cta-banner-btn primary">
                Back to Home
            </Link>
        </div>
    </section>
);

export default NotFound;
