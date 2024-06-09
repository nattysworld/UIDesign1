// // import * as THREE from 'three';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// // import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

// // // Initialize scene, camera, and renderer
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer({ antialias: true });
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // renderer.setClearColor(0xffffff, 1)
// // renderer.shadowMap.enabled = true; // Enable shadow maps
// // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow maps
// // document.body.appendChild(renderer.domElement);

// // camera.position.z = 5;

// // // Create geometry with higher subdivisions for smoother surface
// // const geometry = new THREE.IcosahedronGeometry(2, 10);

// // // Apply Perlin noise for fewer, more prominent bulbous parts
// // const perlin = new ImprovedNoise();
// // const position = geometry.attributes.position;
// // const vertex = new THREE.Vector3();

// // // Parameters to control the noise effect
// // const frequency = 0.5; // Lower frequency for larger, fewer bulges
// // const amplitude = 0.8; // Higher amplitude for more pronounced bulges

// // for (let i = 0; i < position.count; i++) {
// //     vertex.fromBufferAttribute(position, i);
// //     const noise = perlin.noise(vertex.x * frequency, vertex.y * frequency, vertex.z * frequency);
// //     // Apply noise selectively based on some condition to create fewer bulbs
// //     if (Math.abs(vertex.x) > 0.5 || Math.abs(vertex.y) > 0.5 || Math.abs(vertex.z) > 0.5) {
// //         vertex.addScaledVector(vertex.clone().normalize(), noise * amplitude);
// //     }
// //     position.setXYZ(i, vertex.x, vertex.y, vertex.z);
// // }
// // geometry.attributes.position.needsUpdate = true;
// // geometry.computeVertexNormals();

// // // Load textures
// // const textureLoader = new THREE.TextureLoader();
// // const displacementMap = textureLoader.load('/assets/displacemp.png');
// // const texture = textureLoader.load('/assets/texture.jpeg');

// // // Create material with refined settings
// // const material = new THREE.MeshStandardMaterial({
// //   map: texture,
// //   displacementMap: displacementMap,
// //   displacementScale: 0.2,  // Adjusted for finer displacement
// //   flatShading: false,  // Use smooth shading
// // });

// // // Create mesh
// // const mesh = new THREE.Mesh(geometry, material);
// // mesh.castShadow = true; // Enable casting shadows
// // mesh.receiveShadow = true; // Enable receiving shadows
// // scene.add(mesh);

// // // Scale the geometry to make it bigger
// // mesh.scale.set(0.9, 1.3, 0.7); // x, y, z scaling factors

// // // Add ambient light
// // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
// // scene.add(ambientLight);

// // // Add directional light with shadows
// // const light = new THREE.DirectionalLight(0xffffff, 1);
// // light.position.set(1, 1, 1).normalize();
// // light.castShadow = true; // Enable shadows
// // light.shadow.mapSize.width = 1024; // Increase shadow map resolution
// // light.shadow.mapSize.height = 1024; // Increase shadow map resolution
// // light.shadow.camera.near = 0.5;
// // light.shadow.camera.far = 500;
// // scene.add(light);

// // // Add OrbitControls for user interaction
// // const controls = new OrbitControls(camera, renderer.domElement);

// // // Animation loop
// // const animate = function () {
// //   requestAnimationFrame(animate);
// //   controls.update();
// //   renderer.render(scene, camera);
// // };

// // animate();


// //working file!//
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

// // Initialize scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff, 1);
// renderer.shadowMap.enabled = true; // Enable shadow maps
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow maps
// document.body.appendChild(renderer.domElement);

// camera.position.z = 5;

// // Create geometry with higher subdivisions for smoother surface
// const geometry = new THREE.IcosahedronGeometry(2, 10);

// // Apply Perlin noise for fewer, more prominent bulbous parts
// const perlin = new ImprovedNoise();
// const position = geometry.attributes.position;
// const vertex = new THREE.Vector3();

