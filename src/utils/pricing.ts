// Single source of truth for fares. Booking page, home page and sticky bar all
// quoted different numbers before this existed.

export const BASE_FARE = 3000;
export const PRICE_PER_KM = 150;
export const PASSENGER_FEE = 1000;
export const PEAK_MULTIPLIER = 1.25;

export interface FareBreakdown {
    base: number;
    distance: number;
    passengers: number;
    peak: number;
    total: number;
}

export const isPeakHour = (time: string): boolean => {
    if (!time) return false;
    const hour = Number(time.split(":")[0]);
    return (hour >= 6 && hour <= 9) || (hour >= 16 && hour <= 19);
};

export function calculateFare(
    distanceKm: number,
    passengers: number,
    time: string
): FareBreakdown {
    const base = BASE_FARE;
    const distance = Math.round(distanceKm * PRICE_PER_KM);
    // first passenger is included in the base fare
    const passengerFee = Math.max(0, passengers - 1) * PASSENGER_FEE;

    const subtotal = base + distance + passengerFee;
    const peak = isPeakHour(time)
        ? Math.round(subtotal * (PEAK_MULTIPLIER - 1))
        : 0;

    return {
        base,
        distance,
        passengers: passengerFee,
        peak,
        total: subtotal + peak,
    };
}
