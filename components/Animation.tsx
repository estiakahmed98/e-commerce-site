"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface AnimationProps {
  modelUrl: string;
}

const Animation: React.FC<AnimationProps> = ({ modelUrl }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const isMouseInside = useRef<boolean>(false);
  const isMouseDown = useRef<boolean>(false);
  const prevMouseX = useRef<number>(0);

  let autoRotationSpeed: number = 0.01;
  let book: THREE.Object3D | null = null;

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#A2C8FD");
      gradient.addColorStop(1, "#EAD6FD");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    // Load Book Model from prop
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      book = gltf.scene;
      if (book) {
        book.scale.set(1, 1, 1);
        book.position.set(0, 0, 0);
        scene.add(book);
      }
    });

    // Animate Function
    const animate = () => {
      requestAnimationFrame(animate);

      if (book) {
        if (!isMouseInside.current && !isMouseDown.current) {
          book.rotation.y += autoRotationSpeed;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse events
    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown.current = true;
      prevMouseX.current = event.clientX;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown.current && book) {
        const deltaX = event.clientX - prevMouseX.current;
        book.rotation.y += deltaX * 0.005;
        prevMouseX.current = event.clientX;
      }
    };

    if (mountRef.current) {
      mountRef.current.addEventListener("mousedown", handleMouseDown);
      mountRef.current.addEventListener("mouseup", handleMouseUp);
      mountRef.current.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeEventListener("mousedown", handleMouseDown);
        mountRef.current.removeEventListener("mouseup", handleMouseUp);
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      renderer.dispose();
    };
  }, [modelUrl]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default Animation;
