import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { RouteInfo } from "../../utils/routeCalculator";

interface StickyBookingBarProps {
    routeInfo: RouteInfo | null;
}

const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ routeInfo }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // ❌ Do NOT show sticky bar on booking page
    const isBookingPage = location.pathname === "/booking";

    useEffect(() => {
        if (isBookingPage) return;

        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isBookingPage]);

    if (!routeInfo || isBookingPage) return null;

    const handleBook = () => {
        navigate("/booking", {
            state: {
                routeInfo,
            },
        });
    };

    return (
        <div className={`sticky-bar ${visible ? "show" : ""}`}>
            <div className="sticky-content">
                <div className="sticky-info">
                    <span className="sticky-route">{routeInfo.route}</span>
                    <span className="sticky-meta">
                        {routeInfo.distance} km • {routeInfo.duration} min
                    </span>
                </div>

                <div className="sticky-price">
                    <span>From</span>
                    <strong>
                        KES{" "}
                        {(routeInfo.baseFare + routeInfo.peakSurcharge).toLocaleString()}
                    </strong>
                </div>

                <button className="sticky-cta" onClick={handleBook}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default StickyBookingBar;
