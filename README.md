🚗 Vehicle Movement Tracker
A real-time vehicle simulation application built with React and Leaflet, showcasing smooth vehicle movement along predefined routes with interactive controls and live metadata display.

![Vehicle Tracker Demo](https://via.placeholder.com/800x400/667eea/ffffff?text= developed as part of the Blockly Technologies Frontend Developer Intern Assignment. The application demonstrates advanced frontend development skills including React state management, map integration, real-time animations, and responsive UI design.

✨ Features
Core Functionality
Real-time Vehicle Simulation: Vehicle marker moves smoothly along predefined GPS coordinates

Interactive Map: Powered by Leaflet with OpenStreetMap tiles

Route Visualization:

Blue dashed line showing the complete route

Green solid line extending as the vehicle moves (traversed path)

Playback Controls: Play, pause, and reset simulation with visual feedback

Progress Tracking: Real-time progress bar and point counter

Live Metadata Display
Current Position: Live GPS coordinates with 6-decimal precision

Speed Calculation: Real-time speed computation using Haversine formula

Elapsed Time: Time tracking from simulation start

Status Indicator: Visual status showing moving/stopped state

User Experience
Responsive Design: Optimized for desktop, tablet, and mobile devices

Professional UI: Modern glass-morphism design with gradient backgrounds

Smooth Animations: 60fps animations with CSS transitions

Error Handling: Graceful loading states and error recovery

🛠️ Tech Stack
Frontend Framework
React 18 - Component-based UI library

React Hooks - State management and lifecycle handling

Mapping & Visualization
Leaflet - Lightweight mapping library

React-Leaflet - React wrapper for Leaflet

OpenStreetMap - Free map tiles

Styling & Design
CSS3 - Modern styling with Flexbox and Grid

CSS Variables - Consistent theming

Responsive Design - Mobile-first approach

Development Tools
Create React App - Development environment

ES6+ JavaScript - Modern JavaScript features

Git - Version control

🚀 Quick Start
Prerequisites
Node.js (v14 or higher)

npm or yarn package manager

Installation
Clone the repository

bash
git clone https://github.com/Uday1772002/vehicle_tracking.git
cd vehicle-movement-tracker
Install dependencies

bash
npm install
Start development server

bash
npm start
Open in browser
Navigate to http://localhost:3000

📁 Project Structure
text
src/
├── components/
│ ├── Header/
│ │ ├── Header.js
│ │ └── Header.css
│ ├── ControlPanel/
│ │ ├── ControlPanel.js
│ │ └── ControlPanel.css
│ ├── InfoPanel/
│ │ ├── InfoPanel.js
│ │ └── InfoPanel.css
│ ├── VehicleMap/
│ │ ├── VehicleMap.js
│ │ └── VehicleMap.css
│ └── LoadingError/
│ ├── LoadingError.js
│ └── LoadingError.css
├── hooks/
│ ├── useRouteData.js
│ └── useVehicleMovement.js
├── utils/
│ ├── calculations.js
│ └── mapIcons.js
├── App.js
├── App.css
└── index.js

public/
└── dummy-route.json
🗺️ Route Data Format
The application uses a JSON file with GPS coordinates and timestamps:

json
[
{
"latitude": 17.385044,
"longitude": 78.486671,
"timestamp": "2024-07-20T10:00:00Z"
},
{
"latitude": 17.385200,
"longitude": 78.486800,
"timestamp": "2024-07-20T10:00:05Z"
}
]
⚡ Key Implementation Details
Custom Hooks
useRouteData: Handles JSON data fetching and error management

useVehicleMovement: Manages vehicle position, animation, and controls

Calculations
Speed Calculation: Haversine formula for accurate distance measurement

Route Centering: Automatic map bounds calculation

Smooth Animation: setInterval with proper cleanup for memory efficiency

Performance Optimizations
useCallback: Prevents unnecessary re-renders

Component Separation: Modular architecture for better maintainability

Efficient State Updates: Optimized React state management

🎮 How to Use
Load the Application: The map loads with the vehicle at the starting position

Start Simulation: Click the "Play" button to begin vehicle movement

Monitor Progress: Watch the real-time metadata updates

Control Playback: Use pause to stop and reset to restart from beginning

Explore the Map: Zoom and pan to explore the route area
