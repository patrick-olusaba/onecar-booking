import {useState, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/Hero";
import HeroServices from "../components/hero/HeroServices";
import TrustStrip from "../components/trust/TrustStrip";
import BookingForm from "../components/booking/BookingForm";
import RouteInfoPanel from "../components/booking/RouteInfoPanel.tsx";
import StickyBookingBar from "../components/booking/StickyBookingBar";
import WhyChooseUs from "../components/why/WhyChooseUs";
import VehicleShowcase from "../components/vehicle/ VehicleShowcase";
import VehicleGallery from "../components/vehicle/VehicleGallery";
import Testimonials from "../components/testimonials/Testimonials";
import CtaBanner from "../components/cta/CtaBanner";
import HotelsGallery from "../components/hotels/HotelsGallery";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import { calculateRoute } from "../utils/routeCalculator";

const Home = () => {
    const navigate = useNavigate();
    const [service, setService] = useState("Airport Transfer");
    const [airport, setAirport] = useState("JKIA");
    const [distanceKm] = useState(0);
    const [hotel, setHotel] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState(1);

    const routeInfo = useMemo(() => {
        if (!hotel || !time || distanceKm <= 0) return null;
        return calculateRoute(airport, hotel, time, distanceKm);
    }, [airport, hotel, time, distanceKm]);

    return (
        <>
            <Hero />
            <TrustStrip />
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
                distanceKm={routeInfo?.distance ?? 0}
                onSubmit={() =>
                    navigate("/booking", {
                        state: {
                            prefill: { service, airport, hotel, date, time, passengers },
                        },
                    })
                }
            />

            <WhyChooseUs />

            <VehicleShowcase />
            <VehicleGallery />

            <CtaBanner />

            <Testimonials />

            <HotelsGallery onSelectHotel={setHotel} />

            <FeaturedBlog />

            <RouteInfoPanel routeInfo={routeInfo} />
            <StickyBookingBar routeInfo={routeInfo} />
        </>
    );
};

export default Home;
