import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithInteraction = () => {
  const [clickedPosition, setClickedPosition] = useState(null);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setClickedPosition([e.latlng.lat, e.latlng.lng]);
         
      },
    });
    return null;
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "70vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <MapEvents />
      </MapContainer>
      {clickedPosition && (
        <div className="feature-info">
          Clicked Position: Latitude: {clickedPosition[0]}, Longitude: {clickedPosition[1]}
          
        </div>
      )}
    </div>
  );
};

export default MapWithInteraction;
