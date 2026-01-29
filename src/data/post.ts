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
        title: "The Art of Luxury Airport Transfers in Nairobi",
        slug: "luxury-airport-transfers-nairobi",
        excerpt: "Why premium airport transfers are the foundation of a refined journey.",
        image: blogHero,
        date: "Jan 12, 2026",
        featured: true,
        content: `
      <p>
        For many travelers, the airport transfer is the first and last experience of a trip.
        At Luxe Transfers, we believe that moment should feel calm, seamless, and refined.
      </p>

      <p>
        Our chauffeur-driven Mercedes-Benz A-Class is prepared in advance, tracked to your flight,
        and driven by a professional who understands discretion and punctuality.
      </p>

      <h2>What Sets a Luxury Transfer Apart</h2>

      <ul>
        <li>On-time pickup, every time</li>
        <li>Immaculate, well-maintained vehicle</li>
        <li>Professional, uniformed chauffeur</li>
        <li>Fixed transparent pricing</li>
      </ul>

      <blockquote>
        Luxury is not excess — it is reliability, comfort, and trust.
      </blockquote>
    `
    },

    {
        id: 2,
        title: "Why Chauffeur Services Matter for Business Travel",
        slug: "chauffeur-for-business",
        excerpt: "Executive travel is about presence, timing, and professionalism.",
        image: blogHero,
        date: "Jan 09, 2026",
        featured: true,
        content: `
      <p>
        Business travel demands precision. Being late is not an option.
      </p>

      <p>
        A chauffeur service ensures your focus stays on meetings and strategy,
        not traffic or navigation.
      </p>

      <p>
        Our service is designed for executives who value consistency,
        privacy, and punctuality.
      </p>
    `
    },

    {
        id: 3,
        title: "One Car. One Standard.",
        slug: "one-car-one-standard",
        excerpt: "Why we operate a single luxury vehicle — and why it matters.",
        image: blogHero,
        date: "Jan 07, 2026",
        featured: true,
        content: `
      <p>
        Instead of offering many vehicles, we focus on one exceptional standard.
      </p>

      <p>
        Our Mercedes-Benz A-Class is carefully selected, detailed daily,
        and maintained to premium specifications.
      </p>

      <p>
        Fewer cars. Higher quality. Consistent experience.
      </p>
    `
    },

    {
        id: 4,
        title: "Arrive in Style: Events & Weddings",
        slug: "events-and-weddings",
        excerpt: "Transportation for life’s most important moments.",
        image: blogHero,
        date: "Jan 05, 2026",
        content: `
      <p>
        Special occasions deserve special care.
      </p>

      <p>
        From weddings to gala dinners, our chauffeur ensures you arrive composed,
        comfortable, and on time.
      </p>
    `
    },

    {
        id: 5,
        title: "Fixed Pricing vs Metered Transport",
        slug: "fixed-pricing-vs-metered",
        excerpt: "Why transparent pricing creates better travel experiences.",
        image: blogHero,
        date: "Jan 03, 2026",
        content: `
      <p>
        With Luxe Transfers, your price is confirmed before your journey begins.
      </p>

      <p>
        No surprises. No surge pricing. No hidden fees.
      </p>
    `
    },

    {
        id: 6,
        title: "Inside Our Chauffeur Standards",
        slug: "chauffeur-standards",
        excerpt: "What professionalism looks like behind the wheel.",
        image: blogHero,
        date: "Jan 01, 2026",
        content: `
      <p>
        Our chauffeurs are trained in customer etiquette, route planning,
        defensive driving, and discretion.
      </p>

      <p>
        Every journey reflects our brand values.
      </p>
    `
    },

    {
        id: 7,
        title: "Hotel Transfers Across Nairobi",
        slug: "hotel-transfers-nairobi",
        excerpt: "Serving Nairobi’s most respected hotels with precision.",
        image: blogHero,
        date: "Dec 30, 2025",
        content: `
      <p>
        We provide transfers to and from Nairobi’s leading hotels,
        residences, and private locations.
      </p>

      <p>
        Whether Westlands, Karen, CBD or surrounding areas,
        we deliver consistent luxury.
      </p>
    `
    }

];
