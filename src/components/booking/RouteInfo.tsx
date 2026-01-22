import React from "react";
import type { RouteInfo } from "../../utils/routeCalculator";

interface Props {
    routeInfo: RouteInfo | null;
}

const RouteInfoPanel: React.FC<Props> = ({ routeInfo }) => {
    if (!routeInfo) return null;

    return (
        <div className="route-info">
            <p><strong>Route:</strong> {routeInfo.route}</p>
            <p><strong>Distance:</strong> {routeInfo.distance} km</p>
            <p><strong>Duration:</strong> {routeInfo.duration} mins</p>
        </div>
    );
};

export default RouteInfoPanel;
