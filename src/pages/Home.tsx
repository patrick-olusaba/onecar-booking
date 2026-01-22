import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import HeroServices from "../components/hero/HeroServices.tsx";
import VehicleShowcase from "../components/vehicle/ VehicleShowcase.tsx";
import VehicleGallery from "../components/vehicle/VehicleGallery";
import BookingForm from "../components/booking/BookingForm";
import RouteInfoPanel from "../components/booking/RouteInfo";
import StickyBookingBar from "../components/booking/StickyBookingBar";
import HotelsGallery from "../components/hotels/HotelsGallery.tsx";
import { calculateRoute } from "../utils/routeCalculator";
import type { RouteInfo } from "../utils/routeCalculator";
import FeaturedBlog from "../components/blog/FeaturedBlog.tsx";

const Home: React.FC = () => {
    const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
    const [hotel, setHotel] = useState("");

    return (
        <>
            <Hero />
            <HeroServices />
            <BookingForm
                hotel={hotel}
                setHotel={setHotel}
                onSearch={(airport, hotel, _date, time) =>
                    setRouteInfo(calculateRoute(airport, hotel, time))
                }
            />
            <VehicleShowcase />
            <VehicleGallery />
            <HotelsGallery onSelectHotel={setHotel} />
            <FeaturedBlog />
            <RouteInfoPanel routeInfo={routeInfo} />

            <StickyBookingBar
                routeInfo={routeInfo}
                onBook={() =>
                    document
                        .querySelector(".booking-wrapper")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            />
        </>
    );
};

export default Home;
