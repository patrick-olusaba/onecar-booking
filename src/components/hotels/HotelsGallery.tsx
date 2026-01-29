import { Link } from "react-router-dom";
import { hotels } from "../../data/hotels";
import React from "react";

interface HotelsGalleryProps {
    onSelectHotel: (hotelName: string) => void;
}

const HotelsGallery: React.FC<HotelsGalleryProps> = ({ onSelectHotel }) => {
    return (
        <section className="hotels-showcase">
            <div className="hotels-header">
                <h2>Partner Hotels</h2>
                <p>Luxury destinations we serve</p>
            </div>

            <div className="hotels-grid">
                {hotels.slice(0, 3).map((hotel) => (
                    <Link
                        key={hotel.id}
                        to={`/hotels/${hotel.slug}`}
                        className="hotel-card"
                        onClick={() => onSelectHotel(hotel.name)}
                    >
                        <img src={hotel.image} alt={hotel.name} />

                        <div className="hotel-meta">
                            <span className="hotel-name">{hotel.name}</span>
                            <span className="hotel-location">{hotel.location}</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="hotels-viewmore">
                <Link to="/hotels">
                    View All Hotels <span className="arrow">→</span>
                </Link>
            </div>
        </section>
    );
};

export default HotelsGallery;
