const ORS_KEY = import.meta.env.VITE_ORS_API_KEY;

if (!ORS_KEY) {
    throw new Error("❌ OpenRouteService API key missing in .env");
}

export const orsFetch = async (url: string) => {
    const res = await fetch(url, {
        headers: {
            Authorization: ORS_KEY,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`ORS error: ${res.status}`);
    }

    return res.json();
};
