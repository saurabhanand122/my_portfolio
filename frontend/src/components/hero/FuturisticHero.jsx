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
          <torusKnotGeometry args={[1.6, 0.28, 50, 8]} />
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

      {/* Simple Sphere */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh
          position={[-1.8, 0.9, 2.1]}
          onPointerOver={() => setHovered('sphere')}
          onPointerOut={() => setHovered(null)}
          scale={hovered === 'sphere' ? 1.2 : 1}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#a855f7"
            metalness={0.75}
            roughness={0.08}
          />
        </mesh>
      </Float>
      {/* Simple Energy Ring */}
      <mesh position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.2, 4.4, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  return null;
}

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden bg-[#02030a] text-white">
      <div className="absolute inset-0 opacity-95">
        <Canvas camera={{ position: [0, 0, 10], fov: 34 }} gl={{ antialias: false }}>
          <fog attach="fog" args={['#02030a', 8, 18]} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 2, 6]} intensity={1.2} color="#9be4ff" />
          <pointLight position={[-4, -2, 2]} color="#22d3ee" intensity={1.5} />
          <pointLight position={[2.5, 1.3, 4.5]} color="#f472b6" intensity={0.9} />
          <FloatingShapes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.05} />
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
