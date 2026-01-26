import { vehicle } from "../../data/vehicle";
import VehicleSpecs from "./VehicleSpecs";
import { Link } from "react-router-dom";
import Lightbox from "../common/Lightbox";
import {useState} from "react";

const VehicleDetails = () => {

    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <section className="vehicle-details-page">

            {/* HERO */}
            <div
                className="vehicle-hero"
                style={{ backgroundImage: `url(${vehicle.image})` }}
            >
                <div className="vehicle-hero-overlay">
                    <h1>{vehicle.name}</h1>
                    <p>{vehicle.category}</p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="vehicle-details-content">

                {/* ABOUT */}
                <div className="vehicle-description">
                    <h2>About The Vehicle</h2>
                    <p>
                        The Mercedes-Benz A-Class delivers refined comfort,
                        smooth performance and discreet luxury — ideal for
                        executive transfers and premium chauffeur services.
                    </p>
                </div>

                {/* SPECS */}
                <VehicleSpecs
                    seats={vehicle.seats}
                    luggage={vehicle.luggage}
                    transmission={vehicle.transmission}
                    fuel={vehicle.fuel}
                />

                {/* FEATURED SECTIONS */}
                <div className="vehicle-features-grid">
                    {vehicle.features.map((feature, index) => (
                        <div key={index} className="vehicle-feature-card">
                            <div className="vehicle-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>

                            <div className="vehicle-feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="vehicle-cta">
                    <Link to="/booking" className="vehicle-book-btn">
                        Book This Vehicle
                    </Link>
                </div>

            </div>

            {/* Lightbox */}
            {activeImage && (
                <Lightbox
                    image={activeImage}
                    onClose={() => setActiveImage(null)}
                />
            )}

        </section>
    );
};

export default VehicleDetails;
