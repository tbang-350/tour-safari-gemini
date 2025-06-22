'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
// Do NOT import 'leaflet' here, it will be imported dynamically.

const arushaPosition: [number, number] = [-3.3869, 36.6829]; // Coordinates for Arusha

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    // Use a ref to hold the map instance. This helps with cleanup.
    const mapInstanceRef = useRef<any>(null); // Use 'any' to avoid type issues with L before it's imported.

    useEffect(() => {
        // This effect runs only once on the client-side after the component mounts.
        // We check if the map has already been initialized to prevent re-initialization in Strict Mode.
        if (mapContainerRef.current && !mapInstanceRef.current) {
            import('leaflet').then(L => {
                // Store the instance in the ref
                mapInstanceRef.current = L.map(mapContainerRef.current!).setView(arushaPosition, 14);

                // Add the tile layer
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(mapInstanceRef.current);

                // Define and add the marker
                const defaultIcon = new L.Icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });

                L.marker(arushaPosition, { icon: defaultIcon })
                    .addTo(mapInstanceRef.current)
                    .bindPopup('<b>Safari Navigator HQ</b><br />Sokoine Road, Arusha, Tanzania');
            });
        }

        // The cleanup function is crucial for React's Strict Mode.
        // It runs when the component unmounts.
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []); // The empty dependency array ensures this effect runs only once.

    // This div is the container for the map. It's a placeholder until the map is loaded.
    return <div ref={mapContainerRef} className="h-[400px] w-full rounded-lg shadow-lg bg-muted" />;
};

export default Map;
