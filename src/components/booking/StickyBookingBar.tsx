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

    const isBookingPage = location.pathname === "/booking";

    useEffect(() => {
        if (isBookingPage) return;

        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isBookingPage]);

    if (
        !routeInfo ||
        isBookingPage ||
        !Number.isFinite(routeInfo.distance)
    ) {
        return null;
    }

    const fare = routeInfo.price;


    return (
        <div className={`sticky-bar ${visible ? "show" : ""}`}>
            <div className="sticky-content">

                <div className="sticky-info">
                    <span className="sticky-meta">
                        {routeInfo.distance.toFixed(2)} km
                    </span>
                </div>

                <div className="sticky-price">
                    <span>Total</span>
                    <strong>KES {fare.toLocaleString()}</strong>
                </div>

                <button
                    className="sticky-cta"
                    onClick={() =>
                        navigate("/booking", { state: { routeInfo, fare } })
                    }
                >
                    Book Now
                </button>

            </div>
        </div>
    );
};

export default StickyBookingBar;
