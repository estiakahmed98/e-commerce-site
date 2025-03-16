"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Environment,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three"; // Import THREE for lighting

function Model() {
  const { scene } = useGLTF("/assets/3d/heel.glb");
  const modelRef = useRef<THREE.Object3D | null>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.5; // Faster rotation
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />
  );
}

export default function ProductViewer3D() {
  return (
    <div className="h-full w-full rounded-lg border-2">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45} />

        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5]} intensity={1} />
          <spotLight position={[-5, 5, 5]} intensity={1} />

          {/* Scene Controls */}
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model />
          </PresentationControls>
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