// // Parameters to control the noise effect
// const frequency = 0.5; // Lower frequency for larger, fewer bulges
// const amplitude = 0.8; // Higher amplitude for more pronounced bulges

// for (let i = 0; i < position.count; i++) {
//     vertex.fromBufferAttribute(position, i);
//     const noise = perlin.noise(vertex.x * frequency, vertex.y * frequency, vertex.z * frequency);
//     // Apply noise selectively based on some condition to create fewer bulbs
//     if (Math.abs(vertex.x) > 0.5 || Math.abs(vertex.y) > 0.5 || Math.abs(vertex.z) > 0.5) {
//         vertex.addScaledVector(vertex.clone().normalize(), noise * amplitude);
//     }
//     position.setXYZ(i, vertex.x, vertex.y, vertex.z);
// }
// geometry.attributes.position.needsUpdate = true;
// geometry.computeVertexNormals();

// // Load textures
// const textureLoader = new THREE.TextureLoader();
// let texture = textureLoader.load('/assets/texture.jpeg');

// // Create material with refined settings
// const material = new THREE.MeshStandardMaterial({
//   map: texture,
//   flatShading: false,  // Use smooth shading
// });

// // Create mesh
// const mesh = new THREE.Mesh(geometry, material);
// mesh.castShadow = true; // Enable casting shadows
// mesh.receiveShadow = true; // Enable receiving shadows
// scene.add(mesh);

// // Scale the geometry to make it bigger
// mesh.scale.set(0.9, 1.3, 0.7); // x, y, z scaling factors

// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
// scene.add(ambientLight);

// // Add directional light with shadows
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// light.castShadow = true; // Enable shadows
// light.shadow.mapSize.width = 1024; // Increase shadow map resolution
// light.shadow.mapSize.height = 1024; // Increase shadow map resolution
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 500;
// scene.add(light);

// // Add OrbitControls for user interaction
// const controls = new OrbitControls(camera, renderer.domElement);

// // Function to handle image upload


// // Function to handle image upload
// function handleImageUpload(event) {
//   console.log('Image uploaded!'); // Add this line for debugging
//   const file = event.target.files[0]; // Get the uploaded file
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       texture = new THREE.TextureLoader().load(event.target.result); // Load the uploaded image as a texture
//       mesh.material.map = texture; // Apply the texture to the material
//       mesh.material.needsUpdate = true; // Ensure the material gets updated
//     };
//     reader.readAsDataURL(file); // Read the uploaded file as data URL
//   }
// }


// // Create input element for image upload
// const input = document.createElement('input');
// input.type = 'file';
// input.accept = 'image/*'; // Accept any image format
// input.addEventListener('change', handleImageUpload);

// // Function to resize renderer and camera aspect ratio on window resize
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize);



// // Animation loop
// const animate = function () {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// };

// animate();
// //working file end?//






// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

// let texture; // Declare texture variable

// // Initialize scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff, 1);
// renderer.shadowMap.enabled = true; // Enable shadow maps
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow maps
// document.body.appendChild(renderer.domElement);

// camera.position.z = 5;

// // Create geometry with higher subdivisions for smoother surface
// const geometry = new THREE.IcosahedronGeometry(2, 10);

// // Apply Perlin noise for fewer, more prominent bulbous parts
// const perlin = new ImprovedNoise();
// const position = geometry.attributes.position;
// const vertex = new THREE.Vector3();

// // Parameters to control the noise effect
// const frequency = 0.5; // Lower frequency for larger, fewer bulges
// const amplitude = 0.8; // Higher amplitude for more pronounced bulges

