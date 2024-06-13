import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.142.0/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.142.0/examples/jsm/controls/OrbitControls.js';
// import { ImprovedNoise } from 'https://cdn.jsdelivr.net/npm/three@0.142.0/examples/jsm/math/ImprovedNoise.js';


// Initialize scene, camera, and renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const canvas = document.getElementById("canvas");

const width = window.innerWidth;
const height = window.innerHeight * 0.7; // Adjust the height based on the geometry size
canvas.width = width;
canvas.height = height;
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setSize(width, height);
renderer.setClearColor(0xffffff, 1);
renderer.shadowMap.enabled = true; // Enable shadow maps
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow maps

camera.position.z = 5;

// Create geometry with higher subdivisions for smoother surface
const geometry = new THREE.IcosahedronGeometry(2, 10);

// Apply Perlin noise for fewer, more prominent bulbous parts
const perlin = new ImprovedNoise();
const position = geometry.attributes.position;
const vertex = new THREE.Vector3();

// Parameters to control the noise effect
const frequency = 0.5; // Lower frequency for larger, fewer bulges
const amplitude = 0.8; // Higher amplitude for more pronounced bulges

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const noise = perlin.noise(vertex.x * frequency, vertex.y * frequency, vertex.z * frequency);
    // Apply noise selectively based on some condition to create fewer bulbs
    if (Math.abs(vertex.x) > 0.5 || Math.abs(vertex.y) > 0.5 || Math.abs(vertex.z) > 0.5) {
        vertex.addScaledVector(vertex.clone().normalize(), noise * amplitude);
    }
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
}
geometry.attributes.position.needsUpdate = true;
geometry.computeVertexNormals();

// Create material with refined settings
const material = new THREE.MeshStandardMaterial({
  flatShading: false,  // Use smooth shading
});

// Create mesh
const mesh = new THREE.Mesh(geometry, material);
mesh.castShadow = true; // Enable casting shadows
mesh.receiveShadow = true; // Enable receiving shadows
scene.add(mesh);

// Scale the geometry to make it bigger
mesh.scale.set(0.75, 1.45, 0.75); // Adjust the scale factors slightly

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

// Add directional light with shadows
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
light.castShadow = true; // Enable shadows
light.shadow.mapSize.width = 1024; // Increase shadow map resolution
light.shadow.mapSize.height = 1024; // Increase shadow map resolution
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
scene.add(light);

// Add OrbitControls for user interaction
const controls = new OrbitControls(camera, renderer.domElement);

// Function to handle image upload
function handleImageUpload(event) {
  const file = event.target.files[0]; // Get the uploaded file
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // Once the image is loaded, create a texture from it
    const texture = new THREE.TextureLoader().load(reader.result);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    // Apply the texture to the material
    mesh.material.map = texture;
    mesh.material.needsUpdate = true;
  }, false);

  if (file) {
    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  }
}

// Event listener for file input change
document.getElementById('imageUpload').addEventListener('change', handleImageUpload);


// Function to handle text input and apply it as texture overlay
function handleTextInput() {
  const text = document.getElementById('textInput').value;

  // Create a canvas and context to render the text
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512; // Adjust the canvas size as needed
  canvas.height = 512;
  context.fillStyle = '#FFFFFF'; // White background
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = '16px Arial'; // Adjust font size and style as needed
  context.fillStyle = '#000000'; // Black text color
  context.textAlign = 'center';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  // Create texture from the canvas
  const textTexture = new THREE.CanvasTexture(canvas);

  // Apply the texture to the material
  mesh.material.alphaMap = textTexture;
  mesh.material.transparent = true;
  mesh.material.needsUpdate = true;
}



//Event listener for text input
document.getElementById('uploadTextButton').addEventListener('click', handleTextInput);


// Function to resize renderer and camera aspect ratio on window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

// Animation loop
const animate = function () {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();




// // Function to handle text input
// function handleTextInput() {
//   const text = document.getElementById('textInput').value;

//   // Create a canvas and context to render the text
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   canvas.width = 512; // Adjust the canvas size as needed
//   canvas.height = 512;
//   context.fillStyle = '#FFFFFF'; // White background
//   context.fillRect(0, 0, canvas.width, canvas.height);
//   context.font = '16px Arial'; // Adjust font size and style as needed
//   context.fillStyle = '#000000'; // Black text color
//   context.textAlign = 'center';
//   context.fillText(text, canvas.width / 2, canvas.height / 2);

//   // Create texture from the canvas
//   const texture = new THREE.CanvasTexture(canvas);

//   // Apply the texture to the material
//   mesh.material.map = texture;
//   mesh.material.needsUpdate = true;
// }

