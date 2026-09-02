import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import MapRoute from "../pages/MapRoute";
import type { RouteStatus } from "../pages/MapRoute";
import type { RouteInfo } from "../utils/routeCalculator";
import { calculateFare } from "../utils/pricing";

/* ---------------- COMPONENT ---------------- */

const Booking = () => {

    const location = useLocation();
    const routeInfo = location.state?.routeInfo as RouteInfo | null;
    const prefill = location.state?.prefill as Partial<{
        service: string;
        airport: string;
        hotel: string;
        date: string;
        time: string;
        passengers: number;
    }> | undefined;

    const [service, setService] = useState(prefill?.service ?? "Airport Transfer");

    const [airport, setAirport] = useState(
        prefill?.airport ?? routeInfo?.route.split(" → ")[0] ?? "JKIA"
    );

    const [hotel, setHotel] = useState(
        prefill?.hotel ?? routeInfo?.route.split(" → ")[1] ?? ""
    );

    const [date, setDate] = useState(prefill?.date ?? "");
    const [time, setTime] = useState(prefill?.time ?? "");
    const [passengers, setPassengers] = useState(prefill?.passengers ?? 1);

    const [distanceKm, setDistanceKm] = useState(0);
    const [routeStatus, setRouteStatus] = useState<RouteStatus>("idle");


    /* ---------------- LIVE PRICE ---------------- */

    const fareBreakdown = useMemo(
        () =>
            distanceKm > 0
                ? calculateFare(distanceKm, passengers, time)
                : { base: 0, distance: 0, passengers: 0, peak: 0, total: 0 },
        [distanceKm, passengers, time]
    );

    const price = fareBreakdown.total;


    /* ---------------- UI ---------------- */

    return (
        <section className="booking-page">
            <div className="booking-layout">

                {/* LEFT */}
                <div>

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

                        distanceKm={distanceKm}
                    />

                    <MapRoute
                        key={`${airport}-${hotel}`}
                        pickupAddress={airport}
                        destinationAddress={hotel}
                        setDistance={setDistanceKm}
                        onStatus={setRouteStatus}
                    />

                </div>

                {/* RIGHT */}
                <BookingSummary
                    service={service}
                    from={airport}
                    to={hotel}
                    date={date}
                    time={time}
                    passengers={passengers}
                    distance={distanceKm}
                    price={price}
                    breakdown={fareBreakdown}
                    routeStatus={routeStatus}
                />

            </div>
        </section>
    );
};

export default Booking;
