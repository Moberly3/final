import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const position = [50.035393, 14.329337]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: 400, width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          beauty starts there <br /> Your style 
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
