import React, { useState } from "react";

interface BookingFormProps {
    hotel: string;
    setHotel: (value: string) => void;
    onSearch: (
        airport: string,
        hotel: string,
        date: string,
        time: string
    ) => void;
}


const BookingForm: React.FC<BookingFormProps> = ({ onSearch }) => {
    const [airport, setAirport] = useState("JKIA");
    const [hotel, setHotel] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(airport, hotel, date, time);
    };

    return (
        <section className="booking-wrapper">
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="booking-field">
                    <label>From</label>
                    <select
                        value={airport}
                        onChange={(e) => setAirport(e.target.value)}
                    >
                        <option value="JKIA">JKIA Airport</option>
                        <option value="Wilson">Wilson Airport</option>
                    </select>
                </div>

                <div className="booking-field">
                    <label>To</label>
                    <input
                        type="text"
                        placeholder="Hotel or destination"
                        value={hotel}
                        onChange={(e) => setHotel(e.target.value)}
                        required
                    />
                </div>

                <div className="booking-field">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="booking-field">
                    <label>Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="booking-button">
                    Check Availability
                </button>
            </form>
        </section>
    );
};

export default BookingForm;
