import React, { useState } from "react";
import { vehicle } from "../../data/vehicle";

const VehicleGallery: React.FC = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    if (!vehicle.gallery?.length) return null;

    return (
        <section className="vehicle-gallery">
            <div className="gallery-header">
                <h2>The Vehicle</h2>
                <p>Every detail refined for executive comfort</p>
            </div>

            <div className="gallery-grid">
                {vehicle.gallery.map((img: string, index: number) => (
                    <button
                        key={index}
                        className="gallery-item"
                        onClick={() => setActiveImage(img)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        <img src={img} alt={`Vehicle ${index + 1}`} />
                    </button>
                ))}
            </div>

            {activeImage && (
                <div
                    className="gallery-modal"
                    onClick={() => setActiveImage(null)}
                >
                    <img src={activeImage} alt="Vehicle large view" />
                </div>
            )}
        </section>
    );
};

export default VehicleGallery;
