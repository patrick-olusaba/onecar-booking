import VehicleSpecs from "../components/vehicle/VehicleSpecs";
import carExterior from "../assets/images/car/exterior.jpg";
import carInterior from "../assets/images/car/interior.jpg";
import seatsImg from "../assets/images/car/seats.jpg";

const VehicleDetails = () => {
    return (
        <section className="vehicle-details-page">

            {/* HERO */}
            <div className="vehicle-details-hero">
                <h1>Mercedes-Benz A-Class</h1>
                <p>Luxury Chauffeur Vehicle</p>
            </div>

            {/* EXTERIOR */}
            <div className="vehicle-section">
                <img src={carExterior} />
                <div>
                    <h2>Exterior Design</h2>
                    <p>
                        Sleek aerodynamic body, LED headlights, premium paint finish and
                        signature Mercedes grille.
                    </p>
                </div>
            </div>

            {/* INTERIOR */}
            <div className="vehicle-section reverse">
                <img src={carInterior} />
                <div>
                    <h2>Interior Comfort</h2>
                    <p>
                        Leather upholstery, ambient lighting, climate control and premium trim.
                    </p>
                </div>
            </div>

            {/* SEATS */}
            <div className="vehicle-section">
                <img src={seatsImg} />
                <div>
                    <h2>Seating</h2>
                    <p>
                        Ergonomic leather seats with excellent legroom for up to 4 passengers.
                    </p>
                </div>
            </div>

            {/* SPECS (reuse existing component) */}
            <VehicleSpecs />

        </section>
    );
};

export default VehicleDetails;
