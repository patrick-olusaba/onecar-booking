import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../../assets/images/car/hero.jpeg";
import hero2 from "../../assets/images/car/img6.jpeg";
import hero3 from "../../assets/images/car/img5.jpeg";

const slides = [
    {
        image: hero1,
        eyebrow: "Nairobi · Chauffeur transfers",
        title: "One car.\nOne standard.",
        subtitle:
            "A single Mercedes-Benz A-Class and the chauffeur who drives it. You know the car before you land, and you know the fare before you book.",
    },
    {
        image: hero2,
        eyebrow: "JKIA · Wilson · City hotels",
        title: "Booked before\nyou land.",
        subtitle:
            "Your driver is at arrivals when the wheels touch down. No app queue, no surge, no negotiation at the kerb.",
    },
    {
        image: hero3,
        eyebrow: "Fixed fares · No surge",
        title: "The price\nis the price.",
        subtitle:
            "Quoted on the distance you are actually travelling, agreed in writing, unchanged when the traffic is not.",
    },
];

const SLIDE_INTERVAL = 7000;

/* The fare on the docket is the real one -- KES 3,000 base + 150/km,
   priced for the common JKIA -> Westlands run. See utils/pricing.ts */
const docket = [
    { label: "Route", value: "JKIA → Nairobi" },
    { label: "Typical run", value: "18 km · 35 min" },
    { label: "Fixed from", value: "KES 5,700" },
];

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(
            () => setIndex((prev) => (prev + 1) % slides.length),
            SLIDE_INTERVAL
        );
        return () => clearInterval(timer);
    }, []);

    const slide = slides[index];

    return (
        <section className="hero">
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`hero-slide ${i === index ? "active" : ""}`}
                    style={{ backgroundImage: `url(${s.image})` }}
                />
            ))}

            <div className="hero-scrim" />

            <div className="hero-content">
                <span className="eyebrow hero-eyebrow">{slide.eyebrow}</span>

                <h1 className="hero-title">
                    {slide.title.split("\n").map((line, i) => (
                        <span key={i} className="hero-line">
                            {line}
                        </span>
                    ))}
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-actions">
                    <button
                        className="btn btn--signal"
                        onClick={() => navigate("/booking")}
                    >
                        Get a fixed quote
                    </button>
                    <button
                        className="btn btn--quiet"
                        onClick={() => navigate("/vehicle")}
                    >
                        See the car
                    </button>
                </div>
            </div>

            {/* The docket: the whole proposition in three fields. */}
            <div className="hero-docket">
                {docket.map((field) => (
                    <div key={field.label} className="docket-field">
                        <span className="data docket-label">{field.label}</span>
                        <span className="docket-value">{field.value}</span>
                    </div>
                ))}

                <div className="docket-slides">
                    {slides.map((s, i) => (
                        <button
                            key={s.title}
                            className={`docket-tick ${i === index ? "is-active" : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Show slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
