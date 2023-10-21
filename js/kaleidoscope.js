/**

 *

 * CREDITS https://www.youtube.com/watch?v=f4s1h2YETNY&t=425s
 *
 */

import * as THREE from "https://cdn.skypack.dev/three@0.151.3";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    12,
    window.innerWidth / window.innerHeight,
    0.5,
    10
);

camera.position.z = 5;

console.log(`width: ${window.innerWidth}\nheight: ${window.innerHeight}`);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let ang_rad = (camera.fov * Math.PI) / 180;
let fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
const geometry = new THREE.PlaneGeometry(fov_y * camera.aspect, fov_y);

const uniforms = {
    u_resolution: {
        value: { x: window.innerWidth, y: window.innerHeight }
    },
    u_time: { value: 0.0 },
    u_mouse: { value: { x: null, y: null } },
    u_color: { value: { r: null, g: null, b: null } }
};

const material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
    uniforms
});

const plane = new THREE.Mesh(geometry, material);
plane.position.x = 0;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

function onWindowResize() {
    if (uniforms.u_resolution !== undefined) {
        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = window.innerHeight;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

document.addEventListener("mousemove", (e) => {
    uniforms.u_mouse.value.x = e.clientX;
    uniforms.u_mouse.value.y = e.clientY;
});

const clock = new THREE.Clock();

function animate() {
    // update time uniform
    uniforms.u_time.value = clock.getElapsedTime();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();