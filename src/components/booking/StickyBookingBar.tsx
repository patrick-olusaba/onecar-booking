import React, { useEffect, useState } from "react";
import type { RouteInfo } from "../../utils/routeCalculator";

interface StickyBookingBarProps {
    routeInfo: RouteInfo | null;
    onBook: () => void;
}

const StickyBookingBar: React.FC<StickyBookingBarProps> = ({
                                                               routeInfo,
                                                               onBook,
                                                           }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!routeInfo) return null;

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

                <button className="sticky-cta" onClick={onBook}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default StickyBookingBar;
