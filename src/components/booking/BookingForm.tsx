import React from "react";

interface BookingFormProps {
    service: string;
    setService: (value: string) => void;

    airport: string;
    setAirport: (value: string) => void;

    hotel: string;
    setHotel: (value: string) => void;

    date: string;
    setDate: (value: string) => void;

    time: string;
    setTime: (value: string) => void;

    passengers: number;
    setPassengers: (value: number) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
                                                     service,
                                                     setService,
                                                     airport,
                                                     setAirport,
                                                     hotel,
                                                     setHotel,
                                                     date,
                                                     setDate,
                                                     time,
                                                     setTime,
                                                     passengers,
                                                     setPassengers
                                                 }) => {
    return (
        <section className="booking-wrapper">
            <form className="booking-form">
                {/* Service */}
                <div className="booking-field">
                    <label>Service</label>
                    <select
                        value={service}
                        onChange={e => setService(e.target.value)}
                    >
                        <option>Airport Transfer</option>
                        <option>Business Transfer</option>
                        <option>Events & Weddings</option>
                    </select>
                </div>

                {/* From */}
                <div className="booking-field">
                    <label>From</label>
                    <select
                        value={airport}
                        onChange={e => setAirport(e.target.value)}
                    >
                        <option value="JKIA">JKIA Airport</option>
                        <option value="Wilson">Wilson Airport</option>
                    </select>
                </div>

                {/* To */}
                <div className="booking-field">
                    <label>To</label>
                    <input
                        type="text"
                        value={hotel}
                        placeholder="Hotel or destination"
                        onChange={e => setHotel(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div className="booking-field">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>

                {/* Time */}
                <div className="booking-field">
                    <label>Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </div>

                {/* Passengers */}
                <div className="booking-field">
                    <label>Passengers</label>
                    <input
                        type="number"
                        min={1}
                        max={4}
                        value={passengers}
                        onChange={e => setPassengers(Number(e.target.value))}
                    />
                </div>
            </form>
        </section>
    );
};

export default BookingForm;
