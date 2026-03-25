import React from "react";
import { Users, Luggage, Star, Zap, Wind, Shield } from "lucide-react";
import { vehicle } from "../../data/vehicle";
import img2 from "../../assets/images/car/hero.jpeg";

const highlights = [
    { icon: <Zap size={16} />, label: "Automatic Transmission" },
    { icon: <Wind size={16} />, label: "Dual-Zone Climate Control" },
    { icon: <Shield size={16} />, label: "Fully Insured & Licensed" },
];

const VehicleShowcase: React.FC = () => {
    return (
        <section className="vehicle-showcase">
            <div className="vehicle-showcase-image-wrap">
                <img src={img2} className="vehicle-showcase-img" alt={vehicle.name} />
                <div className="vehicle-showcase-badge">
                    <Star size={14} fill="#d4af37" color="#d4af37" />
                    <span>{vehicle.rating} Rating</span>
                </div>
            </div>

            <div className="vehicle-showcase-details">
                <span className="vehicle-showcase-eyebrow">Our Fleet</span>
                <h2>{vehicle.name}</h2>
                <p className="vehicle-showcase-category">{vehicle.category}</p>

                <div className="vehicle-specs">
                    <div className="vehicle-spec-item">
                        <Users size={18} />
                        <span>{vehicle.seats} Passengers</span>
                    </div>
                    <div className="vehicle-spec-item">
                        <Luggage size={18} />
                        <span>{vehicle.luggage} Bags</span>
                    </div>
                </div>

                <ul className="vehicle-highlights">
                    {highlights.map((h, i) => (
                        <li key={i}>
                            <span className="highlight-icon">{h.icon}</span>
                            {h.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default VehicleShowcase;
