import blogHero from "../assets/images/hotel/norfolk.jpg";

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    slug: string;
    date: string;
    featured?: boolean;

}

export const posts: BlogPost[] = [

    {
        id: 1,
        title: "The Art of Luxury Airport Transfers",
        slug: "luxury-airport-transfers",
        excerpt: "Why premium airport transfers redefine travel comfort.",
        image: blogHero,
        date: "Jan 12, 2026",
        featured: true,
        content: `
            <p>
                Airport transfers are the first and last impression of a journey.
                A luxury transfer ensures punctuality, comfort, and discretion.
            </p>

            <h2>Why Luxury Matters</h2>

            <p>
                Premium chauffeur services eliminate stress by offering professional
                drivers, immaculate vehicles, and seamless coordination.
            </p>

            <blockquote>
                Luxury is not excess — it’s precision, comfort, and reliability.
            </blockquote>

            <p>
                Whether arriving for business or leisure, a refined airport transfer
                sets the tone for the entire trip.
            </p>
        `
    },
    {
        id: 2,
        title: "Why Chauffeur Services Matter for Business",
        slug: "chauffeur-for-business",
        excerpt: "Executive travel is more than transport — it’s presence.",
        image: blogHero,
        date: "Jan 08, 2026",
        featured: true,
        content: `
            <p>
                Airport transfers are the first and last impression of a journey.
                A luxury transfer ensures punctuality, comfort, and discretion.
            </p>

            <h2>Why Luxury Matters</h2>

            <p>
                Premium chauffeur services eliminate stress by offering professional
                drivers, immaculate vehicles, and seamless coordination.
            </p>

            <blockquote>
                Luxury is not excess — it’s precision, comfort, and reliability.
            </blockquote>

            <p>
                Whether arriving for business or leisure, a refined airport transfer
                sets the tone for the entire trip.
            </p>
        `
    },
    {
        id: 3,
        title: "Arrive in Style: Events & Weddings",
        slug: "events-and-weddings",
        excerpt: "Luxury transportation for life’s most important moments.",
        image: blogHero,
        date: "Jan 02, 2026",
        content: `
            <p>
                Airport transfers are the first and last impression of a journey.
                A luxury transfer ensures punctuality, comfort, and discretion.
            </p>

            <h2>Why Luxury Matters</h2>

            <p>
                Premium chauffeur services eliminate stress by offering professional
                drivers, immaculate vehicles, and seamless coordination.
            </p>

            <blockquote>
                Luxury is not excess — it’s precision, comfort, and reliability.
            </blockquote>

            <p>
                Whether arriving for business or leisure, a refined airport transfer
                sets the tone for the entire trip.
            </p>
        `
    },
    {
    id: 4,
    title: "The Art of Chauffeur-Driven Luxury",
    excerpt: "Why discreet, professional transfers redefine executive travel.",
    image: blogHero,
    slug: "chauffeur-driven-luxury",
    date: "Jan 2026",
    featured: true,
        content: `
            <p>
                Airport transfers are the first and last impression of a journey.
                A luxury transfer ensures punctuality, comfort, and discretion.
            </p>

            <h2>Why Luxury Matters</h2>

            <p>
                Premium chauffeur services eliminate stress by offering professional
                drivers, immaculate vehicles, and seamless coordination.
            </p>

            <blockquote>
                Luxury is not excess — it’s precision, comfort, and reliability.
            </blockquote>

            <p>
                Whether arriving for business or leisure, a refined airport transfer
                sets the tone for the entire trip.
            </p>
        `

}
];

