import './style.css'

import * as THREE from 'three'

// import the orbitcontrols class
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
// window.addEventListener('mousemove', (e) => {
//   cursor.x = e.clientX / width - 0.5
//   cursor.y = -(e.clientY / height - 0.5)
// })

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

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.target.y = 2
// controls.update()

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
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.y = cursor.y * 5
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  // camera.lookAt(mesh.position)

  // update controls if using the dumpint orbitcontrols
  controls.update()

  // render the screen
  renderer.render(scene, camera)
  // call this function on every frame
  window.requestAnimationFrame(tick)
}

tick()
