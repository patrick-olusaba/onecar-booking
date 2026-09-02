import React, { useCallback, useEffect, useState } from "react";
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

export type RouteStatus = "idle" | "locating" | "routing" | "ok" | "error";

interface MapRouteProps {
    pickupAddress: string;
    destinationAddress: string;
    setDistance: (km: number) => void;
    onStatus?: (status: RouteStatus) => void;
}

/* ---------------- CONSTANTS ---------------- */

const NAIROBI_CENTER: LatLng = {
    lat: -1.286389,
    lng: 36.817223,
};

/* Routing runs on OSRM, which needs no API key. The previous provider
   (OpenRouteService) required one, and a revoked key meant every fare on the
   site silently came out at zero.

   ponytail: this is the public demo server -- fair use, no SLA. If traffic
   grows, self-host OSRM or move to a keyed provider. */
const OSRM_ROUTE_URL = "https://router.project-osrm.org/route/v1/driving";

/* Nominatim allows roughly one request a second. The destination is typed,
   so we wait for the typing to stop before asking. */
const GEOCODE_DEBOUNCE_MS = 600;

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
                                               onStatus,
                                           }) => {
    const [pickup, setPickup] = useState<LatLng | null>(null);
    const [destination, setDestination] = useState<LatLng | null>(null);

    const [route, setRoute] = useState<LatLng[]>([]);
    const [animatedRoute, setAnimatedRoute] = useState<LatLng[]>([]);
    const [status, setStatus] = useState<RouteStatus>("idle");
    const [error, setError] = useState<string | null>(null);

    const report = useCallback(
        (next: RouteStatus) => {
            setStatus(next);
            onStatus?.(next);
        },
        [onStatus]
    );

    /* A fare must never outlive the trip it was quoted for. Any change to
       either endpoint clears the distance before we go and fetch a new one. */
    const clearDistance = useCallback(() => {
        setDistance(0);
        setRoute([]);
        setAnimatedRoute([]);
    }, [setDistance]);

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
        clearDistance();

        if (pickupAddress.length <= 3) {
            setPickup(null);
            return;
        }

        report("locating");
        const timer = setTimeout(() => {
            geocodeAddress(pickupAddress).then((point) => {
                setPickup(point);
                if (!point) {
                    setError(`We could not find "${pickupAddress}".`);
                    report("error");
                }
            });
        }, GEOCODE_DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [pickupAddress, clearDistance, report]);

    /* The destination is a free-text field, so without a debounce this fired
       a geocode request on every keystroke -- which breaks Nominatim's usage
       policy and gets the site rate-limited. */
    useEffect(() => {
        clearDistance();

        if (destinationAddress.length <= 3) {
            setDestination(null);
            setError(null);
            report("idle");
            return;
        }

        report("locating");
        const timer = setTimeout(() => {
            geocodeAddress(destinationAddress).then((point) => {
                setDestination(point);
                if (!point) {
                    setError(`We could not find "${destinationAddress}". Try adding the area, e.g. "Sarova Panafric, Nairobi".`);
                    report("error");
                }
            });
        }, GEOCODE_DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [destinationAddress, clearDistance, report]);

    /* ---------------- ROUTE FETCH ---------------- */

    useEffect(() => {
        if (!pickup || !destination) return;

        let cancelled = false;

        const fetchRoute = async () => {
            report("routing");
            setError(null);

            try {
                const res = await fetch(
                    `${OSRM_ROUTE_URL}/${pickup.lng},${pickup.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`
                );

                /* Every one of these used to be a bare `return`, so a failing
                   router looked exactly like a route still being calculated. */
                if (!res.ok) {
                    console.error("Routing request failed", res.status, res.statusText);
                    throw new Error(
                        "We could not price this route automatically. Send us the trip and we will quote it."
                    );
                }

                const data = await res.json();
                const best = data.routes?.[0];
                const coords = best?.geometry?.coordinates;
                const meters = best?.distance;

                if (
                    data.code !== "Ok" ||
                    !coords ||
                    coords.length < 2 ||
                    typeof meters !== "number"
                ) {
                    throw new Error("No driving route between those two points.");
                }

                const cleanCoords: LatLng[] = coords
                    .map(([lng, lat]: number[]) =>
                        lat != null && lng != null ? { lat, lng } : null
                    )
                    .filter(Boolean) as LatLng[];

                if (cleanCoords.length < 2) {
                    throw new Error("No driving route between those two points.");
                }

                if (cancelled) return;

                setDistance(Number((meters / 1000).toFixed(2)));
                setRoute(cleanCoords);
                setAnimatedRoute([]);
                report("ok");
            } catch (err) {
                if (cancelled) return;
                /* Fail with a zero fare, never a stale one. */
                setDistance(0);
                setRoute([]);
                setError(
                    err instanceof Error ? err.message : "Could not calculate the route."
                );
                report("error");
            }
        };

        fetchRoute();

        return () => {
            cancelled = true;
        };
    }, [pickup, destination, setDistance, report]);

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
            {(status === "locating" || status === "routing") && (
                <div className="route-loading" role="status">
                    {status === "locating"
                        ? "Finding that address…"
                        : "Calculating the driving route…"}
                </div>
            )}

            {status === "error" && error && (
                <div className="route-error" role="alert">
                    {error}
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
