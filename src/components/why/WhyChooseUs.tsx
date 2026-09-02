import React from "react";

/* Read as a specification, not as three marketing cards. Each row states the
   term on the left and what it actually means on the right. */
const terms = [
    {
        term: "Arrival",
        title: "We meet the flight, not the clock",
        description:
            "Give us your flight number and we track it. Land early and the car is early; sit on the tarmac an hour and the car waits. Waiting time on airport pickups is included.",
    },
    {
        term: "Fare",
        title: "Quoted once, in writing",
        description:
            "The price is set by the distance you are travelling and agreed before you book. It does not move for traffic, for rain, or for the hour you happen to land.",
    },
    {
        term: "Driver",
        title: "The same chauffeur, every time",
        description:
            "One car means one driver. You get their name and number the moment the booking is confirmed, and they are reachable before, during and after the transfer.",
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="section why-section">
            <div className="shell">
                <div className="section-head">
                    <span className="eyebrow eyebrow--signal">Terms of service</span>
                    <h2>What you are actually buying</h2>
                    <p>
                        Three things separate a booked transfer from a taxi at
                        the kerb. These are ours, in plain terms.
                    </p>
                </div>

                <dl className="spec-list">
                    {terms.map((item) => (
                        <div key={item.term} className="spec-row">
                            <dt className="data spec-term">{item.term}</dt>
                            <dd className="spec-body">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default WhyChooseUs;
