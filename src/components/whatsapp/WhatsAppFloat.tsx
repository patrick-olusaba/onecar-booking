import React from "react";
import { whatsappLink } from "../../config";

const WhatsAppFloat: React.FC = () => {
    return (
        <a
            href={whatsappLink("Hello Luxe Transfers, I would like to make a booking.")}
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
