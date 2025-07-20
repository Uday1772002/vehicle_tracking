import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import { getRouteCenter } from "../../utils/calculations";
import { createVehicleIcon } from "../../utils/mapIcons";
import "./VehicleMap.css";

const VehicleMap = ({
  routeData,
  currentPosition,
  traversedPath,
  speed,
  isPlaying,
  currentIndex,
}) => {
  const fullRoute = routeData.map((point) => [point.latitude, point.longitude]);
  const routeCenter = getRouteCenter(routeData);
  const vehicleIcon = createVehicleIcon();

  return (
    <div className="map-wrapper">
      <MapContainer
        center={routeCenter || currentPosition}
        zoom={15}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Full route - blue dashed line */}
        <Polyline
          positions={fullRoute}
          color="#2196F3"
          weight={4}
          opacity={0.7}
          dashArray="12, 8"
        />

        {/* Traversed path - green solid line */}
        <Polyline
          positions={traversedPath}
          color="#4CAF50"
          weight={6}
          opacity={0.9}
        />

        {/* Vehicle marker */}
        <Marker position={currentPosition} icon={vehicleIcon}>
          <Popup className="vehicle-popup">
            <div className="popup-content">
              <h3>🚗 Vehicle Information</h3>
              <div className="popup-info">
                <p>
                  <strong>Latitude:</strong> {currentPosition[0].toFixed(6)}
                </p>
                <p>
                  <strong>Longitude:</strong> {currentPosition[1].toFixed(6)}
                </p>
                <p>
                  <strong>Speed:</strong> {speed.toFixed(2)} km/h
                </p>
                <p>
                  <strong>Status:</strong>
                  <span
                    className={`status-badge ${
                      isPlaying ? "moving" : "stopped"
                    }`}
                  >
                    {isPlaying ? "🟢 Moving" : "🔴 Stopped"}
                  </span>
                </p>
                <p>
                  <strong>Progress:</strong> {currentIndex + 1} of{" "}
                  {routeData.length} points
                </p>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default VehicleMap;
