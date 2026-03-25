import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import MapRoute from "../pages/MapRoute";
import type { RouteInfo } from "../utils/routeCalculator";

/* ---------------- PRICING CONSTANTS ---------------- */

const BASE_FARE = 3000;
const PRICE_PER_KM = 150;
const PASSENGER_FEE = 1000;
const PEAK_MULTIPLIER = 1.25;

const isPeakHour = (time: string) => {
    if (!time) return false;
    const hour = Number(time.split(":")[0]);
    return (hour >= 6 && hour <= 9) || (hour >= 16 && hour <= 19);
};

/* ---------------- COMPONENT ---------------- */

const Booking = () => {

    const location = useLocation();
    const routeInfo = location.state?.routeInfo as RouteInfo | null;

    const [service, setService] = useState("Airport Transfer");

    const [airport, setAirport] = useState(
        routeInfo?.route.split(" → ")[0] || "JKIA"
    );

    const [hotel, setHotel] = useState(
        routeInfo?.route.split(" → ")[1] || ""
    );

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState(1);

    const [distanceKm, setDistanceKm] = useState(0);
    console.log("BOOKING DISTANCE STATE:", distanceKm);


    /* ---------------- LIVE PRICE ---------------- */

    const fareBreakdown = useMemo(() => {
        if (distanceKm <= 0) {
            return {
                base: 0,
                distance: 0,
                passengers: 0,
                peak: 0,
                total: 0,
            };
        }

        const base = BASE_FARE;
        const distanceFare = distanceKm * PRICE_PER_KM;
        const passengerFare = passengers * PASSENGER_FEE;

        let subtotal = base + distanceFare + passengerFare;

        let peakCharge = 0;
        if (isPeakHour(time)) {
            peakCharge = subtotal * (PEAK_MULTIPLIER - 1);
            subtotal += peakCharge;
        }

        return {
            base: Math.round(base),
            distance: Math.round(distanceFare),
            passengers: Math.round(passengerFare),
            peak: Math.round(peakCharge),
            total: Math.round(subtotal),
        };
    }, [distanceKm, passengers, time]);

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
                        setPickupAddress={setAirport}
                        destinationAddress={hotel}
                        setDestinationAddress={setHotel}
                        setDistance={setDistanceKm}
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
                />

            </div>
        </section>
    );
};

export default Booking;
