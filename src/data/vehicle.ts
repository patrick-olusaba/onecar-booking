import type { Car } from "../types";

import hero from "../assets/images/car/hero.jpeg";
import interior from "../assets/images/car/img5.jpeg";
import exterior from "../assets/images/car/img6.jpeg";
import img1 from "../assets/images/car/img1.jpeg";
import img2 from "../assets/images/car/img2.jpeg";
import img3 from "../assets/images/car/img3.jpeg";
import img4 from "../assets/images/car/img4.jpeg";
import img5 from "../assets/images/car/img5.jpeg";
import img6 from "../assets/images/car/img6.jpeg";

export const vehicle: Car = {
    id: 1,
    name: "Mercedes-Benz A-Class",
    category: "Executive Chauffeur",
    seats: 4,
    luggage: 2,
    price: 8500,
    image: hero,
    gallery: [interior, exterior, hero, img1, img2, img3, img4, img5, img6],
    rating: 5
};
