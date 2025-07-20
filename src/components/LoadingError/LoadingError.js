import React from "react";
import "./LoadingError.css";

export const LoadingScreen = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <div className="loading-text">Loading Vehicle Tracker...</div>
  </div>
);

export const ErrorScreen = ({ error, onRetry }) => (
  <div className="error-container">
    <div className="error-card">
      <h2>⚠️ Error Loading Application</h2>
      <p>{error}</p>
      <button onClick={onRetry} className="retry-btn">
        🔄 Retry Loading
      </button>
    </div>
  </div>
);
