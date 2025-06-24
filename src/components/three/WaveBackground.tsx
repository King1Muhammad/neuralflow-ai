
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';

interface WaveBackgroundProps {
  color?: string;
  speed?: number;
}

const WaveBackground = ({ color = '#ff00c1', speed = 1 }: WaveBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.4} />
        <WaveMesh color={color} speed={speed} />
      </Canvas>
    </div>
  );
};

function WaveMesh({ color, speed }: { color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(8, 8, 32, 32);
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed;
      const positions = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.3;
        positions.setZ(i, z);
      }
      
      positions.needsUpdate = true;
      meshRef.current.rotation.z += 0.001 * speed;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 4, 0, 0]}>
      <meshPhongMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

export default WaveBackground;
