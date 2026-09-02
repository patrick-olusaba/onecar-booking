import { calculateFare } from "./pricing";

export interface RouteInfo {
    route: string;
    distance: number; // km
    duration: number; // minutes
    price: number;    // total fare, same formula as the booking page
}

export function calculateRoute(
    airport: string,
    hotel: string,
    time: string,
    distanceKm: number
): RouteInfo {
    // ponytail: rough estimate, swap for the ORS duration if it matters
    const duration = Math.round(distanceKm * 2);

    return {
        route: `${airport} → ${hotel}`,
        distance: distanceKm,
        duration,
        // quoted for 1 passenger; the booking page re-quotes with the real count
        price: calculateFare(distanceKm, 1, time).total,
    };
}
