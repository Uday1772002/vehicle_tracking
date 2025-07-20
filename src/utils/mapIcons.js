import L from "leaflet";

export const createVehicleIcon = () => {
  return new L.Icon({
    iconUrl:
      "data:image/svg+xml;base64," +
      btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#FF4444" width="40" height="40">
        <circle cx="20" cy="20" r="18" fill="#FF4444" stroke="white" stroke-width="3"/>
        <path d="M25 18c-0.3-1.2-1.4-2-2.7-2H17.2c-1.3 0-2.4 0.8-2.7 2L13 22v4c0 0.6 0.4 1 1 1h1c0.6 0 1-0.4 1-1v-0.5h8V26c0 0.6 0.4 1 1 1h1c0.6 0 1-0.4 1-1v-4l-1-4zM16 25c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.4 1-1 1zM24 25c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.4 1-1 1zM14.5 22L15.8 19h8.4L25.5 22h-11z" fill="white"/>
        <polygon points="20,12 22,16 24,12 20,8" fill="white"/>
      </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};
