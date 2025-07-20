import React from "react";
import "./InfoPanel.css";

const InfoPanel = ({ currentPosition, speed, elapsedTime, isPlaying }) => {
  return (
    <div className="info-panel">
      <div className="info-card">
        <div className="info-icon">📍</div>
        <div className="info-content">
          <div className="info-label">Current Position</div>
          <div className="info-value">
            {currentPosition[0].toFixed(6)}, {currentPosition[1].toFixed(6)}
          </div>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">🚀</div>
        <div className="info-content">
          <div className="info-label">Speed</div>
          <div className="info-value">{speed.toFixed(2)} km/h</div>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">⏱️</div>
        <div className="info-content">
          <div className="info-label">Elapsed Time</div>
          <div className="info-value">{elapsedTime}s</div>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">📊</div>
        <div className="info-content">
          <div className="info-label">Status</div>
          <div
            className={`info-value status-${isPlaying ? "moving" : "stopped"}`}
          >
            {isPlaying ? "Moving" : "Stopped"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
