import React from "react";
import airportImg from "../../assets/images/services/airport.jpg";
import businessImg from "../../assets/images/services/business.jpg";
import eventsImg from "../../assets/images/services/wedding.jpg";

const services = [
    {
        title: "Airport Transfers",
        description: "Punctual, discreet airport pickups and drop-offs",
        image: airportImg,
    },
    {
        title: "Business Transfers",
        description: "Executive travel for meetings and corporate clients",
        image: businessImg,
    },
    {
        title: "Events & Weddings",
        description: "Arrive in comfort and style for special occasions",
        image: eventsImg,
    },
];

const HeroServices: React.FC = () => {
    return (
        <section className="hero-services">
            <div className="hero-services-inner">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        className="hero-service-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div
                            className="hero-service-image"
                            style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="hero-service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroServices;
