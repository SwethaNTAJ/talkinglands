import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import L from 'leaflet';
import polygonData from '../components/polygonData.json'; // Import the JSON data
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapWithPolygons = () => {
  const [polygons, setPolygons] = useState([]);

  useEffect(() => {
     
    setTimeout(() => {
      setPolygons(polygonData); 
    }, 1000);  
  }, []);

  return (
    <MapContainer center={[51.51, -0.12]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {polygons.map(polygon => (
        <Polygon
          key={polygon.id}
          positions={polygon.coordinates}
          color="blue"
          weight={3}
          opacity={0.5}
        >
          <Popup>{polygon.name}</Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
};

export default MapWithPolygons;
