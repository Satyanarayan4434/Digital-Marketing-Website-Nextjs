"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

function RotatingShape() {
    const meshRef = useRef();

    // Rotation logic
    useFrame(() => {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x += 0.005;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.2, 1]} />
            <meshStandardMaterial
                color="#888"
                metalness={0.9}
                roughness={0.2}
                envMapIntensity={1.5}
            />
        </mesh>
    );
}

export default function RotatingCanvas() {
    return (
        <Canvas
        pointerEvents="none"
        camera={{ position: [0, 0, 3] }}
        style={{ background: "transparent" }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.3} />
            
            {/* Environment for realistic reflections */}
            <Environment preset="city" />
            
            <RotatingShape />

            
        </Canvas>
    );
}
