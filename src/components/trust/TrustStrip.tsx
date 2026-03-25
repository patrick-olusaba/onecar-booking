import React from "react";
import { Clock, ShieldCheck, Star, Car } from "lucide-react";

const stats = [
    { icon: <Clock size={22} />, value: "100%", label: "On-Time Arrivals" },
    { icon: <ShieldCheck size={22} />, value: "Fixed", label: "Transparent Pricing" },
    { icon: <Star size={22} />, value: "4.9★", label: "Average Rating" },
    { icon: <Car size={22} />, value: "500+", label: "Transfers Completed" },
];

const TrustStrip: React.FC = () => {
    return (
        <div className="trust-strip">
            {stats.map((stat) => (
                <div key={stat.label} className="trust-stat">
                    <span className="trust-icon">{stat.icon}</span>
                    <span className="trust-value">{stat.value}</span>
                    <span className="trust-label">{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustStrip;
