
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface GeometricBackgroundProps {
  color?: string;
  speed?: number;
}

const GeometricBackground = ({ color = '#00c2ff', speed = 1 }: GeometricBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <FloatingGeometry color={color} speed={speed} />
      </Canvas>
    </div>
  );
};

function FloatingGeometry({ color, speed }: { color: string; speed: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 * speed;
      groupRef.current.rotation.x += 0.005 * speed;
    }

    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.rotation.x += 0.01 * (i + 1) * speed;
        mesh.rotation.z += 0.005 * (i + 1) * speed;
        mesh.position.y = Math.sin(state.clock.getElapsedTime() + i) * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => el && (meshRefs.current[i] = el)}
          position={[
            Math.cos(i * Math.PI * 0.25) * 3,
            Math.sin(i * Math.PI * 0.25) * 2,
            Math.sin(i * Math.PI * 0.125) * 2
          ]}
        >
          {i % 3 === 0 ? (
            <boxGeometry args={[0.5, 0.5, 0.5]} />
          ) : i % 3 === 1 ? (
            <octahedronGeometry args={[0.4]} />
          ) : (
            <tetrahedronGeometry args={[0.4]} />
          )}
          <meshPhongMaterial color={color} transparent opacity={0.6} wireframe={i % 2 === 0} />
        </mesh>
      ))}
    </group>
  );
}

export default GeometricBackground;
