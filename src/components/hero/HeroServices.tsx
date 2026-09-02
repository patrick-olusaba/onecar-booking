import React from "react";
import { Link } from "react-router-dom";

/* No stock photography here. The business runs one car, and a library shot of
   somebody else's wedding limousine undercuts the whole claim -- so the
   services are set as an index instead. (It also removed 26MB of images.) */
const services = [
    {
        name: "Airport transfer",
        route: "JKIA / Wilson → City",
        from: "KES 5,700",
        description:
            "Met at arrivals with your name, luggage loaded, flight tracked from wheels-up.",
    },
    {
        name: "Business hire",
        route: "By the half day or day",
        from: "KES 12,000",
        description:
            "The car and chauffeur held for your meetings, with waiting time between stops included.",
    },
    {
        name: "Events",
        route: "Nairobi and surrounds",
        from: "On request",
        description:
            "Weddings, dinners and functions where arriving on time matters more than arriving loudly.",
    },
];

const HeroServices: React.FC = () => {
    return (
        <section className="section services">
            <div className="shell">
                <div className="section-head">
                    <span className="eyebrow eyebrow--signal">Services</span>
                    <h2>Three ways to book the car</h2>
                </div>

                <div className="service-index">
                    {services.map((service) => (
                        <article key={service.name} className="service">
                            <span className="data service-route">{service.route}</span>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <span className="service-from">
                                <span className="data">From</span>
                                <span className="service-price">{service.from}</span>
                            </span>
                        </article>
                    ))}
                </div>

                <Link to="/booking" className="btn btn--quiet services-cta">
                    Price your transfer
                </Link>
            </div>
        </section>
    );
};

export default HeroServices;
