import React, { useState } from "react";
import { vehicle } from "../../data/vehicle";
import "../../styles/globals.css";
// import img1 from "../../assets/images/car/img2.jpeg"

const VehicleGallery: React.FC = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    if (!vehicle.gallery || vehicle.gallery.length === 0) return null;

    return (
        <section className="vehicle-gallery">
            <div className="gallery-header">
                <h2>The Vehicle</h2>
                <p>Every detail refined for executive comfort</p>
            </div>

            <div className="gallery-grid">
                {vehicle.gallery.map((img, index) => (
                    <button
                        key={index}
                        className="gallery-item"
                        onClick={() => setActiveImage(img)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        <img src={img} alt={`Vehicle view ${index + 1}`} />

                    </button>
                ))}
            </div>

            {activeImage && (
                <div className="gallery-modal" onClick={() => setActiveImage(null)}>
                    <img src={activeImage} alt="Vehicle full view" />
                </div>
            )}
        </section>
    );
};

export default VehicleGallery;