// for (let i = 0; i < position.count; i++) {
//     vertex.fromBufferAttribute(position, i);
//     const noise = perlin.noise(vertex.x * frequency, vertex.y * frequency, vertex.z * frequency);
//     // Apply noise selectively based on some condition to create fewer bulbs
//     if (Math.abs(vertex.x) > 0.5 || Math.abs(vertex.y) > 0.5 || Math.abs(vertex.z) > 0.5) {
//         vertex.addScaledVector(vertex.clone().normalize(), noise * amplitude);
//     }
//     position.setXYZ(i, vertex.x, vertex.y, vertex.z);
// }
// geometry.attributes.position.needsUpdate = true;
// geometry.computeVertexNormals();

// // Load initial texture
// const textureLoader = new THREE.TextureLoader();
// texture = textureLoader.load('/assets/texture.jpeg');

// // Create material with refined settings
// const material = new THREE.MeshStandardMaterial({
//   map: texture,
//   flatShading: false,  // Use smooth shading
// });

// // Create mesh
// const mesh = new THREE.Mesh(geometry, material);
// mesh.castShadow = true; // Enable casting shadows
// mesh.receiveShadow = true; // Enable receiving shadows
// scene.add(mesh);

// // Scale the geometry to make it bigger
// mesh.scale.set(0.9, 1.3, 0.7); // x, y, z scaling factors

// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
// scene.add(ambientLight);

// // Add directional light with shadows
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// light.castShadow = true; // Enable shadows
// light.shadow.mapSize.width = 1024; // Increase shadow map resolution
// light.shadow.mapSize.height = 1024; // Increase shadow map resolution
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 500;
// scene.add(light);

// // Add OrbitControls for user interaction
// const controls = new OrbitControls(camera, renderer.domElement);

// // Function to handle image upload
// function handleImageUpload(event) {
//   console.log('Image uploaded!'); // Add this line for debugging
//   const file = event.target.files[0]; // Get the uploaded file
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       texture = new THREE.TextureLoader().load(event.target.result); // Load the uploaded image as a texture
//       mesh.material.map = texture; // Apply the texture to the material
//       mesh.material.needsUpdate = true; // Ensure the material gets updated
//     };
//     reader.readAsDataURL(file); // Read the uploaded file as data URL
//   }
// }

// // Create input element for image upload
// const input = document.createElement('input');
// input.type = 'file';
// input.accept = 'image/*'; // Accept any image format
// input.addEventListener('change', handleImageUpload);

// // Function to resize renderer and camera aspect ratio on window resize
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize);

// // Animation loop
// const animate = function () {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// };

// animate();



import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

let texture; // Declare texture variable

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
renderer.shadowMap.enabled = true; // Enable shadow maps
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow maps
document.body.appendChild(renderer.domElement);

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

// Load initial texture
const textureLoader = new THREE.TextureLoader();
texture = textureLoader.load('/assets/texture.jpeg');

// Create material with refined settings
const material = new THREE.MeshStandardMaterial({
  map: texture,
  flatShading: false,  // Use smooth shading
});

// Create mesh
const mesh = new THREE.Mesh(geometry, material);
mesh.castShadow = true; // Enable casting shadows
mesh.receiveShadow = true; // Enable receiving shadows
scene.add(mesh);

// Scale the geometry to make it bigger
mesh.scale.set(0.9, 1.3, 0.7); // x, y, z scaling factors

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
  console.log('File selected:', event.target.files[0]); // Check if file is selected
  const file = event.target.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      console.log('Image loaded:', event.target.result); // Log when image is loaded
      texture = new THREE.TextureLoader().load(event.target.result); // Load the uploaded image as a texture
      if (texture) {
        console.log('Texture loaded successfully.'); // Log when texture is loaded
        mesh.material.map = texture; // Apply the texture to the material
        mesh.material.needsUpdate = true; // Ensure the material gets updated
      } else {
        console.error('Failed to load texture.'); // Log an error if texture loading fails
      }
    };
    reader.readAsDataURL(file); // Read the uploaded file as data URL
  } else {
    console.error('No file selected.'); // Log an error if no file is selected
  }
}

// Create input element for image upload
const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*'; // Accept any image format
input.addEventListener('change', handleImageUpload);

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
