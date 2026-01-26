import React from "react";

interface LightboxProps {
    image: string;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <img
                src={image}
                alt="Preview"
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-close" onClick={onClose}>
                ✕
            </button>
        </div>
    );
};

export default Lightbox;
