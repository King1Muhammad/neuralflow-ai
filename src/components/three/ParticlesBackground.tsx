
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

interface ParticlesBackgroundProps {
  particleCount?: number;
  color1?: string;
  color2?: string;
  speed?: number;
}

const ParticlesBackground = ({ 
  particleCount = 3000, 
  color1 = '#00c2ff', 
  color2 = '#ff00c1',
  speed = 0.5 
}: ParticlesBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ParticleSystem count={particleCount} color1={color1} color2={color2} speed={speed} />
      </Canvas>
    </div>
  );
};

function ParticleSystem({ count, color1, color2, speed }: { count: number; color1: string; color2: string; speed: number }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
      
      color.set(Math.random() > 0.5 ? color1 : color2);
      color.toArray(colors, i3);
    }
    return { positions, colors };
  }, [count, color1, color2]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.002 * speed;
      ref.current.rotation.y += 0.003 * speed;
      
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} vertexColors={true} sizeAttenuation={true} transparent={true} opacity={0.8} />
    </points>
  );
}

export default ParticlesBackground;
