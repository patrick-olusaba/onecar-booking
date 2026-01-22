import React, { useEffect, useState } from "react";
import hero1 from "../../assets/images/car/hero.jpeg";
import hero2 from "../../assets/images/car/img6.jpeg"; // optional second angle
import hero3 from "../../assets/images/car/img5.jpeg"; // optional

const slides = [
    {
        image: hero1,
        eyebrow: "Signature Chauffeur Service",
        title: "One Car.\nOne Standard.",
        subtitle:
            "Executive airport transfers in our Mercedes-Benz A-Class. Chauffeur-driven. Fixed pricing. Total comfort."
    },
    {
        image: hero2,
        eyebrow: "Executive Transfers",
        title: "Arrive\nImpeccably.",
        subtitle:
            "Private, reliable airport transfers designed for business and leisure travel."
    },
    {
        image: hero3,
        eyebrow: "Luxury Mobility",
        title: "Refined.\nReliable.",
        subtitle:
            "A seamless experience from airport to destination."
    }
];

const SLIDE_INTERVAL = 6000;

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, []);

    const slide = slides[index];

    return (
        <section className="hero">
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`hero-slide ${i === index ? "active" : ""}`}
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                90deg,
                                rgba(0,0,0,0.88) 0%,
                                rgba(0,0,0,0.65) 45%,
                                rgba(212,175,55,0.28) 100%
                            ),
                            url(${s.image})
                        `
                    }}
                />
            ))}

            <div className="hero-content">
                <span className="hero-eyebrow">{slide.eyebrow}</span>

                <h1 className="hero-title">
                    {slide.title.split("\n").map((line, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <button className="hero-cta">Book Transfer</button>
            </div>
        </section>
    );
};

export default Hero;
