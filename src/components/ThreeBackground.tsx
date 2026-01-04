import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Stars = (props: any) => {
    const ref = useRef<any>();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 })
    );

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#06b6d4" // Cyan-500
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const FloatingCrystals = () => {
    return (
        <group>
            {/* Floating high-tech geometric shapes */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[1, 0, -1]}>
                    <icosahedronGeometry args={[0.2, 0]} />
                    <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-1.2, 0.5, -0.5]}>
                    <octahedronGeometry args={[0.15, 0]} />
                    <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>
            <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
                <mesh position={[0.5, -0.8, -0.2]}>
                    <dodecahedronGeometry args={[0.1, 0]} />
                    <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>
        </group>
    );
};

export const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <group>
                    <Stars />
                    <FloatingCrystals />
                </group>
            </Canvas>
        </div>
    );
};
