import React from "react";
import type { RouteInfo } from "../../utils/routeCalculator";

interface Props {
    routeInfo: RouteInfo | null;
}

const RouteInfoPanel: React.FC<Props> = ({ routeInfo }) => {
    if (!routeInfo || !Number.isFinite(routeInfo.distance)) return null;

    const fare = routeInfo.price;

    return (
        <div className="route-info-panel">
            <p>
                <strong>Distance:</strong>{" "}
                {routeInfo.distance.toFixed(2)} km
            </p>

            <p className="price">
                <strong>Estimated Fare:</strong>{" "}
                KES {fare.toLocaleString()}
            </p>
        </div>
    );
};

export default RouteInfoPanel;
