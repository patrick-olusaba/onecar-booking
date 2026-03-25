import React from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "James M.",
        role: "Business Traveller",
        quote:
            "Impeccable service. The driver was waiting at arrivals with a name board, helped with luggage, and the car was spotless. Will use every trip to Nairobi.",
        rating: 5,
    },
    {
        name: "Amina K.",
        role: "Wedding Client",
        quote:
            "We booked Luxe Transfers for our wedding day and they exceeded every expectation. Punctual, professional, and the car looked stunning.",
        rating: 5,
    },
    {
        name: "David O.",
        role: "Corporate Client",
        quote:
            "Fixed pricing is a game changer. No surprises on the invoice. The Mercedes is comfortable and the chauffeur was discreet and professional.",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-inner">
                <div className="testimonials-header">
                    <span className="testimonials-eyebrow">Client Reviews</span>
                    <h2>What Our Clients Say</h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="testimonial-stars">
                                {Array.from({ length: review.rating }).map((_, j) => (
                                    <Star key={j} size={14} fill="#d4af37" color="#d4af37" />
                                ))}
                            </div>
                            <p className="testimonial-quote">"{review.quote}"</p>
                            <div className="testimonial-author">
                                <span className="testimonial-name">{review.name}</span>
                                <span className="testimonial-role">{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
