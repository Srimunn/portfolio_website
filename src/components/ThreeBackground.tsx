
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const ref = useRef<THREE.Points>(null!);
  
  const sphere = useMemo(() => {
    const points = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = Math.random() * 2 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00FFFF" // Electric Cyan
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCubes() {
  const meshes = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshes.current) {
      meshes.current.rotation.x += delta * 0.1;
      meshes.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={meshes}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 2) * 3,
            Math.cos(i * 2) * 3,
            Math.sin(i) * 2
          ]}
          rotation={[i, i * 0.5, 0]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#8A2BE2" : "#00CED1"} // Royal Purple or Teal/Aqua
            emissive={i % 2 === 0 ? "#8A2BE2" : "#00CED1"}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingCubes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
