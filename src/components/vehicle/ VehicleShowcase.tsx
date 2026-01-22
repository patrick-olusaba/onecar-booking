import React from "react";
import { Users, Luggage, Star } from "lucide-react";
import { vehicle } from "../../data/vehicle";
import img2 from "../../assets/images/car/hero.jpeg"

const VehicleShowcase: React.FC = () => {
    return (
        <section className="vehicle-showcase">
            <img src={img2} className="vehicle-image" />

            <div className="vehicle-details">
                <h2>{vehicle.name}</h2>
                <p>{vehicle.category}</p>

                <div className="vehicle-specs">
                    <span><Users size={16} /> {vehicle.seats} Seats</span>
                    <span><Luggage size={16} /> {vehicle.luggage} Bags</span>
                    <span><Star size={16} /> {vehicle.rating}.0 Rating</span>
                </div>
            </div>
        </section>
    );
};

export default VehicleShowcase;
