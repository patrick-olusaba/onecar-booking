export interface Hotel {
    id: number;
    name: string;
    slug: string;
    location: string;
    image: string;
    description: string;
    services: string[];
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: "Giraffe Manor",
        slug: "giraffe-manor",
        location: "Karen, Nairobi",
        image: "/images/hotel/giraffemanor.jpg",
        description:
            "Iconic boutique hotel famous for resident giraffes and luxury hospitality.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"],
    },
    {
        id: 2,
        name: "Hemingways",
        slug: "hemingways-nairobi",
        location: "Westlands, Nairobi",
        image: "/images/hotel/hemingways.jpg",
        description:
            "Five-star all-suite hotel offering refined comfort and privacy.",
        services: ["Executive Transfers", "Corporate Travel", "Events"],
    },
    {
        id: 3,
        name: "Fairmont The Norfolk",
        slug: "fairmont-norfolk",
        location: "CBD, Nairobi",
        image: "/images/hotel/norfolk.jpg",
        description:
            "Historic luxury hotel with world-class dining and gardens.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 4,
        name: "Argyle Grand Hotel",
        slug: "argyle-grand-hotel",
        location: "CBD, Nairobi",
        image: "/images/hotel/Argyle-Grand-Hotel.jpg",
        description:
            "Luxury city hotel offering premium accommodation and services.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 5,
        name: "Azure Hotel",
        slug: "azure-hotel",
        location: "Nairobi",
        image: "/images/hotel/azure-hotel-nairobi.jpg",
        description:
            "Modern hotel with elegant rooms and city views.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"],
    },
    {
        id: 6,
        name: "Crowne Plaza",
        slug: "crowne-plaza",
        location: "Westlands, Nairobi",
        image: "/images/hotel/crowne-plaza.jpg",
        description:
            "Five-star hotel offering refined comfort and premium services.",
        services: ["Executive Transfers", "Corporate Travel", "Events"],
    },
    {
        id: 7,
        name: "Hermosa Garden Hotel",
        slug: "hermosa-garden-hotel",
        location: "CBD, Nairobi",
        image: "/images/hotel/Hermosa-Garden-Hotel.jpg",
        description:
            "Boutique hotel offering tranquility in the heart of the city.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 8,
        name: "Highlands Suites",
        slug: "highlands-suites",
        location: "Nairobi",
        image: "/images/hotel/Highlands-Suites.jpg",
        description:
            "Elegant serviced apartments for business and leisure stays.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 9,
        name: "Hyatt House",
        slug: "hyatt-house",
        location: "Westlands, Nairobi",
        image: "/images/hotel/Hyatt-House.jpg",
        description:
            "Upscale extended-stay hotel with premium amenities.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"],
    },
    {
        id: 10,
        name: "KenGen Guest House",
        slug: "kengen-guest-house",
        location: "Nairobi",
        image: "/images/hotel/KenGen.jpg",
        description:
            "Comfortable accommodation with serene surroundings.",
        services: ["Executive Transfers", "Corporate Travel", "Events"],
    },
    {
        id: 11,
        name: "La Maison Royale",
        slug: "la-maison-royale",
        location: "South C, Nairobi",
        image: "/images/hotel/LaMaison-Royale-SouthC.jpg",
        description:
            "Stylish hotel with modern luxury and comfort.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 12,
        name: "Lion Villas",
        slug: "lion-villas",
        location: "Nairobi",
        image: "/images/hotel/lion-villas.jpg",
        description:
            "Exclusive villas offering privacy and elegance.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 13,
        name: "Marina Bay Apartments",
        slug: "marina-bay-apartments",
        location: "Nairobi",
        image: "/images/hotel/Marina-Bay-Apartments.jpg",
        description:
            "Serviced apartments with modern amenities.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 14,
        name: "Misty Springs Apartments",
        slug: "misty-springs-apartments",
        location: "Nairobi",
        image: "/images/hotel/Misty-Springs-apartments.jpg",
        description:
            "Peaceful apartments surrounded by nature.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 15,
        name: "Olsupat Lodge",
        slug: "olsupat-lodge",
        location: "Karen, Nairobi",
        image: "/images/hotel/Olsupat-Lodge.jpg",
        description:
            "Rustic lodge with authentic Kenyan charm.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"],
    },
    {
        id: 16,
        name: "Sarova Panafric",
        slug: "sarova-panafric",
        location: "Nairobi",
        image: "/images/hotel/Sarova-Panafric.jpg",
        description:
            "Five-star hotel with refined comfort and premium hospitality.",
        services: ["Executive Transfers", "Corporate Travel", "Events"],
    },
    {
        id: 17,
        name: "Sarova Stanley",
        slug: "sarova-stanley",
        location: "CBD, Nairobi",
        image: "/images/hotel/sarova-stanley.jpg",
        description:
            "Historic luxury hotel with world-class dining.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 18,
        name: "Sigona Golf Club",
        slug: "sigona-golf-club",
        location: "Kiambu",
        image: "/images/hotel/Sigona-Golf-Club.jpg",
        description:
            "Luxury golf resort with scenic views.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 19,
        name: "Silverstone",
        slug: "silverstone",
        location: "Karen, Nairobi",
        image: "/images/hotel/Silverstone.jpg",
        description:
            "Modern hotel offering premium comfort and style.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"],
    },
    {
        id: 20,
        name: "Skynest Residences",
        slug: "skynest-residences",
        location: "Westlands, Nairobi",
        image: "/images/hotel/Skynest-Residences.jpg",
        description:
            "Luxury serviced apartments in the heart of the city.",
        services: ["Executive Transfers", "Corporate Travel", "Events"],
    },
    {
        id: 21,
        name: "Swiss Belinn",
        slug: "swiss-belinn",
        location: "CBD, Nairobi",
        image: "/images/hotel/Swiss-belinn.png",
        description:
            "International-standard hotel with modern comfort.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 22,
        name: "The Boma",
        slug: "the-boma",
        location: "Nairobi",
        image: "/images/hotel/the-boma.jpg",
        description:
            "Luxury hotel blending African culture and elegance.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 23,
        name: "Trademark Suites",
        slug: "trademark-suites",
        location: "Nairobi",
        image: "/images/hotel/Trademark-Suites.jpg",
        description:
            "Stylish suites for business and leisure travelers.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
    {
        id: 24,
        name: "Misty Springs Apartments",
        slug: "misty-springs-apartments-2",
        location: "Nairobi",
        image: "/images/hotel/Misty-Springs-apartments.jpg",
        description:
            "Peaceful apartments surrounded by nature.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"],
    },
];
