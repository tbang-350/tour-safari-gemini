'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const arushaPosition: [number, number] = [-3.3869, 36.6829]; // Coordinates for Arusha

const Map = () => {
    // This state will be false on the server and true on the client after mounting.
    const [isMounted, setIsMounted] = useState(false);

    // This effect runs only on the client, after the component has mounted.
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // On the server or before the client has mounted, we render a placeholder.
    if (!isMounted) {
        return <div className="h-[400px] w-full rounded-lg shadow-lg bg-muted animate-pulse" />;
    }
    
    // We can only require these client-side libraries after we've confirmed we're on the client.
    const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
    const L = require('leaflet');
    
    const defaultIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <MapContainer 
            center={arushaPosition} 
            zoom={14} 
            scrollWheelZoom={false} 
            className="h-[400px] w-full rounded-lg shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={arushaPosition} icon={defaultIcon}>
            <Popup>
              <b>Safari Navigator HQ</b>
              <br />
              Sokoine Road, Arusha, Tanzania
            </Popup>
          </Marker>
        </MapContainer>
    );
};

export default Map;
