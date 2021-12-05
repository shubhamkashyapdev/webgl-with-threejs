import './style.css'

import * as THREE from 'three'
import gsap from 'gsap'

// element
const canvas = document.getElementById('webgl')
// sizes
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Cursor
 */
const cursor = {
  x: 0,
  y: 0,
}
window.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / width - 0.5
  cursor.y = -(e.clientY / height - 0.5)
  console.log(cursor)
})

// new schene
const scene = new THREE.Scene()

// simple box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1) // x, y, z axis

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material) // create a mesh with geometry & material

scene.add(mesh)

const { width, height } = sizes

// camera

// Perspective Camera: 1. field of view (degree | vertical) 2. Aspect Ratio 3.
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3

camera.lookAt(mesh.position)
scene.add(camera)

// create a renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

// resize the renderer
renderer.setSize(width, height)

// gsap animation
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

// capture the time
const clock = new THREE.Clock()

// animation
const tick = () => {
  // Same time for animation
  const elapsedTime = clock.getElapsedTime()

  // mesh.rotation.y = elapsedTime

  // update the camera
  camera.position.x = cursor.x * 10
  camera.position.y = cursor.y * 10
  camera.lookAt(mesh.position)

  // render the screen
  renderer.render(scene, camera)
  // call this function on every frame
  window.requestAnimationFrame(tick)
}

tick()
