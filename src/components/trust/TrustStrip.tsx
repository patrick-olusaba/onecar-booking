import React from "react";

/* A ledger, not a badge row. The numbers are the claim; they do not need
   an icon to prop them up. */
const stats = [
    { value: "1", label: "Car in the fleet", note: "Mercedes-Benz A-Class" },
    { value: "500+", label: "Transfers completed", note: "Since 2023" },
    { value: "4.9", label: "Average rating", note: "Across 90 reviews" },
    { value: "24/7", label: "Dispatch", note: "WhatsApp and phone" },
];

const TrustStrip: React.FC = () => {
    return (
        <div className="trust-strip">
            <div className="trust-inner">
                {stats.map((stat) => (
                    <div key={stat.label} className="trust-stat">
                        <span className="trust-value">{stat.value}</span>
                        <span className="data trust-label">{stat.label}</span>
                        <span className="trust-note">{stat.note}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustStrip;
