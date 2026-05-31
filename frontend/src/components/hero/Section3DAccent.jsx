import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function FloatingCluster() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[-1.6, 0.4, 0]}>
          <torusGeometry args={[0.8, 0.22, 32, 120]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            metalness={0.85}
            roughness={0.1}
            distort={0.15}
            speed={1.5}
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[1.5, -0.6, -0.3]}> 
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial
            color="#fb7185"
            emissive="#f472b6"
            metalness={0.9}
            roughness={0.12}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={2} floatIntensity={1.2}>
        <mesh position={[0.4, 1.1, 0.8]}> 
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#9333ea"
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.3}>
        <mesh position={[0.8, -1.2, 1]}> 
          <cylinderGeometry args={[0.25, 0.25, 1.6, 32]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0ea5e9"
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 2.4, 64]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export default function Section3DAccent() {
  return null;
}
