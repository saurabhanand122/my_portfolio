import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { memo } from 'react';

function Stars() {
  const ref = useRef();

  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      sphere[i * 3] = (Math.random() - 0.5) * 100;
      sphere[i * 3 + 1] = (Math.random() - 0.5) * 100;
      sphere[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return [sphere];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 100;
      ref.current.rotation.y -= delta / 150;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default memo(function StarBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <Stars />
      </Canvas>
    </div>
  );
});