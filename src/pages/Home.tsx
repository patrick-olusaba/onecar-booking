import { useState, useMemo } from "react";
import Hero from "../components/hero/Hero";
import HeroServices from "../components/hero/HeroServices";
import BookingForm from "../components/booking/BookingForm";
import RouteInfoPanel from "../components/booking/RouteInfo";
import StickyBookingBar from "../components/booking/StickyBookingBar";
import VehicleShowcase from "../components/vehicle/ VehicleShowcase.tsx";
import VehicleGallery from "../components/vehicle/VehicleGallery";
import HotelsGallery from "../components/hotels/HotelsGallery";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import { calculateRoute } from "../utils/routeCalculator";
import type { RouteInfo } from "../utils/routeCalculator";

const Home = () => {
    const [service, setService] = useState("Airport Transfer");
    const [airport, setAirport] = useState("JKIA");
    const [hotel, setHotel] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState(1);

    // ✅ Derived, not stored
    const routeInfo: RouteInfo | null = useMemo(() => {
        if (!hotel || !time) return null;
        return calculateRoute(airport, hotel, time);
    }, [airport, hotel, time]);

    return (
        <>
            <Hero />
            <HeroServices />

            <BookingForm
                service={service}
                setService={setService}
                airport={airport}
                setAirport={setAirport}
                hotel={hotel}
                setHotel={setHotel}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                passengers={passengers}
                setPassengers={setPassengers}
            />

            <VehicleShowcase />
            <VehicleGallery />

            {/* Clicking hotel auto-fills BookingForm */}
            <HotelsGallery onSelectHotel={setHotel} />

            <FeaturedBlog />

            <RouteInfoPanel routeInfo={routeInfo} />

            <StickyBookingBar
                routeInfo={routeInfo}
            />
        </>
    );
};

export default Home;
