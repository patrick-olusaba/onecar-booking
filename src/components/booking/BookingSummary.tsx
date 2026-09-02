import React from "react";
import { whatsappLink } from "../../config";
import type { RouteStatus } from "../../pages/MapRoute";

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
    routeStatus?: RouteStatus;
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
                                                           breakdown,
                                                           routeStatus = "idle"
                                                       }) => {
    // Everything the site sells runs through WhatsApp, so the booking does too.
    const detailsGiven = Boolean(to && date && time);
    const ready = detailsGiven && distance > 0;

    /* If routing is down we still know the trip, just not the distance. Rather
       than leaving the customer at a dead button, hand it over for a manual
       quote -- without inventing a price. */
    const quoteByHand = detailsGiven && !ready && routeStatus === "error";

    const manualEnquiry = [
        "Hello Luxe Transfers, could I get a quote for:",
        `Service: ${service}`,
        `From: ${from}`,
        `To: ${to}`,
        `Date: ${date} at ${time}`,
        `Passengers: ${passengers}`,
    ].join("\n");

    const enquiry = [
        "Hello Luxe Transfers, I would like to book:",
        `Service: ${service}`,
        `From: ${from}`,
        `To: ${to}`,
        `Date: ${date} at ${time}`,
        `Passengers: ${passengers}`,
        `Distance: ${distance.toFixed(2)} km`,
        `Quoted total: KES ${price.toLocaleString()}`,
    ].join("\n");

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
                        {distance > 0
                            ? `${distance.toFixed(2)} km`
                            : routeStatus === "locating" || routeStatus === "routing"
                              ? "Calculating…"
                              : routeStatus === "error"
                                ? "Unavailable"
                                : "—"}
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

            {ready ? (
                <a
                    className="summary-cta"
                    href={whatsappLink(enquiry)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Confirm Booking
                </a>
            ) : quoteByHand ? (
                <a
                    className="summary-cta"
                    href={whatsappLink(manualEnquiry)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Ask us for a quote
                </a>
            ) : (
                <button className="summary-cta" disabled>
                    Enter your trip details
                </button>
            )}
        </aside>
    );
};

export default BookingSummary;
