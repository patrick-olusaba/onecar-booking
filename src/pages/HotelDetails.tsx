import { useParams, Link } from "react-router-dom";
import { hotels } from "../data/hotels";
import "./hotels.css";

const HotelDetails = () => {
    const { slug } = useParams();
    const hotel = hotels.find(h => h.slug === slug);

    if (!hotel) return <p>Hotel not found</p>;

    return (
        <section className="hotel-details-page">

            {/* HERO */}
            <div
                className="hotel-hero"
                style={{ backgroundImage: `url(${hotel.image})` }}
            >
                <div className="hotel-hero-overlay">
                    <span className="hotel-hero-location">
                        {hotel.location}
                    </span>

                    <h1>{hotel.name}</h1>

                    <p className="hotel-hero-desc">
                        {hotel.description}
                    </p>

                    <Link to="/booking" className="hotel-hero-cta">
                        Book Transfer
                    </Link>
                </div>
            </div>

            {/* CONTENT */}
            <div className="hotel-details-content">

                <h2>Available Chauffeur Services</h2>

                <div className="hotel-services-grid">
                    {hotel.services.map((service, i) => (
                        <div key={i} className="hotel-service-card">
                            {service}
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default HotelDetails;
