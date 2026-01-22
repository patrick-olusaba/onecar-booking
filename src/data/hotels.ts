// src/data/hotels.ts

import giraffeManor from "../assets/images/hotel/giraffemanor.jpg";
import hemingways from "../assets/images/hotel/hemingways.jpg";
import norfolk from "../assets/images/hotel/norfolk.jpg";

export interface Hotel {
    id: number;
    name: string;
    location: string;
    image: string;
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: "Giraffe Manor",
        location: "Karen, Nairobi",
        image: giraffeManor
    },
    {
        id: 2,
        name: "Hemingways Nairobi",
        location: "Westlands, Nairobi",
        image: hemingways
    },
    {
        id: 3,
        name: "Fairmont The Norfolk",
        location: "CBD, Nairobi",
        image: norfolk
    },
    {
        id: 5,
        name: "Giraffe Manor",
        location: "Karen, Nairobi",
        image: giraffeManor
    },
    {
        id: 6,
        name: "Hemingways Nairobi",
        location: "Westlands, Nairobi",
        image: hemingways
    },
    {
        id: 7,
        name: "Fairmont The Norfolk",
        location: "CBD, Nairobi",
        image: norfolk
    },
    {
        id: 8,
        name: "Giraffe Manor",
        location: "Karen, Nairobi",
        image: giraffeManor
    },
    {
        id: 9,
        name: "Hemingways Nairobi",
        location: "Westlands, Nairobi",
        image: hemingways
    },
    {
        id: 10,
        name: "Fairmont The Norfolk",
        location: "CBD, Nairobi",
        image: norfolk
    },
    {
        id: 11,
        name: "Fairmont The Norfolk",
        location: "CBD, Nairobi",
        image: norfolk
    }
];
