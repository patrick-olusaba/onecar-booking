export type PickupType = "airport-hotel" | "hotel-airport";

export interface Car {
    id: number;
    name: string;
    category: string;
    seats: number;
    luggage: number;
    price: number;
    image: string;
    gallery?: string[];
    rating?: number;
}
