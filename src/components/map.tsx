'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// This is a workaround for a known issue with react-leaflet and Next.js
// It ensures the marker icons are loaded correctly.
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const arushaPosition: [number, number] = [-3.3869, 36.6829]; // Coordinates for Arusha

const Map = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="h-[400px] w-full rounded-lg shadow-lg bg-muted animate-pulse" />;
    }

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
      <Marker position={arushaPosition}>
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
