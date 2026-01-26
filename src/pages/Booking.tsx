import { useLocation } from "react-router-dom";
import { useState } from "react";
import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import type { RouteInfo } from "../utils/routeCalculator";

const Booking = () => {
    const location = useLocation();
    const routeInfo = location.state?.routeInfo as RouteInfo | null;

    const [service, setService] = useState("Airport Transfer");
    const [airport, setAirport] = useState(routeInfo?.route.split(" → ")[0] || "JKIA");
    const [hotel, setHotel] = useState(routeInfo?.route.split(" → ")[1] || "");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState(1);

    const price =
        routeInfo
            ? routeInfo.baseFare + routeInfo.peakSurcharge + passengers * 1000
            : 0;

    return (
        <section className="booking-page">
            <div className="booking-layout">
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

                <BookingSummary
                    service={service}
                    from={airport}
                    to={hotel}
                    date={date}
                    time={time}
                    passengers={passengers}
                    price={price}
                />
            </div>
        </section>
    );
};

export default Booking;
