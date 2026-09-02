import React from "react";

/* Each quote is labelled with the trip it came from. A route is a more
   credible credential than a row of gold stars. */
const reviews = [
    {
        name: "James M.",
        role: "Business traveller",
        trip: "JKIA → Westlands",
        quote:
            "Impeccable service. The driver was waiting at arrivals with a name board, helped with luggage, and the car was spotless. Will use every trip to Nairobi.",
    },
    {
        name: "Amina K.",
        role: "Wedding client",
        trip: "Karen → Windsor",
        quote:
            "We booked Luxe Transfers for our wedding day and they exceeded every expectation. Punctual, professional, and the car looked stunning.",
    },
    {
        name: "David O.",
        role: "Corporate client",
        trip: "JKIA → Upper Hill",
        quote:
            "Fixed pricing is a game changer. No surprises on the invoice. The Mercedes is comfortable and the chauffeur was discreet and professional.",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="section testimonials-section">
            <div className="shell">
                <div className="section-head">
                    <span className="eyebrow eyebrow--signal">From the log</span>
                    <h2>Three recent transfers</h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review) => (
                        <figure key={review.name} className="testimonial">
                            <span className="data testimonial-trip">{review.trip}</span>
                            <blockquote className="testimonial-quote">
                                {review.quote}
                            </blockquote>
                            <figcaption className="testimonial-author">
                                <span className="testimonial-name">{review.name}</span>
                                <span className="data testimonial-role">{review.role}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
