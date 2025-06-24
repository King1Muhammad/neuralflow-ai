
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Float } from '@react-three/drei';

const particles = 5000;
const particleSize = 0.02;

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1.75] }}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Points />
      </Float>
    </Canvas>
  );
};

function Points() {
  const { size } = useThree();
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 4;
      positions[i3 + 1] = (Math.random() - 0.5) * 4;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;
      
      color.set(Math.random() > 0.5 ? '#00c2ff' : '#ff00c1');
      color.toArray(colors, i3);
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x += delta / 15;
        ref.current.rotation.y += delta / 20;

        const { pointer } = state;
        const targetX = pointer.x * 0.2;
        const targetY = pointer.y * 0.2;

        ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.02;
        ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.02;
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
      <pointsMaterial size={particleSize} vertexColors={true} sizeAttenuation={true} transparent={false} />
    </points>
  );
}

export default ThreeScene;
