import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import styles from './FlightMap.module.css';

const FlightMap = ({ mapCenter, routeData, polylineData }) => {
  return (
    <div className={styles.mapview}>
      <div className={styles.map} id="map">
        <MapContainer center={mapCenter} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {routeData.map(route => (
            <Marker key={route.timestamp} position={[route.lat, route.lng]} />
          ))}
          <Polyline positions={polylineData}></Polyline>
        </MapContainer>
      </div>
    </div>
  );
};

export default FlightMap;
