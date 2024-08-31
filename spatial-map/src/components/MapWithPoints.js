import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pointsData from '../components/pointsData.json';  // Importing the JSON data directly
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapWithPoints = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
     
    setTimeout(() => {
      setPoints(pointsData);   
    }, 1000);  
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {points.map(point => (
        <Marker key={point.id} position={[point.latitude, point.longitude]}>
          <Popup>
            {point.name}<br />Latitude: {point.latitude}, Longitude: {point.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithPoints;
