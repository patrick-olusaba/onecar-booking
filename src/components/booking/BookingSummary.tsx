import React from "react";

interface BookingSummaryProps {
    service: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: number;
    price: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
                                                           service,
                                                           from,
                                                           to,
                                                           date,
                                                           time,
                                                           passengers,
                                                           price
                                                       }) => {
    return (
        <aside className="booking-summary">
            <h3>Your Trip</h3>

            <ul className="summary-list">
                <li>
                    <span>Service</span>
                    <strong>{service}</strong>
                </li>
                <li>
                    <span>From</span>
                    <strong>{from}</strong>
                </li>
                <li>
                    <span>To</span>
                    <strong>{to}</strong>
                </li>
                <li>
                    <span>Date</span>
                    <strong>{date}</strong>
                </li>
                <li>
                    <span>Time</span>
                    <strong>{time}</strong>
                </li>
                <li>
                    <span>Passengers</span>
                    <strong>{passengers}</strong>
                </li>
            </ul>

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
