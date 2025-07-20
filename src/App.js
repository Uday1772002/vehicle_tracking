import React from "react";
import "leaflet/dist/leaflet.css";
import "./App.css";

// Components
import Header from "./components/header/header";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import VehicleMap from "./components/VehicleMap/VehicleMap";
import {
  LoadingScreen,
  ErrorScreen,
} from "./components/LoadingError/LoadingError";

// Custom Hooks
import { useRouteData } from "./hooks/useRouteData";
import { useVehicleMovement } from "./hooks/useVehicleMovement";

// Fix leaflet default markers
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function App() {
  // Load route data
  const { routeData, isLoading, error, loadRouteData } = useRouteData();

  // Handle vehicle movement
  const {
    currentPosition,
    currentIndex,
    isPlaying,
    traversedPath,
    speed,
    elapsedTime,
    handlePlayPause,
    handleReset,
  } = useVehicleMovement(routeData);

  // Loading state
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Error state
  if (error) {
    return <ErrorScreen error={error} onRetry={loadRouteData} />;
  }

  // No data state
  if (!currentPosition || routeData.length === 0) {
    return (
      <ErrorScreen error="No route data available" onRetry={loadRouteData} />
    );
  }

  return (
    <div className="app">
      <Header />

      <ControlPanel
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onReset={handleReset}
        currentIndex={currentIndex}
        totalPoints={routeData.length}
        isDisabled={currentIndex >= routeData.length - 1}
      />

      <InfoPanel
        currentPosition={currentPosition}
        speed={speed}
        elapsedTime={elapsedTime}
        isPlaying={isPlaying}
      />

      <VehicleMap
        routeData={routeData}
        currentPosition={currentPosition}
        traversedPath={traversedPath}
        speed={speed}
        isPlaying={isPlaying}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default App;
