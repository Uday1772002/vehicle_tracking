export const calculateSpeed = (point1, point2) => {
  if (!point1 || !point2 || !point1.timestamp || !point2.timestamp) return 0;

  const time1 = new Date(point1.timestamp);
  const time2 = new Date(point2.timestamp);
  const timeDiff = (time2 - time1) / 1000;

  if (timeDiff === 0) return 0;

  const R = 6371; // Earth's radius in km
  const lat1 = (point1.latitude * Math.PI) / 180;
  const lat2 = (point2.latitude * Math.PI) / 180;
  const deltaLat = ((point2.latitude - point1.latitude) * Math.PI) / 180;
  const deltaLon = ((point2.longitude - point1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return (distance / timeDiff) * 3600; // km/h
};

export const getRouteCenter = (data) => {
  if (!data || data.length === 0) return null;

  const latSum = data.reduce((sum, point) => sum + point.latitude, 0);
  const lngSum = data.reduce((sum, point) => sum + point.longitude, 0);

  return [latSum / data.length, lngSum / data.length];
};
