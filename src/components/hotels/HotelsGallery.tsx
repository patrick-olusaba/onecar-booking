import React, { useState } from "react";
import { hotels } from "../../data/hotels";

interface HotelsGalleryProps {
    onSelectHotel: (hotelName: string) => void;
}

const HotelsGallery: React.FC<HotelsGalleryProps> = ({ onSelectHotel }) => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <section className="hotels-showcase">
            <div className="hotels-header">
                <h2>Partner Hotels</h2>
                <p>Luxury destinations we serve across Kenya</p>
            </div>

            <div className="hotels-grid">
                {hotels.map((hotel, index) => (
                    <button
                        key={hotel.id}
                        className="hotel-card"
                        style={{ animationDelay: `${index * 0.12}s` }}
                        onClick={() => {
                            onSelectHotel(hotel.name);
                            setActiveImage(hotel.image);
                        }}
                    >
                        <img src={hotel.image} alt={hotel.name} />

                        <div className="hotel-meta">
                            <span className="hotel-name">{hotel.name}</span>
                            <span className="hotel-location">{hotel.location}</span>
                        </div>
                    </button>
                ))}
            </div>

            {activeImage && (
                <div className="hotel-modal" onClick={() => setActiveImage(null)}>
                    <img src={activeImage} alt="Hotel view" />
                </div>
            )}
        </section>
    );
};

export default HotelsGallery;
