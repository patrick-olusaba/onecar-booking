export interface RouteInfo {
    route: string;
    distance: number;
    duration: number;
    baseFare: number;
    peakSurcharge: number;
}

export function calculateRoute(
    airport: string,
    hotel: string,
    time: string
): RouteInfo {
    const distance = 18;
    const duration = 35;

    const baseFare = 4500;
    const isPeak = time >= "07:00" && time <= "09:00";

    return {
        route: `${airport} → ${hotel}`,
        distance,
        duration,
        baseFare,
        peakSurcharge: isPeak ? baseFare * 0.25 : 0
    };
}
