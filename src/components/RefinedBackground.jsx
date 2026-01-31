import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function SubtleParticles() {
  const ref = useRef();
  const count = 1000;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const spread = 30;

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

export default function RefinedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />

      <div className="fixed inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 50 }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <SubtleParticles />
        </Canvas>
      </div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
    </>
  );
}
