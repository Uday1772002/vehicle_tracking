import React from "react";
import "./ControlPanel.css";

const ControlPanel = ({
  isPlaying,
  onPlayPause,
  onReset,
  currentIndex,
  totalPoints,
  isDisabled,
}) => {
  return (
    <div className="control-panel">
      <div className="controls-left">
        <button
          className={`btn btn-${isPlaying ? "pause" : "play"}`}
          onClick={onPlayPause}
          disabled={isDisabled}
        >
          {isPlaying ? "⏸️" : "▶️"} {isPlaying ? "Pause" : "Play"}
        </button>

        <button className="btn btn-reset" onClick={onReset}>
          🔄 Reset
        </button>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(currentIndex / (totalPoints - 1)) * 100}%` }}
          />
        </div>
        <span className="progress-text">
          {currentIndex + 1} / {totalPoints}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
