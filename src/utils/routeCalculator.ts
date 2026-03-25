export interface RouteInfo {
    route: string;
    distance: number; // km
    duration: number; // minutes
    price: number;    // total fare (distance only)
}

const KM_RATE = 300; // change anytime

export function calculateRoute(
    airport: string,
    hotel: string,
    time: string
    , distanceKm: number): RouteInfo {

    const duration = Math.round(distanceKm * 2); // rough estimate
    const price = distanceKm * KM_RATE; // distance-only pricing

    return {
        route: `${airport} → ${hotel}`,
        distance: distanceKm,
        duration,
        price
    };
}
