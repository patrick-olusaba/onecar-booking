import React from "react";

const WhatsAppFloat: React.FC = () => {
    const whatsappNumber = "254700000000";
    const message = "Hello Luxe Transfers, I would like to make a booking.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppFloat;
