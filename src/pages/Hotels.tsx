import { Link } from "react-router-dom";
import { hotels } from "../data/hotels";
import "./hotels.css";

const Hotels = () => {
    return (
        <section className="hotels-page">

            {/* Page Header */}
            <div className="hotels-page-header">
                <span className="hotels-eyebrow">Partner Collection</span>
                <h1>Our Partner Hotels</h1>
                <p>Luxury destinations we proudly serve across Kenya</p>
            </div>

            {/* Grid */}
            <div className="hotels-grid">
                {hotels.map((hotel) => (
                    <Link
                        key={hotel.id}
                        to={`/hotels/${hotel.slug}`}
                        className="hotel-card"
                    >
                        {/* Image */}
                        <div className="hotel-image-wrap">
                            <img src={hotel.image} alt={hotel.name} />
                        </div>

                        {/* Overlay */}
                        <div className="hotel-meta">

                            <span className="hotel-location">
                                {hotel.location}
                            </span>

                            <h3 className="hotel-name">
                                {hotel.name}
                            </h3>

                            <p className="hotel-description">
                                {hotel.description}
                            </p>

                            <span className="hotel-view">
                                View Hotel →
                            </span>

                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default Hotels;
