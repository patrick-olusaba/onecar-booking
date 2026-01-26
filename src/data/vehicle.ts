import type { Car } from "../types";

export const vehicle: Car = {
    id: 1,
    name: "Mercedes-Benz A-Class",
    category: "Executive Chauffeur Sedan",
    rating: 4.8,

    seats: 4,
    luggage: 2,
    transmission: "Automatic",
    fuel: "Petrol",

    image: "/images/car/hero.jpeg",

    gallery: [
        "/images/car/img1.jpeg",
        "/images/car/img2.jpeg",
        "/images/car/img4.jpeg",
        "/images/car/img5.jpeg",
        "/images/car/img6.jpeg",
        "/images/car/img7.jpeg",
        "/images/car/img1.jpeg",
        "/images/car/img3.jpeg",
        "/images/car/img4.jpeg",
    ],

    features: [
        {
            title: "Interior Comfort",
            description:
                "Premium leather seating, ambient lighting and refined finishes designed for calm, quiet journeys.",
            image: "/images/car/backview.jpeg",
        },
        {
            title: "Executive Dashboard",
            description:
                "Digital cockpit with intuitive controls and modern infotainment system.",
            image: "/images/car/dashboard1.jpeg",
        },
        {
            title: "Rear Passenger Space",
            description:
                "Spacious rear seating with excellent legroom for relaxed transfers.",
            image: "/images/car/seat2.jpeg",
        },
        {
            title: "Exterior Design",
            description:
                "Sleek aerodynamic profile with signature Mercedes-Benz styling.",
            image: "/images/car/dashboard2.jpeg",
        },
        {
            title: "Climate Control",
            description:
                "Dual-zone climate control ensuring perfect cabin temperature.",
            image: "/images/car/controller.jpeg",
        },
        {
            title: "Steering & Controls",
            description:
                "Leather-wrapped multifunction steering wheel with responsive handling.",
            image: "/images/car/steering1.jpeg",
        },
        {
            title: "Front View",
            description:
                "Bold front fascia with LED headlights and sporty presence.",
            image: "/images/car/dashboardside.jpeg",
        },
        {
            title: "Rear View",
            description:
                "Clean rear styling with elegant tail lights.",
            image: "/images/car/door.jpeg",
        }
    ]
};
