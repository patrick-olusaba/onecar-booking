import React, { useEffect, useState } from "react";

/**
 * The spine of the site. A transfer is a line between two points, so the page
 * is drawn as one: the rail fills as you travel down it, from the airport at
 * the top to the destination at the bottom.
 */
const ItineraryRail: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        const measure = () => {
            const travelled = window.scrollY;
            const total =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? Math.min(1, travelled / total) : 0);
            frame = 0;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div className="rail" aria-hidden="true">
            <span className="rail-label rail-label--origin">JKIA</span>

            <div className="rail-track">
                <div
                    className="rail-fill"
                    style={{ transform: `scaleY(${progress})` }}
                />
                <div
                    className="rail-car"
                    style={{ top: `${progress * 100}%` }}
                />
            </div>

            <span className="rail-label rail-label--destination">Nairobi</span>
        </div>
    );
};

export default ItineraryRail;
