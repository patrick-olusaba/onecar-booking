export interface VehicleFeature {
    title: string;
    description: string;
    image: string;
}

export interface Car {
    id: number;
    name: string;
    category: string;
    seats: number;
    luggage: number;
    transmission: string;
    fuel: string;
    image: string;
    rating: number;

    features: VehicleFeature[];
    gallery: string[];

}
