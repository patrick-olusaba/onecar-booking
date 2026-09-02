import React, { useState } from "react";
import { vehicle } from "../../data/vehicle";
import type { GalleryShot } from "../../types";

const VehicleGallery: React.FC = () => {
    const [active, setActive] = useState<GalleryShot | null>(null);

    if (!vehicle.gallery?.length) return null;

    return (
        <section className="vehicle-gallery">
            <div className="gallery-header">
                <h2>The car itself</h2>
                <p>
                    The A-Class you will be collected in. No stock photography,
                    no stand-ins.
                </p>
            </div>

            <div className="gallery-grid">
                {vehicle.gallery.map((shot, index) => (
                    <button
                        key={shot.src}
                        className="gallery-item"
                        onClick={() => setActive(shot)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        <img src={shot.src} alt={shot.caption} loading="lazy" />
                        <span className="data gallery-caption">{shot.caption}</span>
                    </button>
                ))}
            </div>

            {active && (
                <div className="gallery-modal" onClick={() => setActive(null)}>
                    <img src={active.src} alt={active.caption} />
                </div>
            )}
        </section>
    );
};

export default VehicleGallery;
