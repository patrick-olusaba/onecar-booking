import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Polyline,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapRoute.css";

/* ---------------- ICONS ---------------- */

const pickupIcon = new L.Icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const destinationIcon = new L.Icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

/* ---------------- TYPES ---------------- */

interface LatLng {
    lat: number;
    lng: number;
}

// interface PlaceResult {
//     display_name: string;
//     lat: string;
//     lon: string;
// }

/* ---------------- PROPS ---------------- */

interface MapRouteProps {
    pickupAddress: string;
    destinationAddress: string;
    setDistance: (km: number) => void;
}

/* ---------------- CONSTANTS ---------------- */

const NAIROBI_CENTER: LatLng = {
    lat: -1.286389,
    lng: 36.817223,
};

const ORS_KEY = import.meta.env.VITE_ORS_API_KEY;

/* ---------------- FIT BOUNDS (SAFE) ---------------- */

const FitBounds: React.FC<{ route: LatLng[] }> = ({ route }) => {
    const map = useMap();

    useEffect(() => {
        if (
            route.length < 2 ||
            route.some(p => !p || p.lat == null || p.lng == null)
        )
            return;

        const bounds = route.map(p => [p.lat, p.lng]) as [number, number][];
        map.fitBounds(bounds, { padding: [40, 40], animate: true });
    }, [route, map]);

    return null;
};

/* ---------------- COMPONENT ---------------- */

const MapRoute: React.FC<MapRouteProps> = ({
                                               pickupAddress,
                                               destinationAddress,
                                               setDistance,
                                           }) => {
    const [pickup, setPickup] = useState<LatLng | null>(null);
    const [destination, setDestination] = useState<LatLng | null>(null);

    const [route, setRoute] = useState<LatLng[]>([]);
    const [animatedRoute, setAnimatedRoute] = useState<LatLng[]>([]);
    const [loadingRoute, setLoadingRoute] = useState(false);

    /* ---------------- GEOCODING ---------------- */

    const geocodeAddress = async (address: string) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    address
                )}&limit=1&countrycodes=ke`
            );
            const data = await res.json();
            if (!data.length) return null;

            return {
                lat: Number(data[0].lat),
                lng: Number(data[0].lon),
            };
        } catch {
            return null;
        }
    };

    useEffect(() => {
        if (pickupAddress.length > 3) {
            geocodeAddress(pickupAddress).then(setPickup);
        } else {
            setPickup(null);
        }
    }, [pickupAddress]);

    useEffect(() => {
        if (destinationAddress.length > 3) {
            geocodeAddress(destinationAddress).then(setDestination);
        } else {
            setDestination(null);
        }
    }, [destinationAddress]);

    /* ---------------- ROUTE FETCH ---------------- */

    useEffect(() => {
        if (!pickup || !destination || !ORS_KEY) return;

        const fetchRoute = async () => {
            setLoadingRoute(true);

            try {
                const res = await fetch(
                    `https://api.openrouteservice.org/v2/directions/driving-car?start=${pickup.lng},${pickup.lat}&end=${destination.lng},${destination.lat}`,
                    { headers: { Authorization: ORS_KEY } }
                );

                if (!res.ok) return;

                const data = await res.json();
                const coords = data.features?.[0]?.geometry?.coordinates;

                if (!coords || coords.length < 2) return;

                const cleanCoords: LatLng[] = coords
                    .map(([lng, lat]: number[]) =>
                        lat != null && lng != null ? { lat, lng } : null
                    )
                    .filter(Boolean) as LatLng[];

                if (cleanCoords.length < 2) return;

                const meters =
                    data.features[0].properties.summary.distance;

                setDistance(Number((meters / 1000).toFixed(2)));

                setRoute(cleanCoords);
                setAnimatedRoute([]);
            } finally {
                setLoadingRoute(false);
            }
        };

        fetchRoute();
    }, [pickup, destination, setDistance]);

    /* ---------------- ANIMATED DRAW ---------------- */

    useEffect(() => {
        if (route.length < 2) return;

        let i = 0;
        setAnimatedRoute([]);

        const interval = setInterval(() => {
            setAnimatedRoute(prev => {
                const point = route[i];
                if (!point) {
                    clearInterval(interval);
                    return prev;
                }
                return [...prev, point];
            });

            i++;
            if (i >= route.length) clearInterval(interval);
        }, 10);

        return () => clearInterval(interval);
    }, [route]);

    /* ---------------- UI ---------------- */

    return (
        <div className="map-route-wrapper">
            {loadingRoute && (
                <div className="route-loading">
                    Calculating best route…
                </div>
            )}

            <MapContainer
                center={NAIROBI_CENTER}
                zoom={12}
                style={{ height: 420 }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {pickup && <Marker position={pickup} icon={pickupIcon} />}
                {destination && (
                    <Marker
                        position={destination}
                        icon={destinationIcon}
                    />
                )}

                {animatedRoute.length > 1 && (
                    <>
                        <Polyline
                            positions={animatedRoute}
                            pathOptions={{
                                color: "#2563eb",
                                weight: 5,
                            }}
                        />
                        <FitBounds route={animatedRoute} />
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default MapRoute;
