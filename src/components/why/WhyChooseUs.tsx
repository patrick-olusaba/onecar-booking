import React from "react";
import { MapPin, BadgeCheck, Headphones } from "lucide-react";

const pillars = [
    {
        icon: <MapPin size={28} />,
        title: "Always On Time",
        description:
            "We track your flight in real time and adjust pickup times automatically — no waiting, no stress.",
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Fixed, Honest Pricing",
        description:
            "No surge pricing, no hidden fees. The price you see is the price you pay, every single time.",
    },
    {
        icon: <Headphones size={28} />,
        title: "24/7 Support",
        description:
            "Our team is reachable around the clock via WhatsApp or phone — before, during, and after your transfer.",
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="why-section">
            <div className="why-inner">
                <div className="why-header">
                    <span className="why-eyebrow">Why Luxe Transfers</span>
                    <h2>The Standard You Deserve</h2>
                    <p>Executive travel shouldn't come with uncertainty. Here's what sets us apart.</p>
                </div>

                <div className="why-grid">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="why-card">
                            <div className="why-card-icon">{pillar.icon}</div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
