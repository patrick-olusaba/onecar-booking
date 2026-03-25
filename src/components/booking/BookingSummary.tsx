import React from "react";

interface FareBreakdown {
    base: number;
    distance: number;
    passengers: number;
    peak: number;
    total: number;
}

interface BookingSummaryProps {
    service: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: number;
    distance: number;
    price: number;
    breakdown: FareBreakdown;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
                                                           service,
                                                           from,
                                                           to,
                                                           date,
                                                           time,
                                                           passengers,
                                                           distance,
                                                           price,
                                                           breakdown
                                                       }) => {
    return (
        <aside className="booking-summary">
            <h3>Your Trip</h3>

            <ul className="summary-list">
                <li><span>Service</span><strong>{service}</strong></li>
                <li><span>From</span><strong>{from}</strong></li>
                <li><span>To</span><strong>{to}</strong></li>
                <li><span>Date</span><strong>{date || "—"}</strong></li>
                <li><span>Time</span><strong>{time || "—"}</strong></li>
                <li><span>Passengers</span><strong>{passengers}</strong></li>
                <li>
                    <span>Distance</span>
                    <strong>
                        {distance > 0 ? `${distance.toFixed(2)} km` : "Calculating..."}
                    </strong>
                </li>
            </ul>

            <div className="summary-divider" />

            {/* ---------- FARE BREAKDOWN ---------- */}
            <div className="fare-breakdown">

                <div>
                    <span>Base Fare</span>
                    <strong>KES {breakdown.base.toLocaleString()}</strong>
                </div>

                <div>
                    <span>Distance Fare</span>
                    <strong>KES {breakdown.distance.toLocaleString()}</strong>
                </div>

                <div>
                    <span>Passengers</span>
                    <strong>KES {breakdown.passengers.toLocaleString()}</strong>
                </div>

                {breakdown.peak > 0 && (
                    <div>
                        <span>Peak Hour Surcharge</span>
                        <strong>KES {breakdown.peak.toLocaleString()}</strong>
                    </div>
                )}

            </div>

            <div className="summary-divider" />

            <div className="summary-price">
                <span>Total</span>
                <strong>KES {price.toLocaleString()}</strong>
            </div>

            <button className="summary-cta">
                Confirm Booking
            </button>
        </aside>
    );
};

export default BookingSummary;
