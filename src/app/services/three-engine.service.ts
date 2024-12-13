import { ElementRef, Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Injectable({
  providedIn: 'root'
})
export class ThreeEngineService {

  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.Light;
  private frameId!: number;
  private cube!: THREE.Mesh;
  private logo!: THREE.Group<THREE.Object3DEventMap>;
  private loader: GLTFLoader = new GLTFLoader();

  constructor(private ngZone: NgZone) { }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, 1, 0.1, 1000
    );
    this.camera.position.set(0, -0.2, 4.4);

    this.scene.add(this.camera);

    this.light = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(this.light);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 0, 5);
    dirLight.target.position.set(0, 0, 0);
    this.scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight2.position.set(1, 0, 5);
    dirLight2.target.position.set(0, 0, 0);
    this.scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight3.position.set(-1, 0, 5);
    dirLight3.target.position.set(0, 0, 0);
    this.scene.add(dirLight3);

    const dirLight4 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight4.position.set(5, 0, 1);
    dirLight4.target.position.set(0, 0, 0);
    this.scene.add(dirLight4);

    const dirLight5 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight5.position.set(-5, 0, 1);
    dirLight5.target.position.set(0, 0, 0);
    this.scene.add(dirLight5);

    const dirLight6 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight6.position.set(0, 3, 3);
    dirLight6.target.position.set(0, 0.5, 0);
    this.scene.add(dirLight6);

    const dirLight7 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight7.position.set(0, -3, 3);
    dirLight7.target.position.set(0, -0.5, 0);
    this.scene.add(dirLight7);    

    // this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
    // this.cube.position.set(0, 0, -2);
    // // this.scene.add(this.cube);

    let rendererSize;
    if (window.innerWidth > 1900) {
      rendererSize = 600;
    } else if (window.innerWidth > 400) {
      rendererSize = 400;
    } else {
      rendererSize = 200;
    };
    
    this.renderer.setSize(rendererSize, rendererSize);

    this.loader.load('assets/3d/logo.glb', (gltf) => {
      this.logo = gltf.scene;
      this.logo.position.set(0, 0, 0);
      this.logo.rotation.x = Math.PI / 2;
      // this.logo.traverse((child) => {
      //   if (child instanceof THREE.Mesh) {
      //     console.log('material')
      //     child.material = new THREE.MeshStandardMaterial({
      //       color: 0xff0000,
      //       metalness: 1,
      //       roughness: 0.2,
      //     });
      //   }
      // });
      this.scene.add(this.logo);
    }, undefined, (err) => {
      console.error(err)
    });
  }

  animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== "loading") {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        })
      }
    })
  }

  render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // this.cube.rotation.set(this.cube.rotation.x, this.cube.rotation.y += 0.02, 0);
    if (this.logo) {
      this.logo.rotation.set(this.logo.rotation.x, 0, this.logo.rotation.z += 0.01);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
