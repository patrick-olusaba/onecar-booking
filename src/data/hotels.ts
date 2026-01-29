import ArgyleGrand from "../assets/images/hotel/Argyle-Grand-Hotel.jpg";
import GiraffeManorImg from "../assets/images/hotel/giraffemanor.jpg";
import HemingwaysImg from "../assets/images/hotel/hemingways.jpg";
import NorfolkImg from "../assets/images/hotel/norfolk.jpg";
import AzureHotelImg from "../assets/images/hotel/azure-hotel-nairobi.jpg";
import CrownePlazaImg from "../assets/images/hotel/crowne-plaza.jpg";
import HermosaGardenImg from "../assets/images/hotel/Hermosa-Garden-Hotel.jpg";
import HighlandsSuitesImg from "../assets/images/hotel/Highlands-Suites.jpg";
import HyattHouseImg from "../assets/images/hotel/Hyatt-House.jpg";
import KenGenImg from "../assets/images/hotel/KenGen.jpg";
import LaMaisonRoyaleImg from "../assets/images/hotel/LaMaison-Royale-SouthC.jpg";
import LionVillasImg from "../assets/images/hotel/lion-villas.jpg";
import MarinaBayImg from "../assets/images/hotel/Marina-Bay-Apartments.jpg";
import MistySpringsImg from "../assets/images/hotel/Misty-Springs-apartments.jpg";
import OlsupatLodgeImg from "../assets/images/hotel/Olsupat-Lodge.jpg";
import SarovaPanafricImg from "../assets/images/hotel/Sarova-Panafric.jpg";
import SarovaStanleyImg from "../assets/images/hotel/sarova-stanley.jpg";
import SigonaGolfImg from "../assets/images/hotel/Sigona-Golf-Club.jpg";
import SilverstoneImg from "../assets/images/hotel/Silverstone.jpg";
import SkynestResidencesImg from "../assets/images/hotel/Skynest-Residences.jpg";
import SwissBelinnImg from "../assets/images/hotel/Swiss-belinn.png";
import TheBomaImg from "../assets/images/hotel/the-boma.jpg";
import TrademarkSuitesImg from "../assets/images/hotel/Trademark-Suites.jpg";


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
        image: GiraffeManorImg,
        description: "Iconic boutique hotel famous for resident giraffes and luxury hospitality.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"]
    },
    {
        id: 2,
        name: "Hemingways",
        slug: "hemingways-nairobi",
        location: "Westlands, Nairobi",
        image: HemingwaysImg,
        description: "Five-star all-suite hotel offering refined comfort and privacy.",
        services: ["Executive Transfers", "Corporate Travel", "Events"]
    },
    {
        id: 3,
        name: "Fairmont The Norfolk",
        slug: "fairmont-norfolk",
        location: "CBD, Nairobi",
        image: NorfolkImg,
        description: "Historic luxury hotel with world-class dining and gardens.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 4,
        name: "Argyle Grand Hotel",
        slug: "argyle-grand-hotel",
        location: "CBD, Nairobi",
        image: ArgyleGrand,
        description: "Luxury city hotel offering premium accommodation and services.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 5,
        name: "Azure Hotel",
        slug: "azure-hotel",
        location: "Nairobi",
        image: AzureHotelImg,
        description: "Modern hotel with elegant rooms and city views.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"]
    },
    {
        id: 6,
        name: "Crowne Plaza",
        slug: "crowne-plaza",
        location: "Westlands, Nairobi",
        image: CrownePlazaImg,
        description: "Five-star all-suite hotel offering refined comfort and privacy.",
        services: ["Executive Transfers", "Corporate Travel", "Events"]
    },
    {
        id: 7,
        name: "Hermosa Garden Hotel",
        slug: "hermosa-garden-hotel",
        location: "CBD, Nairobi",
        image: HermosaGardenImg,
        description: "Historic luxury hotel with world-class dining and gardens.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 8,
        name: "Highlands Suites",
        slug: "highlands-suites",
        location: "Nairobi",
        image: HighlandsSuitesImg,
        description: "Elegant serviced apartments for business and leisure.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 9,
        name: "Hyatt House",
        slug: "hyatt-house",
        location: "Westlands, Nairobi",
        image: HyattHouseImg,
        description: "Upscale extended-stay hotel with premium amenities.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"]
    },
    {
        id: 10,
        name: "KenGen Guest House",
        slug: "kengen-guest-house",
        location: "Nairobi",
        image: KenGenImg,
        description: "Comfortable accommodation with serene surroundings.",
        services: ["Executive Transfers", "Corporate Travel", "Events"]
    },
    {
        id: 11,
        name: "La Maison Royale",
        slug: "la-maison-royale",
        location: "South C, Nairobi",
        image: LaMaisonRoyaleImg,
        description: "Stylish hotel with modern luxury and comfort.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 12,
        name: "Lion Villas",
        slug: "lion-villas",
        location: "Nairobi",
        image: LionVillasImg,
        description: "Exclusive villas offering privacy and elegance.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 13,
        name: "Marina Bay Apartments",
        slug: "marina-bay-apartments",
        location: "Nairobi",
        image: MarinaBayImg,
        description: "Serviced apartments with modern amenities.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 14,
        name: "Misty Springs Apartments",
        slug: "misty-springs-apartments",
        location: "Nairobi",
        image: MistySpringsImg,
        description: "Peaceful apartments surrounded by nature.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 15,
        name: "Olsupat Lodge",
        slug: "olsupat-lodge",
        location: "Karen, Nairobi",
        image: OlsupatLodgeImg,
        description: "Rustic lodge with authentic Kenyan charm.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"]
    },
    {
        id: 16,
        name: "Sarova Panafric",
        slug: "sarova-panafric",
        location: "Nairobi",
        image: SarovaPanafricImg,
        description: "Five-star all-suite hotel offering refined comfort and privacy.",
        services: ["Executive Transfers", "Corporate Travel", "Events"]
    },
    {
        id: 17,
        name: "Sarova Stanley",
        slug: "sarova-stanley",
        location: "CBD, Nairobi",
        image: SarovaStanleyImg,
        description: "Historic luxury hotel with world-class dining and gardens.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 18,
        name: "Sigona Golf Club",
        slug: "sigona-golf-club",
        location: "Kiambu",
        image: SigonaGolfImg,
        description: "Luxury golf resort with scenic views.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 19,
        name: "Silverstone",
        slug: "silverstone",
        location: "Karen, Nairobi",
        image: SilverstoneImg,
        description: "Modern hotel with premium comfort.",
        services: ["Airport Transfers", "Private Chauffeur", "VIP Pickup"]
    },
    {
        id: 20,
        name: "Skynest Residences",
        slug: "skynest-residences",
        location: "Westlands, Nairobi",
        image: SkynestResidencesImg,
        description: "Luxury serviced apartments in the heart of the city.",
        services: ["Executive Transfers", "Corporate Travel", "Events"]
    },
    {
        id: 21,
        name: "Swiss Belinn",
        slug: "swiss-belinn",
        location: "CBD, Nairobi",
        image: SwissBelinnImg,
        description: "International-standard hotel with modern comfort.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 22,
        name: "The Boma",
        slug: "the-boma",
        location: "Nairobi",
        image: TheBomaImg,
        description: "Luxury hotel blending African culture and elegance.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 23,
        name: "Trademark Suites",
        slug: "trademark-suites",
        location: "Nairobi",
        image: TrademarkSuitesImg,
        description: "Stylish suites for business and leisure travelers.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    },
    {
        id: 24,
        name: "Misty Springs Apartments",
        slug: "misty-springs-apartments",
        location: "Nairobi",
        image: MistySpringsImg,
        description: "Peaceful apartments surrounded by nature.",
        services: ["Airport Pickup", "Business Transfers", "Weddings"]
    }
];
