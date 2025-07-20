import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <h1>🚗 Vehicle Movement Tracker</h1>
          <p className="header-subtitle">
            Real-time Vehicle Simulation | Blockly Technologies Assignment
          </p>
        </div>
        <div className="header-features">
          <div className="feature-badge">
            <span className="feature-icon">🗺️</span>
            <span className="feature-text">Live Tracking</span>
          </div>
          <div className="feature-badge">
            <span className="feature-icon">📊</span>
            <span className="feature-text">Real-time Data</span>
          </div>
          <div className="feature-badge">
            <span className="feature-icon">🎯</span>
            <span className="feature-text">Route Simulation</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
