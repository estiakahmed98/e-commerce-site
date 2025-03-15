"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PresentationControls, Environment, useGLTF } from "@react-three/drei"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ProductViewer3D() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
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
  )
}

