import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Sparkles, Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';

function FloatingShapes() {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x += 0.005 * (index + 1);
        child.rotation.z += 0.0025 * (index + 1);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Torus Knot */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh
          rotation={[1.35, 0.55, 0]}
          onPointerOver={() => setHovered('torus')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'torus' ? 1.2 : 1}
        >
          <torusKnotGeometry args={[1.6, 0.28, 100, 16]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            metalness={1}
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Floating Icosahedron */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh
          position={[2.2, -0.4, 1.5]}
          rotation={[0.35, 1.4, 0.2]}
          onPointerOver={() => setHovered('icosa')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'icosa' ? 1.3 : 1}
        >
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color="#fb7185"
            emissive="#f472b6"
            metalness={0.9}
            roughness={0.12}
          />
        </mesh>
      </Float>

      {/* Sphere */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh
          position={[-1.8, 0.9, 2.1]}
          onPointerOver={() => setHovered('sphere')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'sphere' ? 1.4 : 1}
        >
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#a855f7"
            metalness={0.75}
            roughness={0.08}
          />
        </mesh>
      </Float>

      {/* New: Floating Cube */}
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh
          position={[0, 1.5, -1]}
          onPointerOver={() => setHovered('cube')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'cube' ? 1.25 : 1}
        >
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* New: Octahedron */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={2.2}>
        <mesh
          position={[-2.5, -1, 0.5]}
          onPointerOver={() => setHovered('octa')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'octa' ? 1.35 : 1}
        >
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#059669"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Energy Rings */}
      <mesh position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.2, 4.4, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.22} />
      </mesh>
      <mesh position={[0, -2.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 3.15, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  const particleCount = 20;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.6} />
    </points>
  );
}

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#02030a] text-white">
      <div className="absolute inset-0 opacity-95">
        <Canvas camera={{ position: [0, 0, 10], fov: 34 }} shadows>
          <fog attach="fog" args={['#02030a', 8, 18]} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 2, 6]} intensity={1.2} color="#9be4ff" />
          <pointLight position={[-4, -2, 2]} color="#22d3ee" intensity={1.5} />
          <pointLight position={[2.5, 1.3, 4.5]} color="#f472b6" intensity={0.9} />
          <FloatingShapes />
          <FloatingParticles />
          <Sparkles count={150} size={6} scale={18} color="#60a5fa" />
          <Stars radius={120} depth={50} count={4000} factor={4} saturation={0.5} fade speed={0.2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
          <Environment preset="night" />
        </Canvas>
      </div>

      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 shadow-brand">
          Interactive 3D Portfolio
        </div>
        <h1 className="text-[4rem] font-black uppercase tracking-[-0.05em] text-white drop-shadow-[0_0_50px_rgba(56,189,248,0.4)] sm:text-[5.5rem]">
          Saurabh Anand
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300/90 sm:text-xl">
          Immersive full-stack architect crafting digital experiences with cutting-edge 3D technology and interactive design.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#connect" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#02030a] transition hover:from-cyan-400 hover:to-blue-400 hover:scale-105">
            Let&apos;s Connect
          </a>
          <a href="#skills" className="rounded-full border border-cyan-500/35 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-300 hover:text-white hover:scale-105">
            Explore Skills
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#02030a] to-transparent" />
    </section>
  );
}
