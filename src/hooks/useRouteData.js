import { useState, useEffect, useCallback } from "react";

export const useRouteData = () => {
  const [routeData, setRouteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRouteData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/dummy-route.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Invalid route data format");
      }

      setRouteData(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error loading route data:", err);
      setError(`Failed to load route data: ${err.message}`);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRouteData();
  }, [loadRouteData]);

  return { routeData, isLoading, error, loadRouteData };
};
