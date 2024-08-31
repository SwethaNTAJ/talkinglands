// src/MapContainer.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainerComponent = () => {
  const [polygonData, setPolygonData] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('YOUR_SPATIAL_API_ENDPOINT_FOR_POLYGONS')
      .then(response => response.json())
      .then(data => {
        setPolygonData(data);
      })
      .catch(error => console.error('Error fetching polygon data:', error));
  }, []);

  const polygonPositions = polygonData.map(polygon => polygon.coordinates);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {polygonPositions.map((positions, index) => (
        <Polygon key={index} positions={positions} color="blue" />
      ))}
    </MapContainer>
  );
};

export default MapContainerComponent;
