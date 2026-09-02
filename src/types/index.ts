export interface VehicleFeature {
    title: string;
    description: string;
    image: string;
}

export interface GalleryShot {
    src: string;
    /** What the shot actually shows. Used as the caption and the alt text. */
    caption: string;
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
    gallery: GalleryShot[];

}
