import { useState, useEffect, useCallback } from "react";
import { calculateSpeed } from "../utils/calculations";

export const useVehicleMovement = (routeData) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [traversedPath, setTraversedPath] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Initialize position when route data is available
  useEffect(() => {
    if (routeData.length > 0) {
      const startPosition = [routeData[0].latitude, routeData[0].longitude];
      setCurrentPosition(startPosition);
      setTraversedPath([startPosition]);
    }
  }, [routeData]);

  // Animation logic
  useEffect(() => {
    let interval;

    if (isPlaying && currentIndex < routeData.length - 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          if (nextIndex < routeData.length) {
            const nextPoint = routeData[nextIndex];
            const newPosition = [nextPoint.latitude, nextPoint.longitude];

            setCurrentPosition(newPosition);
            setTraversedPath((prev) => [...prev, newPosition]);

            // Calculate speed
            if (nextIndex > 0) {
              const currentSpeed = calculateSpeed(
                routeData[nextIndex - 1],
                routeData[nextIndex]
              );
              setSpeed(currentSpeed);
            }

            // Update elapsed time
            if (routeData[0].timestamp && nextPoint.timestamp) {
              const startTime = new Date(routeData[0].timestamp);
              const currentTime = new Date(nextPoint.timestamp);
              setElapsedTime((currentTime - startTime) / 1000);
            }

            return nextIndex;
          } else {
            setIsPlaying(false);
            return prevIndex;
          }
        });
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, routeData]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
    setSpeed(0);
    setElapsedTime(0);

    if (routeData.length > 0) {
      const startPosition = [routeData[0].latitude, routeData[0].longitude];
      setCurrentPosition(startPosition);
      setTraversedPath([startPosition]);
    }
  }, [routeData]);

  return {
    currentPosition,
    currentIndex,
    isPlaying,
    traversedPath,
    speed,
    elapsedTime,
    handlePlayPause,
    handleReset,
  };
};
