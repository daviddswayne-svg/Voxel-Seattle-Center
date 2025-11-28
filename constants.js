
import * as THREE from 'three';

// Palette
export const COLORS = {
  SKY: '#87CEEB',
  CONCRETE: '#C0C0C0',
  CONCRETE_DARK: '#808080',
  RED_TRAIN: '#E31837',
  BLUE_TRAIN: '#005696',
  GLASS: '#ADD8E6',
  WINDOW: '#1A1A1A',
  STEEL: '#555555',
  ROOF: '#DDDDDD',
  VENT: '#333333'
};

// Dimensions
export const TRACK_HEIGHT = 12;
export const PIER_SPACING = 20;
export const TRAIN_LENGTH_RATIO = 0.01; 
export const CAR_GAP = 0.0005;

// Route Definition
// Track 1 (West/Inner Track)
const LEFT_POINTS = [
  new THREE.Vector3(7.5, TRACK_HEIGHT, 80), // Shortened to 80 (Wall is at 88)
  new THREE.Vector3(7.5, TRACK_HEIGHT, 0),
  new THREE.Vector3(7.5, TRACK_HEIGHT, -100),
  new THREE.Vector3(7.5, TRACK_HEIGHT, -200),
  new THREE.Vector3(-41.8, TRACK_HEIGHT, -258.2), // Apex Turn (Inside)
  new THREE.Vector3(-100, TRACK_HEIGHT, -277.5),
  new THREE.Vector3(-150, TRACK_HEIGHT, -277.5)
];

// Track 2 (East/Outer Track)
const RIGHT_POINTS = [
  new THREE.Vector3(12.5, TRACK_HEIGHT, 80), // Shortened to 80
  new THREE.Vector3(12.5, TRACK_HEIGHT, 0),
  new THREE.Vector3(12.5, TRACK_HEIGHT, -100),
  new THREE.Vector3(12.5, TRACK_HEIGHT, -200),
  new THREE.Vector3(-38.2, TRACK_HEIGHT, -261.8), // Apex Turn (Outside)
  new THREE.Vector3(-100, TRACK_HEIGHT, -282.5),
  new THREE.Vector3(-150, TRACK_HEIGHT, -282.5)
];

export const TRACK_LEFT = new THREE.CatmullRomCurve3(LEFT_POINTS, false, 'catmullrom', 0.2);
export const TRACK_RIGHT = new THREE.CatmullRomCurve3(RIGHT_POINTS, false, 'catmullrom', 0.2);

// Taxi Loop Definition (Battery Street Tunnel simulation)
const TAXI_POINTS = [
    // Surface: Westlake Northbound
    new THREE.Vector3(17.5, 0, 50), 
    new THREE.Vector3(17.5, 0, 0),
    new THREE.Vector3(17.5, 0, -150),
    
    // Tunnel Entrance Ramp (Dipping down)
    new THREE.Vector3(17.5, -2, -220),
    new THREE.Vector3(17.5, -12, -260),
    
    // Underground Loop (Turning Left under the city)
    new THREE.Vector3(10, -12, -290),
    new THREE.Vector3(2.5, -12, -260),
    
    // Underground Southbound (The Battery St Tunnel)
    new THREE.Vector3(2.5, -12, -100),
    new THREE.Vector3(2.5, -12, 0),
    
    // Exit Ramp (Rising back up near Westlake)
    new THREE.Vector3(2.5, 0, 40),
    
    // Surface U-Turn back to start
    new THREE.Vector3(2.5, 0, 60),
    new THREE.Vector3(10, 0, 65),
    new THREE.Vector3(17.5, 0, 50)
];

export const TAXI_PATH = new THREE.CatmullRomCurve3(TAXI_POINTS, true, 'catmullrom', 0.15);

export const CarType = {
  HEAD: 'HEAD',
  BODY: 'BODY',
  TAIL: 'TAIL'
};
