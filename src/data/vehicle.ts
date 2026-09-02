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

    /* Four angles, each showing something the others do not. The previous
       nine were all the same white car in the same garage -- and img1 and
       img4 each appeared twice. Nothing was deleted: the other shots are
       still in public/images/car and are used by `features` below. */
    gallery: [
        {
            src: "/images/car/img1.jpeg",
            caption: "The car, as it arrives",
        },
        {
            src: "/images/car/backview.jpeg",
            caption: "Your view from the back seat",
        },
        {
            src: "/images/car/seat1.jpeg",
            caption: "Rear seating and legroom",
        },
        {
            src: "/images/car/dashboard1.jpeg",
            caption: "The chauffeur's position",
        },
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
            title: "Centre Console",
            description:
                "Infotainment screen, air vents and media controls within easy reach.",
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
            title: "Dashboard, Passenger Side",
            description:
                "Soft-touch dash and vents on the passenger side of the cabin.",
            image: "/images/car/dashboardside.jpeg",
        },
        {
            title: "Doors and Entry",
            description:
                "Wide-opening doors for easy entry with luggage in hand.",
            image: "/images/car/door.jpeg",
        }
    ]
};
