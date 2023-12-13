// componentes/MapaUbicacion.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaUbicacion = ({ ubicacion }) => {
  return (
    <MapContainer
      center={[ubicacion.latitud, ubicacion.longitud]}
      zoom={12}
      style={{ height: '300px', width: '100%', marginTop: '20px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[ubicacion.latitud, ubicacion.longitud]}>
        <Popup>Ubicación de la sucursal</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaUbicacion;
