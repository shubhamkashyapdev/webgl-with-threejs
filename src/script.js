import './style.css'

import * as THREE from 'three'
import gsap from 'gsap'

// element
const canvas = document.getElementById('webgl')

// new schene
const scene = new THREE.Scene()

// simple box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1) // x, y, z axis

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material) // create a mesh with geometry & material

scene.add(mesh)

// sizes
const sizes = {
  width: 800,
  height: 600,
}
const { width, height } = sizes

// camera

// Perspective Camera: 1. field of view (degree | vertical) 2. Aspect Ratio 3.
// const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)

camera.position.x = 2
camera.position.y = 2
camera.position.z = 2

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

  mesh.rotation.y = elapsedTime

  // render the screen
  renderer.render(scene, camera)
  // call this function on every frame
  window.requestAnimationFrame(tick)
}

tick()
