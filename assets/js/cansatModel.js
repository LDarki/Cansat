import * as THREE from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/GLTFLoader';

window.addEventListener('load', () => {

  const container = document.getElementById('model');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load('assets/model.glb', (gltf) => {

    scene.add(gltf.scene);

    let light = new THREE.AmbientLight( 0xffaaff ); 
    light.position.set(10,10,10)

    scene.add( light );

    camera.position.set(0, 60, 200);

    const modelMesh = gltf.scene.children[0];

    const material = new THREE.MeshBasicMaterial({
        color: 0xd9d9d9
    });

		const edges = new THREE.WireframeGeometry( modelMesh.geometry );
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xc2c2c2
    });
    const lines = new THREE.LineSegments( edges, lineMaterial );
    // Add line segments to scene
    modelMesh.add( lines );

    modelMesh.material = material;

    renderer.setClearColor(0x000000, 0);

    gltf.scene.rotation.x = 90;

    const animate = function () {
      requestAnimationFrame(animate);

      gltf.scene.rotation.z += 0.005;

      renderer.render(scene, camera);
    };

    animate();

  },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (error) => {
      console.error(error);
    });
});