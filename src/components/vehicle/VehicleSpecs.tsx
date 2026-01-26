import React from "react";

interface VehicleSpecsProps {
    seats: number;
    luggage: number;
    transmission: string;
    fuel: string;
}

const VehicleSpecs: React.FC<VehicleSpecsProps> = ({
                                                       seats,
                                                       luggage,
                                                       transmission,
                                                       fuel,
                                                   }) => {
    return (
        <div className="vehicle-specs-grid">
            <div className="spec-item">
                <span>Seats</span>
                <strong>{seats}</strong>
            </div>

            <div className="spec-item">
                <span>Luggage</span>
                <strong>{luggage}</strong>
            </div>

            <div className="spec-item">
                <span>Transmission</span>
                <strong>{transmission}</strong>
            </div>

            <div className="spec-item">
                <span>Fuel</span>
                <strong>{fuel}</strong>
            </div>
        </div>
    );
};

export default VehicleSpecs;
